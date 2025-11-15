import React from 'react'

export default function MenuBar() {
  return (
    <div className="d-flex">

      <div className="bg-primary text-white" style={{ width: "280px", minHeight: "100vh" }}>
        <div className="p-4">

          <div className="text-center mb-4">
            <h3 className="fw-bold mb-0">Bare de menu</h3>
          </div>

          <hr className="bg-light opacity-25" />


          <ul className="nav nav-pills flex-column gap-2">
            <li className="nav-item">
              <a className="nav-link text-white active bg-light bg-opacity-25 border-0" href="#">
                <i class="bi bi-backpack2 me-3"></i>
                Etudiants
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white bg-opacity-10 border-0" href="#">
                <i class="bi bi-person-square me-3"></i>
                Enseignants
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white bg-opacity-10 border-0" href="#">
                <i class="bi bi-book-half me-3"></i>
                Cours
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white bg-opacity-10 border-0" href="#">
                <i class="bi bi-bar-chart me-3"></i>
                Analytique 
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white bg-opacity-10 border-0" href="#">
                <i class="bi bi-gear me-3"></i>
                Paramètres
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white bg-opacity-10 border-0" href="#">
                <i class="bi bi-box-arrow-right me-3"></i>
                Quitter
              </a>
            </li>
          </ul>


          <div className="position-absolute bottom-0 start-0 end-0 p-3 border-top border-light border-opacity-25">
            <div className="d-flex align-items-center">
              <div className="rounded-circle bg-light bg-opacity-25 d-flex align-items-center justify-content-center"
                style={{ width: "40px", height: "40px" }}>
                <i className="bi bi-person text-white"></i>
              </div>
              <div className="ms-3">
                <small className="text-light opacity-75">Administrateur</small>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}