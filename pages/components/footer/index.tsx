import {
  faFacebook,
  faInstagram,
  faTelegram,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faPhoneAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';
import styled from 'styled-components';
import tw from 'twin.macro';
import { Logo } from '../logo';

const FooterContainer = styled.div`
  min-height: 24em;
  ${tw`flex flex-col items-center min-w-full pt-1 bg-green-500 md:pt-3`}
`;

const InnerContainer = styled.div`
  ${tw`flex flex-wrap w-full h-full max-w-screen-2xl`};
`;

const BottomContainer = styled.div`
  ${tw`flex justify-center w-full mt-16 max-w-screen-2xl md:justify-start md:mt-1`};
`;

const CopyrightText = styled.small`
  font-size: 15px;
  ${tw`pl-6 pr-8 mr-2 text-white md:mr-12 md:pl-5 md:pr-5 `}
  & > a {
    ${tw`text-red-600 transition-all hover:text-blue-200`};
  }
`;

const AboutContainer = styled.div`
  ${tw`flex flex-col pl-6 pr-8 mr-2 md:mr-12 md:pl-5 md:pr-5`};
`;

const AboutText = styled.p`
  ${tw`max-w-xs text-sm font-normal leading-5 text-white `};
`;

const SectionContainer = styled.div`
  ${tw`flex flex-col w-full pl-10 pr-10 mr-2 md:w-auto md:mr-16 md:pl-3 md:pr-3 mt-7 md:mt-10`};
`;

const LinksList = styled.ul`
  ${tw`flex flex-col list-none outline-none `};
`;

const ListItem = styled.li`
  ${tw`mb-3 `};
  & > a {
    ${tw`text-sm text-white transition-all hover:text-gray-200`};
  }
`;

const HeaderTitle = styled.h3`
  ${tw`mb-3 text-2xl font-bold text-white `};
`;

const HorizontalContainer = styled.div`
  ${tw`flex items-center mt-4 `};
`;

const RedIcon = styled.span`
  ${tw`flex items-center justify-center mr-2 text-base text-white bg-green-900 rounded-full w-9 h-9`};
`;

const SocialContainer = styled.div`
  ${tw`flex items-center mt-4 `};
`;
const SocialIcon = styled.span`
  ${tw`flex items-center justify-center mr-2 text-base text-white bg-blue-700 rounded-full w-9 h-9`};
`;

const SmallText = styled.h6`
  ${tw`text-sm text-white `};
`;

export function Footer() {
  return (
    <FooterContainer>
      <InnerContainer>
        <AboutContainer>
          <Logo />
          <AboutText>
            Elite Chauffeurs is a Car renting and selling company located Port
            Harcourt which has high quality cars and high rated services.
          </AboutText>
        </AboutContainer>
        <SectionContainer>
          <HeaderTitle>Our Quick Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="">Home</a>
            </ListItem>
            <ListItem>
              <a href="">About Us</a>
            </ListItem>
            <ListItem>
              <a href="">Services</a>
            </ListItem>
            <ListItem>
              <a href="">Car Models</a>
            </ListItem>
            <ListItem>
              <a href="">Team Members</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HeaderTitle>Other Links</HeaderTitle>
          <LinksList>
            <ListItem>
              <a href="">FAQ</a>
            </ListItem>
            <ListItem>
              <a href="">Contact Us</a>
            </ListItem>
            <ListItem>
              <a href="">Support</a>
            </ListItem>
            <ListItem>
              <a href="">Piracy Policy</a>
            </ListItem>
            <ListItem>
              <a href="">Terms &amp; Conditions</a>
            </ListItem>
          </LinksList>
        </SectionContainer>
        <SectionContainer>
          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faPhoneAlt} />
            </RedIcon>
            <SmallText>+234 816-815-5566</SmallText>
          </HorizontalContainer>

          <HorizontalContainer>
            <RedIcon>
              <FontAwesomeIcon icon={faEnvelope} />
            </RedIcon>
            <SmallText>info@elitechauffeurs.com</SmallText>
          </HorizontalContainer>
        </SectionContainer>
        <SectionContainer>
          <SocialContainer>
            <SocialIcon>
              <FontAwesomeIcon icon={faFacebook} />
            </SocialIcon>
            <SocialIcon>
              <FontAwesomeIcon icon={faInstagram} />
            </SocialIcon>
            <SocialIcon>
              <FontAwesomeIcon icon={faTwitterSquare} />
            </SocialIcon>
          </SocialContainer>
        </SectionContainer>
      </InnerContainer>
      <BottomContainer>
        <CopyrightText>
          Copyright &copy; {new Date().getFullYear()}
          <a href="#"> Task Runners ltd.</a> All rights reserved.
        </CopyrightText>
      </BottomContainer>
    </FooterContainer>
  );
}
