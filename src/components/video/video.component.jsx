import React from 'react'
import './video.styles.css'
import Videofile from '../../assets/homepage.mp4'
const Video = () => (

    <div className="video">
                    <video muted autoPlay loop width="100%" >
                        <source src={Videofile} type="video/mp4">
                            </source>
                        
                    </video>
                </div>
);
export default Video;






