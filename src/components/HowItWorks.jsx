import React from 'react'

export default function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Inscription",
      description: "Créez votre compte en 2 minutes"
    },
    {
      number: "2",
      title: "Choisissez vos cours",
      description: "Parcourez notre catalogue et sélectionnez vos formations"
    },
    {
      number: "3",
      title: "Apprenez à votre rythme",
      description: "Suivez les cours selon votre emploi du temps"
    },
    {
      number: "4",
      title: "Obtenez votre certificat",
      description: "Validez vos compétences avec une attestation reconnue"
    }
  ]

  return (
    <section className="py-5 bg-light">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Comment ça marche ?</h2>
          <p className="lead">4 étapes simples pour démarrer votre apprentissage</p>
        </div>
        
        <div className="row">
          {steps.map((step, index) => (
            <div key={index} className="col-md-6 col-lg-3 text-center mb-4">
              <div className="bg-primary rounded-circle d-inline-flex align-items-center justify-content-center text-white mb-3" 
                   style={{width: '80px', height: '80px'}}>
                <h4 className="mb-0 fw-bold">{step.number}</h4>
              </div>
              <h5>{step.title}</h5>
              <p className="text-muted">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}