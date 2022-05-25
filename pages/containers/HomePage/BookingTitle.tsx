import { faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`
    w-full
    flex
    flex-col
    items-center
    pt-2
    pb-2
    lg:pt-5
    lg:pb-5
    md:text-5xl
  `};
`;

const Title = styled.h2`
  ${tw`
  text-2xl
  lg:text-5xl
  text-black
  font-bold
`}
`;

const CircleIcon = styled.span`
  ${tw`
  text-white
  bg-green-500
  mr-1
  ml-1
  rounded-full
  `};
`;

export function BookingTitle() {
  return (
    <Container>
      <Title>
        Our Three
        <CircleIcon>
          <FontAwesomeIcon icon={faCircleCheck} />
        </CircleIcon>
        Booking Steps
      </Title>
    </Container>
  );
}
