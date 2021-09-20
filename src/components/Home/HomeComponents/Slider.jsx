import React from 'react'

function Slider() {
    return (
        <div className="slider">
            {/* <div className="contain"> */}
                <div className="myslide" style={{display: 'block'}}>
                    <div className="txt">
                        <h1>Image 1</h1>
                        <p>The Greatest ever</p>
                    </div>
                    <img src="./images/hero_bg.jpg" alt="" />
                </div>

                <a className="prev">&#10094;</a>
                <a className="next" >&#10095;</a>

                <div className="dotsbox">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                </div> 
            {/* </div> */}
            
        </div>
    )
}

export default Slider
