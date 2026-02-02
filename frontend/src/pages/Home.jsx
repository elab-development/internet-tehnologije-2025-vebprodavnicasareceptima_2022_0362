//Home stranica 

import { useState } from 'react';
import Button from '../components/Button';

export default function Home({ role, onRoleChange }) {
  const [authRole, setAuthRole] = useState(null);
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [registerForm, setRegisterForm] = useState({ name: '', email: '', password: '' });

  const handleRoleSelect = (selectedRole) => {
  if (selectedRole === 'guest') {
    onRoleChange(selectedRole);
    return;
  }

  setAuthRole(selectedRole);
  setShowRegister(false);
  setShowLogin(true);
};

  const closeAuthModals = () => {
    setShowLogin(false);
    setShowRegister(false);
  };

  const handleLoginSubmit = (e) => {
  e.preventDefault();
  if (!authRole) return;

  onRoleChange(authRole);
  closeAuthModals();
};

  const handleRegisterSubmit = (e) => {
  e.preventDefault();
  onRoleChange('user');
  closeAuthModals();
};

  return (
    <div className="home-page">
      <div className="home-content">
        <div className="hero">
          <h2>Dobrodošli na RecipeStore 🍳</h2>
          <p>Vaš put do izvrsnih recepata i kvalitetnih sastojaka</p>
        </div>

        <div className="role-selection">
          <h3>Kako želite da koristite našu aplikaciju?</h3>
          <p className="description">
            Izaberite jednu od sledećih opcija da biste nastavili
          </p>

          <div className="role-cards">
            {/* Guest Role */}
            <div className="role-card">
              <div className="role-icon">👤</div>
              <h4>Gost</h4>
              <p>Pretražujte recepte i istražite naš katalog</p>
              <ul className="role-features">
                <li>✓ Pregledajte recepte</li>
                <li>✓ Pretražujte recepte</li>
                <li>✓ Pogledajte detalje recepata</li>
              </ul>
              <Button
                label={role === 'guest' ? 'Trenutno ste Gost' : 'Nastavi kao Gost'}
                onClick={() => handleRoleSelect('guest')}
                variant={role === 'guest' ? 'disabled' : 'primary'}
                disabled={role === 'guest'}
              />
            </div>

            {/* Registered User Role */}
            <div className="role-card">
              <div className="role-icon">👨‍💼</div>
              <h4>Registrovani korisnik</h4>
              <p>Upravljajte svojim sastojcima i uređujte korpu za kupovinu</p>
              <ul className="role-features">
                <li>✓ Sve funkcionalnosti gost korisnika</li>
                <li>✓ Dodajte sastojke koje posedujete</li>
                <li>✓ Dodajte proizvode u korpu i izvršite kupovinu</li>
                <li>✓ Šačuvajte omiljene recepte</li>
              </ul>
              <Button
                label={role === 'user' ? 'Ulogovan kao Korisnik' : 'Uloguj se kao Korisnik'}
                onClick={() => handleRoleSelect('user')}
                variant={role === 'user' ? 'disabled' : 'primary'}
                disabled={role === 'user'}
              />
            </div>

            {/* Administrator Role */}
            <div className="role-card">
              <div className="role-icon">👨‍💻</div>
              <h4>Administrator</h4>
              <p>Upravljajte receptima, proizvodima i porudžbinama</p>
              <ul className="role-features">
                <li>✓ Sve funkcionalnosti ostalih korisnika</li>
                <li>✓ Upravljanje receptima</li>
                <li>✓ Upravljanje proizvodima</li>
                <li>✓ Pregled i upravljanje porudžbinama</li>
              </ul>
              <Button
                label={role === 'admin' ? 'Ulogovan kao Admin' : 'Uloguj se kao Admin'}
                onClick={() => handleRoleSelect('admin')}
                variant={role === 'admin' ? 'disabled' : 'primary'}
                disabled={role === 'admin'}
              />
            </div>
          </div>
        </div>

        {/* Current Role Info */}
        {role !== 'guest' && (
          <div className="current-role-info">
            <p>
             Trenutno ste ulogovani kao <strong>{role === 'user' ? 'Korisnik' : 'Admin'}</strong>
            </p>
          </div>
        )}
      </div>

      {/* Auth Modals */}
      {showLogin && (
        <div className="auth-modal" onClick={closeAuthModals}>
          <div className="auth-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="auth-close" onClick={closeAuthModals}>✕</button>
            <h3>{authRole === 'admin' ? 'Admin prijava' : 'Prijava'}</h3>
            <form onSubmit={handleLoginSubmit} className="auth-form">
              <label>Email</label>
              <input
                type="email"
                value={loginForm.email}
                onChange={(e) => setLoginForm({ ...loginForm, email: e.target.value })}
                className="input-field"
                required
              />
              <label>Lozinka</label>
              <input
                type="password"
                value={loginForm.password}
                onChange={(e) => setLoginForm({ ...loginForm, password: e.target.value })}
                className="input-field"
                required
              />
              <Button
                label="Prijavi se"
                variant="primary"
                style={{ width: '100%' }}
                type="submit"
              />
            </form>

            {authRole === 'user' && (
              <p className="auth-switch">
                Nemate nalog?{' '}
                <button
                  type="button"
                  className="auth-link"
                  onClick={() => {
                    setShowLogin(false);
                    setShowRegister(true);
                  }}
                >
                  Registrujte se
                </button>
              </p>
            )}
          </div>
        </div>
      )}

      {showRegister && (
        <div className="auth-modal" onClick={closeAuthModals}>
          <div className="auth-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="auth-close" onClick={closeAuthModals}>✕</button>
            <h3>Registracija</h3>
            <form onSubmit={handleRegisterSubmit} className="auth-form">
              <label>Ime i prezime</label>
              <input
                type="text"
                value={registerForm.name}
                onChange={(e) => setRegisterForm({ ...registerForm, name: e.target.value })}
                className="input-field"
                required
              />
              <label>Email</label>
              <input
                type="email"
                value={registerForm.email}
                onChange={(e) => setRegisterForm({ ...registerForm, email: e.target.value })}
                className="input-field"
                required
              />
              <label>Lozinka</label>
              <input
                type="password"
                value={registerForm.password}
                onChange={(e) => setRegisterForm({ ...registerForm, password: e.target.value })}
                className="input-field"
                required
              />
              <Button
                label="Napravi nalog"
                variant="primary"
                style={{ width: '100%' }}
                type="submit"
              />
            </form>

            <p className="auth-switch">
              Već imate nalog?{' '}
              <button
                type="button"
                className="auth-link"
                onClick={() => {
                  setShowRegister(false);
                  setShowLogin(true);
                }}
              >
                Prijavite se
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
