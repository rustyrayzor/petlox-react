
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';


const VideoModal = () => {

  const [isOpen, setOpen] = useState(false)

  return (
    <React.Fragment>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S1x0HWc-iaE?si=dU9jHGkKlqKajczi" onClose={() => setOpen(false)} />

      <button className="video-btn" onClick={() => setOpen(true)}
        data-type="iframe">
        <svg width="24" height="27" viewBox="0 0 24 27" fill="none">
          <path
            d="M22.25 15.665L4.99999 25.6243C3.33333 26.5865 1.25 25.3837 1.25 23.4592L1.25 3.54063C1.25 1.61613 3.33333 0.413319 5 1.37557L22.25 11.3349C23.9167 12.2971 23.9167 14.7027 22.25 15.665Z"
            stroke="black" />
        </svg>
      </button>
    </React.Fragment>
  )
}

export default VideoModal;