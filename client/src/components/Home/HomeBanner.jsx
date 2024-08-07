// HomeBanner.js
import React from 'react';
import banner from '../../assets/banner-hero.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

// Main content wrapper
export const ContentWrapper = styled.div`
  width: 80%;
  display: flex;
  max-width: 100%;
  flex-direction: column-reverse;
  justify-content: center;
  align-items: center;
  text-align: center;
  
  @media (min-width: 768px) {
    flex-direction: row;
    text-align: left;
  }
`;

// Text section
export const TextSection = styled.div`
  width: 50%;
  padding: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Title
export const Title = styled.div`
  font-size: 3rem;
  line-height: 1.2;
  
  @media (max-width: 768px) {
    font-size: 2.25rem;
  }
`;

// Description
export const Description = styled.div`
  font-size: 1rem;
  line-height: 1.75;
  
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Button container
export const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: start;
  
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Styled Link
export const StyledLink = styled(Link)`
  text-decoration: none;
`;

// Button styles
export const Button = styled.button`
  display: inline-block;
  border: 2px solid #333;
  border-radius: 9999px;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  transition: all 0.15s ease-in-out;

  &:hover {
    background-color: ${props => props.primary ? 'black' : 'white'};
    color: ${props => props.primary ? 'white' : 'black'};
    border-color: ${props => props.primary ? 'black' : '#333'};
  }

  &:focus {
    outline: none;
    ring: 0;
    border-color: ${props => props.primary ? 'black' : '#333'};
    color: ${props => props.primary ? 'white' : 'black'};
  }
  
  @media (max-width: 1024px) {
    font-size: 0.875rem;
  }
`;

// Image container
export const ImageWrapper = styled.div`
  width: 60%;
  padding: 1rem;
  display: flex;
  justify-content: center;
  
  @media (max-width: 768px) {
    width: 100%;
  }
`;

// Styled image
export const BannerImage = styled.img`
  transition: all 0.7s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
  }
`;


const HomeBanner = () => {
  return (
    <BannerContainer>
      <ContentWrapper>
        <TextSection>
          <Title>Find your perfect kicks!</Title>
          <br />
          <Description>
            Dive into our world of stylish kicks! Explore a wide range of footwear choices to match your unique style. Your perfect pair is just a click away.
          </Description>
          <br />
          <ButtonContainer>
            <StyledLink to="/shop">
              <Button>Shop Now!</Button>
            </StyledLink>
            <StyledLink to="/categories">
              <Button primary>Explore</Button>
            </StyledLink>
          </ButtonContainer>
        </TextSection>
        <ImageWrapper>
          <BannerImage src={banner} alt="Banner" />
        </ImageWrapper>
      </ContentWrapper>
    </BannerContainer>
  );
};

export default HomeBanner;
