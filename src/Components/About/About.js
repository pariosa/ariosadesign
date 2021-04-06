import css from "../../css/styles.css";  
import React, {useReducer, useContext} from 'react'; 
import { UIContext, UIProvider } from "../../Store/UIContext";

export default function About() {
  const state = useContext(UIContext);
  return (
    <UIProvider>
      <div className={`page about ${state && state.activeTab === "nav-item-main"? "" : "hidden"}`}>
        <h1 className="center">
          Hey!
          </h1>
          <h2>
            A little about myself, i've been Dj'ing and Producing music since 2010, I'm a software engineer by trade.
          </h2> 
          <div className="dj-pic"></div>
          <h3>
            I love to teach coding, and make delicious food on the side, please browse around and see if you can find some music or recipes that are to your liking! and have a great day~
          </h3>
      </div>
    </UIProvider>
  )
} 