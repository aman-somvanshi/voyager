import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SupportCard.css'; // Create this CSS file

function SupportCard({ item, info, onClose }) {
  if (!item) {
    return null;
  }

  return (
    <div className="card support-card shadow">
      <div className="card-header d-flex justify-content-between align-items-center">
        <h5>{item.label}</h5>
        <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
      </div>
      <div className="card-body support-card-body" style={{ overflowY: 'auto', maxHeight: 'calc(90vh - 70px)' }}>
        {info}
      </div>
    </div>
  );
}

export default SupportCard;