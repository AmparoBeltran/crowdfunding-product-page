import styled from "styled-components";

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: hsl(0deg 0% 0% / 34%);
`;
export const ModalThanksStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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
  img {
    width: fit-content;
  }

  p {
    margin-top: 0;
  }

  .thanks {
    padding: 1em 2.5em;
    font-size: 0.8em;
  }
`;
