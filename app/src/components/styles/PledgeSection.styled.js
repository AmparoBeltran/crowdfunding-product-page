import styled from "styled-components";

export const PledgeSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1em;

  .pledge-container {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 2em;
    padding: 2em;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      padding-top: 0;
    }
  }

  .pledge {
    display: flex;
    flex-direction: column;
    gap: 0.3em;
    h3 {
      margin: 0;
    }
    @media (min-width: ${({ theme }) => theme.desktop}) {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: baseline;
      & > div {
        gap: 1em;
        display: flex;
      }
    }
  }

  .pledge-subtitle {
    color: ${({ theme }) => theme.colors.moderateCyan};
  }

  .total {
    display: flex;
    align-items: baseline;
    gap: 0.5em;
  }

  .primary {
    padding: 1em 2em;
    width: fit-content;
  }
  .deactivated {
    opacity: 0.3;
  }
  & .desktop {
    display: none;
  }
  @media (min-width: ${({ theme }) => theme.desktop}) {
    & .mobile {
      display: none;
    }

    & .desktop {
      display: flex;
    }
  }
`;
