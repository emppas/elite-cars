import {
  faCalendarAlt,
  faCarAlt,
  faCarSide,
  faCircleCheck,
  faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const Container = styled.div`
  ${tw`flex-row items-center pt-1 pb-3 md:flex lg:pt-6 lg:pb-6`};
`;

const StepsContainer = styled.div`
  ${tw`flex flex-wrap mt-2 justify-evenly lg:mt-16`};
`;

const StepContainer = styled.div`
  ${tw`flex flex-col items-center m-2 transition-colors md:w-60 lg:w-96 hover:text-green-500`};
`;

const Step = styled.div`
  box-shadow: 0 1.3px 12px -3px rgba(0, 0, 0, 0.4);
  ${tw`flex items-center justify-center p-6 rounded-lg `};
`;

const StepTitle = styled.h4`
  ${tw`mt-2 text-lg font-semibold text-black `};
`;

const StepDescription = styled.p`
  ${tw`w-10/12 text-xs text-center text-gray-700 `};
`;

const StepIcon = styled.span`
  ${tw`text-3xl text-green-500 `};
`;

export function BookingSteps() {
  return (
    <Container>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faMapMarkedAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Choose Location</StepTitle>
          <StepDescription>
            Find the nearest Elite Garage and book your Car
          </StepDescription>
        </StepContainer>
      </StepsContainer>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCalendarAlt} />
            </StepIcon>
          </Step>
          <StepTitle>Select Pick-Up date & time</StepTitle>
          <StepDescription>
            Select the best date and time to rent a car for yourself
          </StepDescription>
        </StepContainer>
      </StepsContainer>
      <StepsContainer>
        <StepContainer>
          <Step>
            <StepIcon>
              <FontAwesomeIcon icon={faCarSide} />
            </StepIcon>
          </Step>
          <StepTitle>Book Your Car</StepTitle>
          <StepDescription>
            Book your Luxury car with ease in one single lick
          </StepDescription>
        </StepContainer>
      </StepsContainer>
    </Container>
  );
}
