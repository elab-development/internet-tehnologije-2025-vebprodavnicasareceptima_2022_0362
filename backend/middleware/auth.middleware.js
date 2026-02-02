const db = require('../models');
const { verifyToken } = require('../utils/jwt');

async function requireAuth(req, res, next) {
  try {
    const authHeader = req.headers.authorization || '';
    const [type, token] = authHeader.split(' ');

    if (type !== 'Bearer' || !token) {
      return res.status(401).json({ message: 'Nedostaje Bearer token.' });
    }

    const decoded = verifyToken(token); // { id, role }

    // učitamo usera iz baze da proverimo da postoji
    const user = await db.User.scope('withPassword').findByPk(decoded.id);
    if (!user) {
      return res.status(401).json({ message: 'Korisnik više ne postoji.' });
    }

    req.user = {
      id: user.id,
      role: user.role,
      email: user.email,
      name: user.name,
    };

    next();
  } catch (err) {
    return res.status(401).json({ message: 'Nevažeći ili istekao token.' });
  }
}

function requireRole(...allowedRoles) {
  return (req, res, next) => {
    if (!req.user) return res.status(401).json({ message: 'Niste ulogovani.' });
    if (!allowedRoles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Nemate dozvolu (role).' });
    }
    next();
  };
}

module.exports = { requireAuth, requireRole };
