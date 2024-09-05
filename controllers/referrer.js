const crypto = require('crypto');
const { Referrer, Student } = require('../models');

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
    const referrer = await Referrer.findByPk(req.params.referrerId, {
      include: { model: Student, as: 'invitedStudents' },
    });

    if (!referrer) {
      return res.status(404).json({ error: 'Referrer not found' });
    }

    res.json({
      referrerName: referrer.name,
      totalInvited: referrer.invitedStudents.length,
      invitedStudents: referrer.invitedStudents.map(student => ({
        name: student.name,
        email: student.email,
        lessons: student.lessons,
      })),
    });
  } catch (error) {
    next(error);
  }
};
