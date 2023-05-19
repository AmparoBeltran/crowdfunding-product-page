import styled from "styled-components";

export const AboutSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    width: 100%;
    margin: 0 auto;
  }
  .about-container {
    display: flex;
    flex-direction: column;
    padding: 2em;
  }
`;
