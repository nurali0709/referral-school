const crypto = require('crypto')
const { Referrer, Student } = require('../models');
const redis = require('../config/redis');

exports.generateInvite = async (req, res, next) => {
  try {
    const { name } = req.body;
    const uniqueCode = crypto.randomBytes(4).toString('hex');
    
    const referrer = await Referrer.create({ name, uniqueCode });
    res.json({ inviteLink: `http://localhost:3000/register?ref=${uniqueCode}` });
  } catch (error) {
    next(error);
  }
};

exports.getReferrerStats = async (req, res, next) => {
  try {
    const referrerId = req.params.referrerId;

    const cachedData = await redis.get(`referrerStats:${referrerId}`);
    if (cachedData) {
      return res.json(JSON.parse(cachedData));
    }

    const referrer = await Referrer.findByPk(referrerId, {
      include: { model: Student, as: 'invitedStudents' },
    });

    if (!referrer) {
      return res.status(404).json({ error: 'Referrer not found' });
    }

    const response = {
      referrerName: referrer.name,
      totalInvited: referrer.invitedStudents.length,
      invitedStudents: referrer.invitedStudents.map(student => ({
        name: student.name,
        email: student.email,
        lessons: student.lessons,
      })),
    };

    await redis.set(`referrerStats:${referrerId}`, JSON.stringify(response), 'EX', 3600);

    res.json(response);
  } catch (error) {
    next(error);
  }
};
