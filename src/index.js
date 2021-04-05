import React from 'react';
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css";  
import App from "./Components/App";

function Layout (){  
  return ( 
      <div className="Layout"> 
        <App/>
      </div> 
  ); 
} 

ReactDOM.render(
    React.createElement(Layout, null),
    document.getElementById("app")
);
    

module.hot.accept();