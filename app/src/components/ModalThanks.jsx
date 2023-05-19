/* eslint-disable react/prop-types */
import { ModalThanksStyled, Overlay } from "./styles/ModalThanks.styled";

export default function ModalThanks({ handleCloseThanksModal }) {
    return (
        <Overlay>
            <ModalThanksStyled>
                <img src="/images/icon-check.svg" />

                <h1>Thanks for your support!</h1>
                <p>  Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
                    an email once our campaign is completed.</p>
                <button onClick={handleCloseThanksModal} className="primary thanks">Got it!</button>
            </ModalThanksStyled>
        </Overlay>
    )
}