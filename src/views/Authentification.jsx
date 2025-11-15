import React from 'react'

export default function Authentification() {
  return (
    <>
      <div 
        className="flex-grow-1 d-flex align-items-center justify-content-center"
        style={{
          backgroundImage: 'url("/background_authen.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          minHeight: '100vh'
        }}
      >
        <div className="container-fluid p-4">
          <div className="row justify-content-center align-items-center min-vh-100">
            <div className="col-md-5 col-lg-4">
              <div className="card shadow-lg border-0">
                <div className="card-body p-5">
                  <h2 className="text-center mb-4 text-primary">S'Authentifier'</h2>
                  <form>
                    <div className="mb-3">
                      <input
                        type="email"
                        className="form-control form-control-lg"
                        placeholder="Adresse Email"
                      />
                    </div>
                    <div className="mb-3">
                      <input
                        type="password"
                        className="form-control form-control-lg"
                        placeholder="Mot De Passe"
                      />
                    </div>
                    
                    <button type="submit" className="btn btn-primary btn-lg w-100 mb-3">
                      Connecter
                    </button>
                    <div className="text-center">
                      <a href="#forgot" className="d-block mb-2 text-decoration-none">
                       Mot de passe oublié ?
                      </a>
                      <span className="text-muted">Vous n'avez pas de compte ? </span>
                      <a href="#create" className="text-decoration-none">Créer compte</a>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}