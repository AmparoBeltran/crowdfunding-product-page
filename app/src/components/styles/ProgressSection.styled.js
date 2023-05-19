import styled from "styled-components";

export const ProgressSectionStyled = styled.section`
  display: flex;
  flex-direction: column;
  padding: 1em;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    width: 100%;
    margin: 0 auto;
  }
  .project-progress {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 2em;
    padding: 2em 2em 2em 2em;
    background-color: white;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 100%;
      .progress-container {
        display: flex;
        align-items: center;
        width: 100%;

        & > div {
          width: 100%;
        }
      }
    }

    hr {
      background-color: hsl(0deg 4.96% 91.08%);
      border: none;
      height: 1px;
      width: 60%;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        transform: rotate(90deg);
      }
    }

    h1 {
      margin-bottom: 0;
    }

    p {
      margin-top: 0;
    }
  }
`;
