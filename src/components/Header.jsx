import React from 'react'

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <a className="navbar-brand fw-bold text-primary" href="#">
          <i className="bi bi-mortarboard-fill me-2"></i>
          EduSmart
        </a>
        
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#courses">Cours</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#features">Fonctionnalités</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#certificates">Certificats</a>
            </li>
            <li className="nav-item">
              <a className="btn btn-primary ms-3" href="#inscription">
                S'inscrire
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}