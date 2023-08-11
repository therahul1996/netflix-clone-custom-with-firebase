import React from 'react'
import './style.css'
const PopupModal = ({ youtubeId, onClose }) => {
  const videoUrl = `https://www.youtube.com/embed/${youtubeId}`;
  
  return (
    <div className="popup">
    <div className="popup-content">
      <span className="close-btn" onClick={onClose}>
        &times;
      </span>
      <iframe
        title="YouTube Video"
        src={videoUrl}
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  </div>
  )
}

export default PopupModal