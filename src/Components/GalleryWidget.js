import React, { useState } from 'react';
import "../Styles/GalleryWidget.css";

function GalleryWidget() {
  const [images, setImages] = useState([]);

  const addImage = () => {
    const newImageUrl = prompt('Enter image URL:');
    if (newImageUrl) {
      setImages([...images, newImageUrl]);
    }
  };

  return (
    <div className="gallery-widget text-gray-400	p-2 border-none	">
      <div className="gallery-header border-none rounded-2xl	">
      <div className='border-none bg-black rounded-xl w-28 h-11 p-1 font-semibold	text-center	text-lg	'>
          <h2>Gallery</h2>
      </div>
        <button className="add-image-button  rounded-3xl shadow-inner bg-slate-700" onClick={addImage}>Add Image</button>
      </div>
      <div className="gallery-container">
        <button className="nav-button prev shadow-2xl bg-slate-800" onClick={() => document.querySelector('.gallery').scrollBy({ left: -300, behavior: 'smooth' })}>‹</button>
        <button className="nav-button next shadow-2xl bg-slate-800" onClick={() => document.querySelector('.gallery').scrollBy({ left: 300, behavior: 'smooth' })}>›</button>
        <div className="gallery">
          {images.map((image, index) => (
            <img
              className="rounded-xl shadow-2xl mx-2"
              key={index}
              src={image}
              alt={`gallery-item-${index}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default GalleryWidget;
