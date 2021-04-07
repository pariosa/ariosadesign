import css from "../../css/styles.css";  
import React, {useContext} from 'react'
import { UIContext, UIProvider } from "../../Store/UIContext"
import { musicData, mixData } from "../../Data/Music"
import ReactSoundcloud from "./ReactSoundcloud"
import ReactMixcloud from "./ReactMixcloud"
import { SocialIcon } from "react-social-icons"

const getTracks = (musicData)=>{
  return musicData.map((e,i)=>(<ReactSoundcloud width="100%" key={i} autoPlay="false" url={e}/>))
}
const getMixes = (mixData) =>{
  return mixData.map((e,i)=>(<ReactMixcloud url={e} />))
}
export default function Music() {
  const state = useContext(UIContext); 
  return (
    <UIProvider>
      <div className={`page music ${state && state.activeTab === "nav-item-main"? "" : "hidden"}`}>
        <h3>follow me on soundcloud/mixcloud for more tracks and dj mixes </h3>
        <div className="small-social-container">
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