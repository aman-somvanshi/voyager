import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SupportDropdown.css'; 

function SupportDropdown({ items, onItemClick }) {
  return (
    <ul className="dropdown-menu show position-absolute mt-1" style={{ zIndex: 1000 }}>
      {items.map((item) => (
        <li key={item.id}>
          <button className="dropdown-item" type="button" onClick={() => onItemClick(item.id)}>
            {item.label}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default SupportDropdown;