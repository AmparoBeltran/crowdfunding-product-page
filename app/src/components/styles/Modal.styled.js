import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: hsl(0deg 0% 0% / 34%);
`;

export const ModalStyled = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 15vh;
  left: 1em;
  right: 1em;
  background-color: white;
  border: none;
  border-radius: 20px;
  gap: 1em;
  padding: 2em;
  @media (min-width: ${({ theme }) => theme.desktop}) {
    width: min(50%, 800px);
    margin: 0 auto;
  }

  .back-project {
    padding: 1em;

    .title {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;

      button {
        background: none;
        border: none;
      }
    }
    p {
      margin-bottom: 0;
    }
  }

  .pledge-container {
    display: flex;
    flex-direction: column;
    padding: 1em;
    &:has(input:checked) {
      border: 1px solid ${({ theme }) => theme.colors.moderateCyan};
      .hidden {
        display: flex;
      }
    }
  }
  input[type="radio"] {
    width: 1em;
    height: 1em;
    /* The native appearance is hidden */
    appearance: none;
    -webkit-appearance: none;

    /* For a circular appearance we need a border-radius. */
    border-radius: 50%;

    /* The border will be the spacing between the dot and the outer circle */
    border: 3px solid #fff;

    /* And by creating a box-shadow with no offset and no blur, we have an outer circle */
    box-shadow: 0 0 0 1px hsl(0deg 4.96% 91.08%);

    &:checked {
      /* The background will be the radio dot's color. */
      background: ${({ theme }) => theme.colors.moderateCyan};
      /* And by creating a box-shadow with no offset and no blur, we have an outer circle */
      box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.moderateCyan};
    }
  }

  .pledge,
  .radio-title {
    display: flex;
    align-items: center;
    gap: 0.5em;
    h3 {
      margin: 0;
    }
  }

  .pledge {
    flex-direction: row;
  }

  .title {
    display: flex;
    flex-direction: column;
    gap: 0.3em;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      flex-direction: row;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      & > div {
        display: flex;
        flex-direction: row;
        gap: 1em;
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

  hr {
    background-color: hsl(0deg 4.96% 91.08%);
    border: none;
    height: 1px;
    width: 100%;
  }

  .pledge-input {
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;
    h3 {
      color: ${({ theme }) => theme.colors.darkGray};
    }
  }

  .row {
    display: flex;
    flex-direction: column;
    align-items: center;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      width: 100%;
      flex-direction: row;
      justify-content: space-between;
    }
  }
  .hidden {
    display: none;
  }

  .submit-pledge {
    display: grid;
    gap: 1em;
    place-content: center;
    grid-template-columns: 30% 30%;
    @media (min-width: ${({ theme }) => theme.desktop}) {
      justify-content: flex-end;
    }

    button.primary {
      padding: 1em 2.5em;
      font-size: 0.8em;
    }
    input {
      border-radius: 100px;
      padding: 1em 2.5em;
      font-size: 1em;
      font-weight: 700;
      border: 1px solid hsl(0deg 17.64% 95.81%);
      &:hover {
        border: 1px solid ${({ theme }) => theme.colors.moderateCyan};
      }
    }
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
