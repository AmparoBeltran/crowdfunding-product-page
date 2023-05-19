import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  z-index: 1;
  inset: 0;
  background-color: hsl(0deg 0% 0% / 34%);
  @media (min-width: ${({ theme }) => theme.desktop}) {
    display: none;
  }
`;
export const MobileMenuStyled = styled.nav`
  z-index: 2;
  button {
    background-color: transparent;
    border: none;
    position: relative;
    z-index: 2;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      display: none;
    }
  }

  nav {
    position: relative;

    .menu {
      display: none;
      @media (min-width: ${({ theme }) => theme.desktop}) {
        display: flex;
        gap: 2em;
        a {
          text-decoration: none;
          color: white;
          font-weight: 700;

          &:hover {
            color: ${({ theme }) => theme.colors.black};
          }
        }
      }
    }
    hr {
      width: 100%;
      border-top: 1px solid hsl(0deg 0% 47.84% / 0%);
      @media (min-width: ${({ theme }) => theme.desktop}) {
        display: none;
      }
    }

    &.open {
      .menu {
        display: flex;
        flex-direction: column;
        background-color: white;
        gap: 1em;
        border: none;
        border-radius: 5px;
        padding: 2em 0;
        position: absolute;
        right: 0;
        top: 3em;
        width: calc(100vw - 4em);
        z-index: 10;

        a {
          display: inline-block;
          color: ${({ theme }) => theme.colors.darkGray};
          font-weight: 700;
          text-decoration: none;
          padding-inline: 2em;
        }
      }
    }
  }
`;
