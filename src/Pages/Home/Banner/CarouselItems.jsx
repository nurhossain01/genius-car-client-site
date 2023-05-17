import React from 'react';
import './Banner.css'

const CarouselItems = ({slider}) => {
  const {image, id, prev, next} = slider;
  return (
      <div id={`slide${id}`} className="carousel-item relative w-full">
        <div className='img-gradient'>
          <img src={image} className="w-full" />
        </div>
        <div className="absolute flex justify-start transform -translate-y-1/2 left-5 right-5 top-1/2 pl-20">
          <div className=''>
            <h3 className='font-bold text-5xl text-black'>
              Affordable <br />
              Price For Car <br />
              Servicing
            </h3>
            <h6 className='font-bold text-xl text-black w-2/4 leading-7 pt-4'>
              There are many variations of passages of  available, but the majority have suffered alteration in some form
            </h6>
          </div>
        </div>
        <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
          <a href={`#slide${prev}`} className="btn btn-circle mr-4">❮</a>
          <a href={`#slide${next}`} className="btn btn-circle bg-red-500">❯</a>
        </div>
      </div>
  );
};

export default CarouselItems;