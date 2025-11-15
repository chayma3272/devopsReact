import React from 'react'

export default function Certificates() {
  return (
    <section id="certificates" className="py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <h2 className="display-5 fw-bold mb-4">Certificats de Réussite</h2>
            <p className="lead mb-4">
              Validez officiellement vos compétences avec nos certificats reconnus 
              par les employeurs. Chaque attestation comprend :
            </p>
            
            <ul className="list-unstyled">
              <li className="mb-3">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                <strong>Nom du cours et compétences acquises</strong>
              </li>
              <li className="mb-3">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                <strong>Date de délivrance et référence unique</strong>
              </li>
              <li className="mb-3">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                <strong>Signature numérique de l'instructeur</strong>
              </li>
              <li className="mb-3">
                <i className="bi bi-check-circle-fill text-success me-2"></i>
                <strong>Partage facile sur LinkedIn et autres réseaux</strong>
              </li>
            </ul>
          </div>
          
          <div className="col-lg-6 text-center">
            <div className="card shadow-lg border-0">
              <div className="card-body p-4">
                <img 
                  src="/certif.jpg" 
                  className="img-fluid rounded border"
                />
                <p className="text-muted mt-3">Exemple de certificat de réussite</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}