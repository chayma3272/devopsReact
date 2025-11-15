import React, { useState } from 'react'

export default function Inscription() {
  const [userType, setUserType] = useState('student')
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    // Étudiant
    studentLevel: '',
    // Enseignant  
    teacherSpecialty: ''
  })

  const handleChange = (e) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Inscription:', { userType, ...formData })
  }

  return (
    <div className="min-vh-100 bg-light d-flex align-items-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            
            {/* Carte principale */}
            <div className="card shadow border-0">
              <div className="card-body p-4">
                
                {/* En-tête */}
                <div className="text-center mb-4">
                  <h2 className="text-primary fw-bold">Créer un compte</h2>
                  <p className="text-muted">Rejoignez notre plateforme éducative</p>
                </div>

                {/* Type d'utilisateur */}
                <div className="mb-4">
                  <div className="btn-group w-100" role="group">
                    <button
                      type="button"
                      className={`btn ${userType === 'student' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setUserType('student')}
                    >
                      Étudiant
                    </button>
                    <button
                      type="button"
                      className={`btn ${userType === 'teacher' ? 'btn-primary' : 'btn-outline-primary'}`}
                      onClick={() => setUserType('teacher')}
                    >
                      Enseignant
                    </button>
                  </div>
                </div>

                {/* Formulaire */}
                <form onSubmit={handleSubmit}>
                  
                  {/* Champs de base */}
                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="firstName"
                        placeholder="Prénom"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="lastName"
                        placeholder="Nom"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="mb-3">
                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      placeholder="Email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="row">
                    <div className="col-md-6 mb-3">
                      <input
                        type="password"
                        className="form-control"
                        name="password"
                        placeholder="Mot de passe"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="col-md-6 mb-3">
                      <input
                        type="password"
                        className="form-control"
                        name="confirmPassword"
                        placeholder="Confirmer mot de passe"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  {/* Champs spécifiques */}
                  {userType === 'student' && (
                    <div className="mb-3">
                      <select
                        className="form-select"
                        name="studentLevel"
                        value={formData.studentLevel}
                        onChange={handleChange}
                        required
                      >
                        <option value="">Niveau d'études</option>
                        <option value="lycee">Lycée</option>
                        <option value="bac">Baccalauréat</option>
                        <option value="licence">Licence</option>
                        <option value="master">Master</option>
                        <option value="doctorat">Doctorat</option>
                      </select>
                    </div>
                  )}

                  {userType === 'teacher' && (
                    <div className="mb-3">
                      <input
                        type="text"
                        className="form-control"
                        name="teacherSpecialty"
                        placeholder="Spécialité"
                        value={formData.teacherSpecialty}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  )}

                  {/* Conditions */}
                  <div className="form-check mb-4">
                    <input className="form-check-input" type="checkbox" required />
                    <label className="form-check-label small">
                      J'accepte les conditions d'utilisation
                    </label>
                  </div>

                  {/* Bouton d'inscription */}
                  <button type="submit" className="btn btn-primary w-100 mb-3">
                    S'inscrire
                  </button>

                  {/* Lien de connexion */}
                  <div className="text-center">
                    <small className="text-muted">
                      Déjà un compte ? <a href="/login" className="text-decoration-none">Se connecter</a>
                    </small>
                  </div>

                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}