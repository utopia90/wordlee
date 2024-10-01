import React from 'react'

export default function Modal({message, openModal, onClose}) {
    if(!openModal) return
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>{message}</h2>
        <div>
          <button onClick={onClose} className="start-button">Start Game Again</button>
        </div>
      </div>
    </div>
  )
}
