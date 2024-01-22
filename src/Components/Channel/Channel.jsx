import React from 'react'
import './Channel.scss'
import Banner from '../../images/thumbnail/thumbnail2.jpg'
import { PiFilmReel } from "react-icons/pi"

const Channel = () => {
  return (
    <div className='channel'>
      <div className='channel-header'>
        <img className='channel-banner' src={Banner} alt='Channel Banner'/>
        <div className='channel-credentials'>
          <div className='channel-icon'></div>
          <div className='credentials'>
            <h1>Username</h1>
            <div className='stats'>
              <p>Usertag</p> -
              <p>Subscriber amount</p> -
              <p>Videos amount</p> 
            </div>
            <p>More about this channel</p>
            <div className='options'>
              <button>Customize channel</button>
              <button>Manage videos</button>
            </div>
          </div>
        </div>
      </div>

      <div className='channel-menu'>
        <button>Home</button>
        <button>Videos</button>
        <button>Shorts</button>
        <button>Playlists</button>
        <button>Community</button>
      </div>

      <div className='line'></div>

      <div className='for-you'>
        <h2>For You</h2>
        <div className='video-container'>
          <div className='video'>
            <img src={Banner} alt='Video thumbnail'/>
            <div className='video-credentials'>
              <p>Title</p>
              <div className='video-stats'>
                <p>Views - Upload date</p>
              </div>
            </div>
          </div>

          <div className='video'>
            <img src={Banner} alt='Video thumbnail'/>
            <div className='video-credentials'>
              <p>Title</p>
              <div className='video-stats'>
                <p>Views - Upload date</p>
              </div>
            </div>
          </div>

          <div className='video'>
            <img src={Banner} alt='Video thumbnail'/>
            <div className='video-credentials'>
              <p>Title</p>
              <div className='video-stats'>
                <p>Views - Upload date</p>
              </div>
            </div>
          </div>

          <div className='video'>
            <img src={Banner} alt='Video thumbnail'/>
            <div className='video-credentials'>
              <p>Title</p>
              <div className='video-stats'>
                <p>Views - Upload date</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='small-line'></div>

      <div className='for-you'>
          <h2><PiFilmReel/> Shorts</h2>
          <div className='video-container'>
            <div className='video'>
              <img src={Banner} alt='Video thumbnail' className='short-video'/>
              <div className='video-credentials'>
                <p>Title</p>
                <div className='video-stats'>
                  <p>Views - Upload date</p>
                </div>
              </div>
            </div>

            <div className='video'>
              <img src={Banner} alt='Video thumbnail' className='short-video'/>
              <div className='video-credentials'>
                <p>Title</p>
                <div className='video-stats'>
                  <p>Views - Upload date</p>
                </div>
              </div>
            </div>

            <div className='video'>
              <img src={Banner} alt='Video thumbnail' className='short-video'/>
              <div className='video-credentials'>
                <p>Title</p>
                <div className='video-stats'>
                  <p>Views - Upload date</p>
                </div>
              </div>
            </div>

            <div className='video'>
              <img src={Banner} alt='Video thumbnail' className='short-video'/>
              <div className='video-credentials'>
                <p>Title</p>
                <div className='video-stats'>
                  <p>Views - Upload date</p>
                </div>
              </div>
            </div>

            <div className='video'>
              <img src={Banner} alt='Video thumbnail' className='short-video'/>
              <div className='video-credentials'>
                <p>Title</p>
                <div className='video-stats'>
                  <p>Views - Upload date</p>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div className='small-line'></div>

      <div className='for-you'>
        <h2>Videos</h2>
        <div className='video-container'>
          <div className='video'>
            <img src={Banner} alt='Video thumbnail'/>
            <div className='video-credentials'>
              <p>Title</p>
              <div className='video-stats'>
                <p>Views - Upload date</p>
              </div>
            </div>
          </div>

          <div className='video'>
            <img src={Banner} alt='Video thumbnail'/>
            <div className='video-credentials'>
              <p>Title</p>
              <div className='video-stats'>
                <p>Views - Upload date</p>
              </div>
            </div>
          </div>

          <div className='video'>
            <img src={Banner} alt='Video thumbnail'/>
            <div className='video-credentials'>
              <p>Title</p>
              <div className='video-stats'>
                <p>Views - Upload date</p>
              </div>
            </div>
          </div>

          <div className='video'>
            <img src={Banner} alt='Video thumbnail'/>
            <div className='video-credentials'>
              <p>Title</p>
              <div className='video-stats'>
                <p>Views - Upload date</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='small-line'></div>
        
    </div>
  )
}

export default Channel