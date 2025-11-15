import React from 'react'

export default function Courses() {
  const courses = [
    {
      title: "Développement Web",
      instructor: "Prof. Sarah Johnson",
      duration: "8 semaines",
      students: "2,500+",
      level: "Débutant"
    },
    {
      title: "Data Science",
      instructor: "Dr. Ahmed Chen",
      duration: "12 semaines",
      students: "1,800+",
      level: "Intermédiaire"
    },
    {
      title: "Marketing Digital",
      instructor: "Mme. Sophie Martin",
      duration: "6 semaines",
      students: "3,200+",
      level: "Tous niveaux"
    },
    {
      title: "Intelligence Artificielle",
      instructor: "Dr. Robert Kim",
      duration: "10 semaines",
      students: "1,200+",
      level: "Avancé"
    }
  ]

  return (
    <section id="courses" className="py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="display-5 fw-bold">Cours Populaires</h2>
          <p className="lead">Découvrez nos formations les plus demandées</p>
        </div>
        
        <div className="row g-4">
          {courses.map((course, index) => (
            <div key={index} className="col-md-6 col-lg-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <span className="badge bg-primary mb-2">{course.level}</span>
                  <h5 className="card-title">{course.title}</h5>
                  <p className="text-muted mb-2">{course.instructor}</p>
                  
                  <div className="d-flex justify-content-between text-muted small mb-3">
                    <span><i className="bi bi-clock me-1"></i>{course.duration}</span>
                    <span><i className="bi bi-people me-1"></i>{course.students}</span>
                  </div>
                  
                  <button className="btn btn-outline-primary w-100">
                    S'inscrire
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-5">
          <a href="#all-courses" className="btn btn-primary btn-lg">
            Voir Tous les Cours
          </a>
        </div>
      </div>
    </section>
  )
}