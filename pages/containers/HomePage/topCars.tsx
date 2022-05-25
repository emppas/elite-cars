import { Car } from 'pages/components/car';
import { ICar } from 'pages/typings/car';
import React, { useState } from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import Carousel, { Dots, slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const TopCarsContainer = styled.div`
  ${tw`flex flex-col items-center justify-center w-full max-w-screen-lg pl-4 pr-4 mb-10 md:pl-0 md:pr-0`};
`;

const Title = styled.h2`
  ${tw`text-3xl font-extrabold text-black lg:text-5xl`};
`;

const CarsContainer = styled.div`
  ${tw`flex flex-wrap justify-center w-full mt-7 md:mt-10`};
`;

const EmptyCars = styled.div`
  ${tw`flex items-center justify-center w-full text-sm text-gray-500 `};
`;

export function TopCars() {
  const [current, setCurrent] = useState();
  const testCar1: ICar = {
    name: 'Audi S3 Car',
    mileage: '10K',
    thumbnailSrc:
      'https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg',
    dailyPrice: 20000,
    monthlyPrice: 450000,
    gearType: 'Auto',
    gas: 'Petrol',
  };
  const testCar2: ICar = {
    name: 'Honda City 5 Seater Car',
    mileage: '20K',
    thumbnailSrc:
      'https://cdn.jdpower.com/ChromeImageGallery/Expanded/Transparent/640/2013TOY002a_640/2013TOY002a_640_01.png',
    dailyPrice: 15000,
    monthlyPrice: 400000,
    gearType: 'Auto',
    gas: 'Petrol',
  };
  const testCar3: ICar = {
    name: 'Chevrolet Equinox',
    mileage: '13K',
    thumbnailSrc:
      'https://cdn.jdpower.com/ChromeImageGallery/Expanded/Transparent/640/2018CHS15_640/2018CHS150001_640_01.png',
    dailyPrice: 25000,
    monthlyPrice: 500000,
    gearType: 'Auto',
    gas: 'Petrol',
  };

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Deals</Title>
      <CarsContainer>
        {/* <Carousel
          value={current}
          slides={[
            <Car {...testCar1} />,
            <Car {...testCar2} />,
            <Car {...testCar3} />,
            <Car {...testCar1} />,
            <Car {...testCar2} />,
          ]}
          plugins={[
            'clickToChange',
            {
              resolves: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
        /> */}
        {/* <Dots value={current} onChange={setCurrent} number={2} /> */}
        <Car {...testCar1} />
        <Car {...testCar2} />
        <Car {...testCar3} />
      </CarsContainer>
    </TopCarsContainer>
  );
}
