
import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import '../../../node_modules/react-modal-video/scss/modal-video.scss';


const VideoModalS2 = () => {

    const [isOpen, setOpen] = useState(false)

    return (
        <React.Fragment>
            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="S1x0HWc-iaE?si=dU9jHGkKlqKajczi" onClose={() => setOpen(false)} />

            <button className="video-btn" onClick={() => setOpen(true)}
                data-type="iframe">
                <svg width="33" height="36" viewBox="0 0 33 36" fill="none">
                    <path
                        d="M30.5 13.6699C33.8333 15.5944 33.8333 20.4056 30.5 22.3301L8 35.3205C4.66667 37.245 0.499998 34.8394 0.499998 30.9904L0.499999 5.00962C0.5 1.16062 4.66667 -1.24501 8 0.679491L30.5 13.6699Z"
                        fill="white" />
                </svg>
            </button>
        </React.Fragment>
    )
}

export default VideoModalS2;