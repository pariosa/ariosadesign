import React from 'react';

export default function ReactMixcloud (props){ 
    const {url} = props
     return (
        <div className="song">
           <iframe 
           width="100%" 
           height="120" 
           src={url} 
           frameborder="0" >
           </iframe>
        </div>
    );
}