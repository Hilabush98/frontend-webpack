import React from 'react';
import { Carousel } from 'antd';
const contentStyle = {
  margin: 0,
  color: '#fff',
  display: 'flex',
  height: '500px',
  alignItems: 'center',
  textAlign: 'center',
  width: '100%',
  lineHeight: '160px',
  justifyContent: 'center',
  background: '#364d79',
};
export const CarouselComponent = () => {
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  return (
    <>
        <Carousel className='Carousel' afterChange={onChange} style={{ height:'100%', width:'100%',  display: 'flex',  alignItems: 'center',
      textAlign: 'center',}}>
      <div>
      <h3 style={contentStyle}>1</h3>      
      </div>
      <div>
        <h3 style={contentStyle}>2</h3>
      </div>
      <div>
        <h3 style={contentStyle}>3</h3>
      </div>
      <div>
        <h3 style={contentStyle}>4</h3>
      </div>
    </Carousel>
    </>

  );
};

export default CarouselComponent;
