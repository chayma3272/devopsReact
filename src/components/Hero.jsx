import React from 'react'

export default function Hero() {
  return (
    <section className="bg-primary text-white py-5">
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h1 className="display-4 fw-bold mb-4">
              Apprenez sans limites, certifiez vos compétences
            </h1>
            <p className="lead mb-4">
              Rejoignez des milliers d'étudiants qui planifient leurs cours, 
              obtiennent des certificats reconnus et avancent dans leur carrière.
            </p>
            <div className="d-flex gap-3 flex-wrap">
              <a href="#inscription" className="btn btn-light btn-lg text-primary">
                Commencer Maintenant
              </a>
              <a href="#courses" className="btn btn-outline-light btn-lg">
                Voir les Cours
              </a>
            </div>
          </div>
          <div className="col-lg-6 text-center">
    
          </div>
        </div>
      </div>
    </section>
  )
}