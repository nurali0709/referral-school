const { Student, Referrer } = require('../models');
const redis = require('../config/redis');

exports.registerStudent = async (req, res, next) => {
  try {
    const { name, phone, email, ref } = req.body;

    const referrer = await Referrer.findOne({ where: { uniqueCode: ref } });

    if (!referrer) {
      return res.status(400).json({ error: 'Invalid referral code' });
    }

    const student = await Student.create({ name, phone, email, referrerId: referrer.id });
    res.status(201).json({ message: 'Registration successful', studentId: student.id });
  } catch (error) {
    next(error);
  }
};

exports.processPayment = async (req, res, next) => {
  try {
    const { studentId } = req.body;

    const student = await Student.findByPk(studentId);
    if (!student) {
      return res.status(404).json({ error: 'Student not found' });
    }

    student.lessons += 1;
    await student.save();

    const referrer = await Referrer.findByPk(student.referrerId);
    if (referrer) {
      referrer.lessons = (referrer.lessons || 0) + 1;
      await referrer.save();

      await redis.del(`referrerStats:${referrer.id}`);
    }

    res.json({ message: 'Payment processed and lessons added' });
  } catch (error) {
    next(error);
  }
};
