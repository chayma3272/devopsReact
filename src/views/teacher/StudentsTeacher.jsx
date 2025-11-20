import React, { useState } from 'react'

export default function StudentsTeacher() {
  const [students] = useState([
    { id: 1, name: 'Ali Ben Ahmed', email: 'ali@example.com', courses: 3, progress: 85, avatar: 'AB', status: 'actif', lastActivity: '2h' },
    { id: 2, name: 'Sara Dridi', email: 'sara@example.com', courses: 2, progress: 92, avatar: 'SD', status: 'actif', lastActivity: '1j' },
    { id: 3, name: 'Mohamed Karim', email: 'mohamed@example.com', courses: 4, progress: 78, avatar: 'MK', status: 'inactif', lastActivity: '5j' },
    { id: 4, name: 'Leila Mansour', email: 'leila@example.com', courses: 3, progress: 88, avatar: 'LM', status: 'actif', lastActivity: '3h' },
  ]);

  const [searchTerm, setSearchTerm] = useState('');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterProgress, setFilterProgress] = useState('all');
  const [showFilters, setShowFilters] = useState(false);
  const [selectedStudent, setSelectedStudent] = useState(null);

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = filterStatus === 'all' || student.status === filterStatus;
    const matchesProgress = filterProgress === 'all' ||
      (filterProgress === 'high' && student.progress >= 80) ||
      (filterProgress === 'medium' && student.progress >= 60 && student.progress < 80) ||
      (filterProgress === 'low' && student.progress < 60);
    
    return matchesSearch && matchesStatus && matchesProgress;
  });

  return (
    <div>
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h3 className="fw-bold">Mes Étudiants</h3>
        <div className="d-flex gap-2">
          <input 
            type="search" 
            className="form-control" 
            placeholder="Rechercher un étudiant..." 
            style={{width: '300px'}}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button 
            className={`btn ${showFilters ? 'btn-primary' : 'btn-outline-secondary'}`}
            onClick={() => setShowFilters(!showFilters)}
          >
            <i className="bi bi-filter"></i>
          </button>
        </div>
      </div>

      {/* Filtres avancés */}
      {showFilters && (
        <div className="card border-0 shadow-sm mb-4">
          <div className="card-body">
            <div className="row g-3">
              <div className="col-md-4">
                <label className="form-label fw-semibold small">Statut</label>
                <select 
                  className="form-select"
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                >
                  <option value="all">Tous les statuts</option>
                  <option value="actif">Actifs</option>
                  <option value="inactif">Inactifs</option>
                </select>
              </div>
              <div className="col-md-4">
                <label className="form-label fw-semibold small">Progression</label>
                <select 
                  className="form-select"
                  value={filterProgress}
                  onChange={(e) => setFilterProgress(e.target.value)}
                >
                  <option value="all">Toutes les progressions</option>
                  <option value="high">Excellente (≥80%)</option>
                  <option value="medium">Moyenne (60-79%)</option>
                  <option value="low">Faible (&lt;60%)</option>
                </select>
              </div>
              <div className="col-md-4 d-flex align-items-end">
                <button 
                  className="btn btn-outline-secondary w-100"
                  onClick={() => {
                    setFilterStatus('all');
                    setFilterProgress('all');
                    setSearchTerm('');
                  }}
                >
                  <i className="bi bi-x-circle me-2"></i>Réinitialiser
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="card border-0 shadow-sm">
        <div className="card-body p-0">
          <div className="table-responsive">
            <table className="table table-hover mb-0">
              <thead className="bg-light">
                <tr>
                  <th className="border-0 py-3 px-4">Étudiant</th>
                  <th className="border-0 py-3">Statut</th>
                  <th className="border-0 py-3">Cours Inscrits</th>
                  <th className="border-0 py-3">Progression</th>
                  <th className="border-0 py-3">Dernière activité</th>
                  <th className="border-0 py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredStudents.map(student => (
                  <tr key={student.id}>
                    <td className="py-3 px-4">
                      <div className="d-flex align-items-center gap-3">
                        <div className="rounded-circle bg-primary text-white d-flex align-items-center justify-content-center fw-bold" 
                             style={{width: '40px', height: '40px', fontSize: '0.9rem'}}>
                          {student.avatar}
                        </div>
                        <div>
                          <div className="fw-semibold">{student.name}</div>
                          <small className="text-muted">{student.email}</small>
                        </div>
                      </div>
                    </td>
                    <td className="py-3">
                      <span className={`badge ${student.status === 'actif' ? 'bg-success' : 'bg-secondary'}`}>
                        {student.status}
                      </span>
                    </td>
                    <td className="py-3">
                      <span className="badge bg-primary bg-opacity-10 text-primary">
                        {student.courses} cours
                      </span>
                    </td>
                    <td className="py-3">
                      <div style={{width: '150px'}}>
                        <div className="d-flex justify-content-between align-items-center mb-1">
                          <small className="text-muted">{student.progress}%</small>
                        </div>
                        <div className="progress" style={{height: '6px'}}>
                          <div className={`progress-bar ${
                            student.progress >= 80 ? 'bg-success' :
                            student.progress >= 60 ? 'bg-warning' : 'bg-danger'
                          }`} 
                               style={{width: `${student.progress}%`}}></div>
                        </div>
                      </div>
                    </td>
                    <td className="py-3">
                      <small className="text-muted">Il y a {student.lastActivity}</small>
                    </td>
                    <td className="py-3">
                      <div className="dropdown">
                        <button className="btn btn-sm btn-outline-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                          Actions
                        </button>
                        <ul className="dropdown-menu">
                          <li>
                            <button 
                              className="dropdown-item"
                              onClick={() => setSelectedStudent(student)}
                            >
                              <i className="bi bi-eye me-2"></i>Voir le profil
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item">
                              <i className="bi bi-envelope me-2"></i>Envoyer un message
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item">
                              <i className="bi bi-file-earmark-text me-2"></i>Voir les notes
                            </button>
                          </li>
                          <li>
                            <button className="dropdown-item">
                              <i className="bi bi-graph-up me-2"></i>Voir les statistiques
                            </button>
                          </li>
                          <li><hr className="dropdown-divider" /></li>
                          <li>
                            <button className="dropdown-item text-danger">
                              <i className="bi bi-person-x me-2"></i>Désinscrire
                            </button>
                          </li>
                        </ul>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Statistiques */}
      <div className="row g-3 mt-4">
        <div className="col-md-3">
          <div className="card border-0 bg-primary bg-opacity-10">
            <div className="card-body text-center">
              <h4 className="fw-bold text-primary">{filteredStudents.length}</h4>
              <small className="text-muted">Étudiants filtrés</small>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 bg-success bg-opacity-10">
            <div className="card-body text-center">
              <h4 className="fw-bold text-success">
                {Math.round(filteredStudents.reduce((acc, s) => acc + s.progress, 0) / filteredStudents.length)}%
              </h4>
              <small className="text-muted">Progression Moyenne</small>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 bg-info bg-opacity-10">
            <div className="card-body text-center">
              <h4 className="fw-bold text-info">
                {filteredStudents.filter(s => s.status === 'actif').length}
              </h4>
              <small className="text-muted">Actifs</small>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card border-0 bg-warning bg-opacity-10">
            <div className="card-body text-center">
              <h4 className="fw-bold text-warning">
                {filteredStudents.filter(s => s.progress < 60).length}
              </h4>
              <small className="text-muted">Besoin d'Aide</small>
            </div>
          </div>
        </div>
      </div>

      {/* Modal profil étudiant */}
      {selectedStudent && (
        <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Profil de {selectedStudent.name}</h5>
                <button 
                  type="button" 
                  className="btn-close" 
                  onClick={() => setSelectedStudent(null)}
                ></button>
              </div>
              <div className="modal-body">
                <div className="row">
                  <div className="col-md-4 text-center">
                    <div className="rounded-circle bg-primary text-white d-inline-flex align-items-center justify-content-center fw-bold mb-3" 
                         style={{width: '100px', height: '100px', fontSize: '2rem'}}>
                      {selectedStudent.avatar}
                    </div>
                    <h5 className="fw-bold">{selectedStudent.name}</h5>
                    <p className="text-muted">{selectedStudent.email}</p>
                    <span className={`badge ${selectedStudent.status === 'actif' ? 'bg-success' : 'bg-secondary'}`}>
                      {selectedStudent.status}
                    </span>
                  </div>
                  <div className="col-md-8">
                    <h6 className="fw-bold mb-3">Informations générales</h6>
                    <div className="mb-3">
                      <small className="text-muted">Cours inscrits</small>
                      <div className="fw-semibold">{selectedStudent.courses} cours</div>
                    </div>
                    <div className="mb-3">
                      <small className="text-muted">Progression moyenne</small>
                      <div className="progress mt-1" style={{height: '10px'}}>
                        <div className="progress-bar bg-success" style={{width: `${selectedStudent.progress}%`}}></div>
                      </div>
                      <small className="fw-semibold">{selectedStudent.progress}%</small>
                    </div>
                    <div className="mb-3">
                      <small className="text-muted">Dernière activité</small>
                      <div className="fw-semibold">Il y a {selectedStudent.lastActivity}</div>
                    </div>
                    <div className="d-flex gap-2 mt-4">
                      <button className="btn btn-primary btn-sm">
                        <i className="bi bi-envelope me-2"></i>Envoyer un message
                      </button>
                      <button className="btn btn-outline-secondary btn-sm">
                        <i className="bi bi-file-earmark-text me-2"></i>Voir les notes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}