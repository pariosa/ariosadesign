import React, { useContext } from 'react';
import { SocialIcon } from "react-social-icons";
import { mixData, musicData } from "../../Data/Music";
import { UIContext, UIProvider } from "../../Store/UIContext";
import ReactMixcloud from "./ReactMixcloud";
import ReactSoundcloud from "./ReactSoundcloud";

const getTracks = (musicData)=>{
  return musicData.map((e,i)=>(<ReactSoundcloud width="100%" key={i} autoPlay="false" url={e} />))
}
const getMixes = (mixData) =>{
  return mixData.map((e,i)=>{
    const index = i;
    return(<ReactMixcloud url={e} key={index} />);
  })
}
export default function Music() {
  const state = useContext(UIContext); 
  return (
    <UIProvider>
      <div className={`page music ${state && state.activeTab === "nav-item-main"? "" : "hidden"}`}>
        <h3>follow me on soundcloud/mixcloud/bandcamp for more tracks and dj mixes </h3>
        
        <div className="small-social-container">
          <div className="social bandcamp">
            <SocialIcon url="https://ariosa.bandcamp.com" />
            <a className="bandcamp link" href="https://ariosa.bandcamp.com">Bandcamp</a>
          </div> 
          <div className="social soundcloud">
            <SocialIcon url="https://soundcloud.com/ariosa" />
            <a className="soundcloud link" href="https://soundcloud.com/ariosa">Soundcloud</a>
          </div>
          <div className="social mixcloud">
            <SocialIcon url="https://www.mixcloud.com/ariosa/" />
            <a className="mixcloud link" href="https://www.mixcloud.com/ariosa/">Mixcloud</a>
          </div>
        </div>
        <div className="songs">
          {getMixes(mixData)}
          {getTracks(musicData)}
        </div>
      </div>
    </UIProvider>
  )
} 