const bcrypt = require('bcryptjs');
const db = require('../models');
const { signToken } = require('../utils/jwt');

function sanitizeUser(userInstance) {
  return {
    id: userInstance.id,
    name: userInstance.name,
    email: userInstance.email,
    role: userInstance.role,
  };
}

exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email i password su obavezni.' });
    }

    if (password.length < 6) {
      return res.status(400).json({ message: 'Password mora imati bar 6 karaktera.' });
    }

    const existing = await db.User.findOne({ where: { email } });
    if (existing) {
      return res.status(409).json({ message: 'Email je već u upotrebi.' });
    }

    const saltRounds = Number(process.env.BCRYPT_SALT_ROUNDS || 10);
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = await db.User.create({
      name,
      email,
      passwordHash,
      role: 'user', // ne dozvoljavamo da frontend postavlja role
    });

    const token = signToken({ id: user.id, role: user.role });

    return res.status(201).json({
      token,
      user: sanitizeUser(user),
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Greška pri registraciji.' });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Email i password su obavezni.' });
    }

    // ovde nam treba passwordHash => scope withPassword
    const user = await db.User.scope('withPassword').findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: 'Pogrešan email ili lozinka.' });
    }

    const ok = await bcrypt.compare(password, user.passwordHash);
    if (!ok) {
      return res.status(401).json({ message: 'Pogrešan email ili lozinka.' });
    }

    const token = signToken({ id: user.id, role: user.role });

    return res.json({
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Greška pri login-u.' });
  }
};

exports.me = async (req, res) => {
  return res.json({ user: req.user });
};
