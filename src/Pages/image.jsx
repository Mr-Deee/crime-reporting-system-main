import React from 'react';
import { Fade, Zoom, Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import image1 from '../images/image1.png'
import image2 from '../images/image2.png'
const slideshow = [
{
 url: '../images/image1.png',
 caption: ''
},
{
    url: '../images/image2.png',
    caption: ''
},
];

const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContents: 'center',
    height: '400px',
    backgroundSize: 'cover'
}

const Image = () => {
  return (
    <div className=''>
      <Fade>
        {slideshow.map((image, index) => (
           <div key={index}> 
               <div style={{...divStyle, backgroundImage:`url(${image.url})`}}>

               </div>
           </div>
        ))}
      </Fade>
    </div>
  )
}

export default Image;

