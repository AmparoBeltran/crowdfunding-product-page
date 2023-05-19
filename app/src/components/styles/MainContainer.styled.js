import styled from "styled-components";

export const MainContainerStyled = styled.main`
  display: flex;
  flex-direction: column;

  @media (min-width: ${({ theme }) => theme.desktop}) {
    width: min(50%, 800px);
    margin: 0 auto;
    align-items: center;
  }
`;
