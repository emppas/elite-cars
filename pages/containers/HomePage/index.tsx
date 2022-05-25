import { BookCard } from 'pages/components/bookCard';
import { Footer } from 'pages/components/footer';
import { Marginer } from 'pages/components/marginer';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Navbar } from '../../components/navbar';
import { AboutSection } from './aboutSection';
import { BookingSteps } from './bookingSteps';
import { BookingTitle } from './BookingTitle';
import { TopCars } from './topCars';
import { TopSection } from './topSection';

const PageContainer = styled.div`
  ${tw`flex flex-col items-center w-full h-full overflow-x-hidden `}
`;

export function HomePage() {
  return (
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction="vertical" margin="0.2em" />
      <BookCard />
      <Marginer direction="vertical" margin="0.8em" />
      <BookingTitle />
      <Marginer direction="vertical" margin="0.1em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="0.5em" />
      <AboutSection />
      <Marginer direction="vertical" margin="0.5em" />
      <TopCars />
      <Marginer direction="vertical" margin="0.5em" />
      <Footer />
    </PageContainer>
  );
}
