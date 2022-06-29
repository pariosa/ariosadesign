import React, { useContext } from 'react'; 
import YoutubeEmbed from "./YoutubeEmbed";
import { UIContext } from '../../Store/UIContext';
import { recipeData } from '../../Data/Recipe';
import css from "../../css/styles.css";  

export default function Recipes() {
  const state = useContext(UIContext); 
  const getRecipes = (recipeData) =>{
    return recipeData.map((e,i)=>{
      const index = i;
      return(<YoutubeEmbed url={e} key={index} />);
    })
  }
  return (
    <div className={`page about ${state && state.activeTab === "nav-item-main"? "" : "hidden"}`}>
      {getRecipes(recipeData)}
    </div>
  )
} 