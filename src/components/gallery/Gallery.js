import React from 'react'
import './Gallery.css'

export default function Gallery() {
    return (
        <div className='about'>
            <div className="album">
                <div className='abtxt'>Visit our Gallery</div>
                <div className="responsive-container-block bg">
                    <div className="responsive-container-block img-cont">
                        <img className="img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.4.svg" />
                        <img className="img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.5.svg" />
                        <img className="img img-last" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.6.svg" />
                    </div>
                    <div className="responsive-container-block img-cont">
                        <img className="img img-big" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.11.svg" />
                        <img className="img img-big img-last" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.10.svg" />
                    </div>
                    <div className="responsive-container-block img-cont">
                        <img className="img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.7.svg" />
                        <img className="img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.8.svg" />
                        <img className="img" src="https://workik-widget-assets.s3.amazonaws.com/widget-assets/images/PP5.9.svg" />
                    </div>
                </div>
            </div>
        </div>
    )
}
