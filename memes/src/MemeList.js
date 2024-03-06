import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "./memeSlice";
import Meme from "./Meme";

export function MemeList () {
    const memes = useSelector((state) => state.memes.value)
    const dispatch = useDispatch();
    console.log(memes)
    
    return (
        <div>
            <h3>Memes:</h3>
            {memes.map((meme,id)=> (
                <Meme key={id} topText={meme.top} bottomText={meme.bottom} url={meme.url} removeMeme={() => dispatch(remove(id))} />
            ))}
        </div>
    )
    
}