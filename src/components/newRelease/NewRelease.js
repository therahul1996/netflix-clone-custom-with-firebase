import React, {useState} from 'react'
import './style.css'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import PopupModal from '../modal/PopupModal'
import { MdOutlineSlowMotionVideo } from "react-icons/md";
import imageData from './imagesData.json'
const NewRelease = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const handleVideoClick = (youtubeId) => {
    setSelectedVideo(youtubeId);
  };

  const handleClosePopup = () => {
    setSelectedVideo(null);
  };
  return (
    <section className='latest-movie-sec'>
       <Slide arrows={false} spacing={10}>
        {imageData.map((image, id) => {
           return(
            <div className="each-slide-effect" key={id}>
              <div style={{ 'backgroundImage': `url(${image.imageUrl})` }}>
                  <div className='new-release-content-box'>
                      <h3>{image.caption}</h3>
                      <button className='btn btn-outline-white' onClick={() => handleVideoClick(image.youtubeId)}><MdOutlineSlowMotionVideo />Watch Video</button>
                  </div>
              </div>
          </div>
           )
        })}
    </Slide>
    {selectedVideo && <PopupModal youtubeId={selectedVideo} onClose={handleClosePopup} />}
   </section>
  )
}

export default NewRelease