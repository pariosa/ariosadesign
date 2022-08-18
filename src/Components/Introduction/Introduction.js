import React from 'react';
import { SocialIcon } from 'react-social-icons';
import { mixData } from '../../Data/Music';
import ReactMixcloud from '../Music/ReactMixcloud';

export default function Introduction(props) { 
  const {state} = props;
  return (
    <>
      { state.activeTab === "nav-item-main" ? (
        <div className="page introduction"> 
          <h1 className="center">Hi welcome to my website!</h1>
          <h2>
            My album,
            {' '}
            <strong>I Freaked It</strong>
            {' '}
            is available now on bandcamp and all streaming platforms
          </h2>
          <div style={{
            margin: "0 auto"
          }}
          >
            <iframe
              title="Ariosa - I Freaked It Album Embed"
              style={{
                border: 0,
                width: "350px",
                height: "470px",
                margin: "0 30%"
              }}
              src="https://bandcamp.com/EmbeddedPlayer/album=2780991246/size=large/bgcol=ffffff/linkcol=0687f5/tracklist=false/transparent=true/"
              seamless
            >
              <a href="https://ariosa.bandcamp.com/album/i-freaked-it">I Freaked It by Ariosa</a>
            </iframe>
          </div>
          <h2>check out my most recent mix on Mixcloud from JuneBuggin 2022!</h2>
          <ReactMixcloud url={mixData[0].toString()} />
          <div className="page-text">   

            <div className="social github">
              <SocialIcon url="https://github.com/pariosa" />
              <a className="github link" href="https://github.com/pariosa">Github</a>
            </div>
            
            <div className="social bandcamp">
              <SocialIcon url="https://ariosa.bandcamp.com" />
              <a className="bandcamp link" href="https://ariosa.bandcamp.com">Bandcamp</a>
            </div>


            <div className="social facebook">
              <SocialIcon url="https://www.facebook.com/Ariosadj-104327988434299/" />
              <a className="facebook link" href="https://www.facebook.com/Ariosadj-104327988434299/">Facebook</a>
            </div>

            <div className="social instagram">
              <SocialIcon url="https://www.instagram.com/ariosape/" />
              <a className="instagram link" href="https://www.instagram.com/ariosape/">Instagram</a>
            </div>

            <div className="social linkedin">
              <SocialIcon url="https://www.linkedin.com/in/peter-ariosa-760b372a/" />
              <a className="linkedin link" href="https://www.linkedin.com/in/peter-ariosa-760b372a/">Linkedin</a>
            </div>

            <div className="social youtube">
              <SocialIcon url="https://www.youtube.com/watch?v=-5pMNJ0MK2U&list=PLJ-47dnNMd_jke6l27GmEiDk5XJGcr_HE" />
              <a className="youtube link" href="https://www.youtube.com/watch?v=-5pMNJ0MK2U&list=PLJ-47dnNMd_jke6l27GmEiDk5XJGcr_HE">Youtube</a>
            </div>

            <div className="social tumblr">
              <SocialIcon url="https://ghettoblasting101.tumblr.com/" />
              <a className="tumblr link" href="https://ghettoblasting101.tumblr.com/">Tumblr</a>
            </div>

            <div className="social twitter">
              <SocialIcon url="https://twitter.com/_w0xy" /> 
              <a className="twitter link" href="https://twitter.com/_w0xy">Twitter </a>
            </div>

            <div className="social soundcloud">
              <SocialIcon url="https://soundcloud.com/ariosa" />
              <a className="soundcloud link" href="https://soundcloud.com/ariosa">Soundcloud</a>
            </div>
            <div className="social mixcloud">
              <SocialIcon url="https://www.mixcloud.com/ariosa/" />
              <a className="mixcloud link" href="https://www.mixcloud.com/ariosa/">Mixcloud</a>
            </div>

            <div className="social email">
              <SocialIcon url="mailto:ariosa@gmail.com" />
              <a className="email link" href="mailto:ariosa@gmail.com">Email</a>
            </div>

          </div>
        </div>
    )
         
      :
      ""
      }
    </>
  )
} 