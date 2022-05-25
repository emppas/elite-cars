import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';

const LogoContainer = styled.div`
  ${tw`
    flex
    items-start
  `};
`;

const Image = styled.div`
  width: auto;
  ${tw`h-24 md:h-28 pl-2`};
  img {
    width: auto;
    height: 100%;
  }
`;

export function Logo() {
  return (
    <LogoContainer>
      <Image>
        {/* <img src={CarLogoImg} /> */}
        <img src="/images/logo.png" />
      </Image>
      {/* <LogoText>YourCar.</LogoText> */}
    </LogoContainer>
  );
}
