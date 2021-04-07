import React from 'react';

export default function ReactSoundcloud (props){ 
    const { 
            url, 
            width, 
            height, 
            autoPlay, 
            hideRelated, 
            showComments, 
            showUser, 
            showReposts, 
            visual, 
            color 
        } = props;
    var src = visual ? 
                `https://w.soundcloud.com/player/?url=${url}&amp;auto_play=${autoPlay}&amp;hide_related=${hideRelated}&amp;show_comments=${showComments}&amp;show_user=${showUser}&amp;show_reposts=${showReposts}&amp;visual=${visual}` :
                `https://w.soundcloud.com/player/?url=${url}&amp;color=${color}&amp;auto_play=${autoPlay}&amp;hide_related=${hideRelated}&amp;show_comments=${showComments}&amp;show_user=${showUser}&amp;show_reposts=${showReposts}`;
    return (
        <div className="song">
            <iframe 
                width={ width } 
                height={ visual ? height : "auto" } 
                scrolling="no" 
                frameBorder="no" 
                src={ src } 
            />
        </div>
    );
}