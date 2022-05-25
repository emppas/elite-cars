import { Button } from 'pages/components/button';
import { SCREENS } from 'pages/components/responsive';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

// import EliteCarImg from '../../../public/images/car.png';
// import BlogImg from '../../../public/images/blob.svg';

const TopSectionContainer = styled.div`
  min-height: 300px;
  margin-top: 1.5em;
  ${tw`
  w-full
  max-w-screen-2xl
  flex
  justify-between
  pl-3
  pr-3
  lg:pl-12
  lg:pr-12
  `};
`;

const LeftContainer = styled.div`
  ${tw`
  w-1/2
  flex
  flex-col
  relative
  mt-1
  `};
`;

const RightContainer = styled.div`
  ${tw`
  w-1/2
  flex
  flex-col
  relative
  mt-2
  `};
`;

const Slogan = styled.h1`
  ${tw`
    font-bold
    text-xl
    xl:text-4xl
    sm:text-2xl
    md:text-4xl
    lg:font-black
    md:font-extrabold
    text-black
    mb-3
    sm:leading-snug
    lg:leading-normal
    xl:leading-relaxed
  `};
`;

const Description = styled.p`
  ${tw`
    text-xs
    lg:text-sm
    xl:text-lg
    sm:max-h-full
    overflow-hidden
    max-h-11
    text-gray-800
  `};
`;

const BlobContainer = styled.div`
  width: 20em;
  height: 10em;
  position: absolute;
  right: -5em;
  top: -9em;
  z-index: -1;
  transform: rotate(-30deg);
  img {
    width: 100%;
    height: auto;
    max-height: max-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    width: 35em;
    max-height: 10em;
    right: -9em;
    top: -16em;
    transform: rotate(-25deg);
  }
  @media (min-width: ${SCREENS.lg}) {
    width: 45em;
    max-height: 30em;
    right: -7em;
    top: -15em;
    transform: rotate(-30deg);
  }
  @media (min-width: ${SCREENS.xl}) {
    width: 65em;
    max-height: 30em;
    right: -15em;
    top: -25em;
    transform: rotate(-20deg);
  }
`;

const StandaloneCar = styled.div`
  width: auto;
  height: 18em;
  right: -9em;
  top: -7em;
  position: absolute;
  img {
    width: auto;
    height: 100%;
    max-width: fit-content;
  }
  @media (min-width: ${SCREENS.sm}) {
    height: 22em;
    right: -6em;
    top: -9em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
    right: -6em;
    top: -9em;
  }
  @media (min-width: ${SCREENS.xl}) {
    height: 43em;
    right: -13em;
    top: -14em;
  }
`;

const ButtonsContainer = styled.div`
  ${tw`
  flex
  flex-wrap
  mt-4
  `};
`;

export function TopSection() {
  return (
    <TopSectionContainer>
      <LeftContainer>
        <Slogan>Rent The Best Luxury Car's With Us</Slogan>
        <Description>
          Always Choose the best car from our garage or order it remotely at the
          best price for you and get the best quality cars for as long as you
          like..
        </Description>
        <ButtonsContainer>
          <Button text="Book Your Ride" />
          <Button theme="filled" text="Sell Your Car" />
        </ButtonsContainer>
      </LeftContainer>
      <RightContainer>
        <BlobContainer>
          <img src="/images/blob.svg" />
        </BlobContainer>
        <StandaloneCar>
          <img src="/images/car.png" />
        </StandaloneCar>
      </RightContainer>
    </TopSectionContainer>
  );
}
