import React from 'react';

export default function Toolbar({filters, selected, onSelectFilter}) {

  return (
    <ul className="toolbar">
      {
        filters.map(filter => 
          <li className="tool" key={filter}>
            <button className="btn-tool" onClick={evt => onSelectFilter(evt.target.textContent)}>{filter}</button>
          </li>)
      }
    </ul>
    
  )
}
