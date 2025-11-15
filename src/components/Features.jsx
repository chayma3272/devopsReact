import React from 'react'

export default function Features() {
  const features = [
    {
      icon: "bi-calendar-week",
      title: "Planification Flexible",
      description: "Organisez votre apprentissage selon votre emploi du temps"
    },
    {
      icon: "bi-laptop",
      title: "Cours en Ligne",
      description: "Accédez aux cours depuis n'importe où, à tout moment"
    },
    {
      icon: "bi-award",
      title: "Certificats Reconnus",
      description: "Obtenez des attestations valorisantes pour votre CV"
    },
    {
      icon: "bi-people",
      title: "Communauté Active",
      description: "Échangez avec d'autres étudiants et professeurs"
    }
  ]

  return (
    <section id="features" className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Pourquoi Choisir Notre Plateforme ?</h2>
          <p className="lead">Tout ce dont vous avez besoin pour réussir votre apprentissage</p>
        </div>
        
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body text-center p-4">
                  <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center mb-3" 
                       style={{width: '70px', height: '70px'}}>
                    <i className={`bi ${feature.icon} text-white fs-3`}></i>
                  </div>
                  <h5 className="card-title">{feature.title}</h5>
                  <p className="card-text text-muted">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}