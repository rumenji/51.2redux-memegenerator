import React from "react";
import "./Meme.css"
function Meme({ removeMeme, topText, bottomText, url, id }) {

    const handleDelete = () => {
        removeMeme(id)
    }

    return (
        <div>
            <span className="top">{topText}</span>
            <img src={url}></img>
            <span className="bottom">{bottomText}</span>
            <button onClick={handleDelete}>X</button>
        </div>
    )
}

export default Meme;