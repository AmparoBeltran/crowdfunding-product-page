import styled from "styled-components";

export const HeroStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1em;
  height: 31vh;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    width: 100%;
    margin: 0 auto;
    height: 19vh;
  }

  .project-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    gap: 2em;
    padding: 2em 2em 3em 2em;
    position: relative;
    top: -70px;
    background-color: white;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 100%;
      top: -100px;
    }

    .logo-icon {
      position: absolute;
      top: -30px;
    }

    p {
      margin-bottom: 0;
    }
  }

  .cta {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }

  .bookmark-btn {
    background-color: transparent;
    border: none;
  }
  .bookmark {
    border-radius: 50px;
    display: flex;
    align-items: center;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      background-color: hsl(0deg 4.35% 90.98%);
      font-weight: 700;
    }
  }
  .bookmark-text-green,
  .bookmark-text {
    display: none;
  }

  @media (min-width: ${({ theme }) => theme.desktop}) {
    .bookmark-text-green {
      display: block;
      color: ${({ theme }) => theme.colors.moderateCyan};
      padding: 1em;
      border: none;
      border-radius: 50px;
      &:hover {
        color: ${({ theme }) => theme.colors.black};
      }
    }
    .bookmark-text {
      display: block;
      padding: 1em;
      &:hover {
        color: ${({ theme }) => theme.colors.moderateCyan};
      }
    }
  }
`;
