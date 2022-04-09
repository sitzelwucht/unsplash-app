import React from 'react';

const ImageBox = (props) => {

    return (
        <div className="image-box">
   
            <div className="img">
            <a href={props.page}>
                <img src={props.imgUrl} alt={props.altDesc} title="click to see on Unsplash" target="_blank"/>
                </a>
                
            </div>
            <div className="dl">
                <a href={props.download}>
                    <svg xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
                    class="feather feather-download"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"
                    title="download this image"></path>
                    <polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
                </a>
            </div>

        </div>
    )
}

export default ImageBox;