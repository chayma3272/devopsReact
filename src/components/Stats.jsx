import React from 'react'

export default function Stats() {
  const stats = [
    { number: "50,000+", label: "Étudiants Actifs" },
    { number: "200+", label: "Cours Disponibles" },
    { number: "150+", label: "Instructeurs Experts" },
    { number: "95%", label: "Taux de Satisfaction" }
  ]

  return (
    <section className="py-5 bg-primary text-white">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Notre Impact Éducatif</h2>
        </div>
        
        <div className="row text-center">
          {stats.map((stat, index) => (
            <div key={index} className="col-6 col-md-3 mb-4">
              <div className="border-end border-light border-opacity-25 pe-3">
                <h3 className="fw-bold display-6">{stat.number}</h3>
                <p className="mb-0 opacity-75">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}