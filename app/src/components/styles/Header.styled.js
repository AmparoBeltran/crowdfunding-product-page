import styled from "styled-components";

export const HeaderStyled = styled.header`
  padding: 2em 2em 0 2em;
  background-image: url("/images/image-hero-mobile.jpg");
  background-repeat: no-repeat;
  background-size: contain;
  height: 37vh;

  @media (min-width: ${({ theme }) => theme.desktop}) {
    width: 100vw;
    background-image: url("/images/image-hero-desktop.jpg");
    background-size: cover;
    height: 49vh;
    padding: 3em 10em;
  }
`;
