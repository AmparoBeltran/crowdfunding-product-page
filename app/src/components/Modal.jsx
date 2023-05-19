/* eslint-disable react/prop-types */
import { ModalStyled, Overlay } from "./styles/Modal.styled";
import { data } from "../data";
import { useState } from "react";

export default function Modal({ handleCloseModal, selected, handleSelect, handleAddPledge, getLeftPerReward }) {
    const [pledgeInput, setPledgeInput] = useState(0)

    function handleInputValue(e) {

        setPledgeInput(Number(e.target.value))
    }
    function isSelected(pledge) {
        return (pledge === selected)
    }
    return (
        <Overlay>
            <ModalStyled>
                <div className="back-project">
                    <div className="title">
                        <h2>Back this project</h2>
                        <button onClick={handleCloseModal}><img src="/images/icon-close-modal.svg" /></button>
                    </div>
                    <p>Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?
                    </p>
                </div>
                <div className="pledge-container border">
                    <div className="radio-title">
                        <input onClick={() => handleSelect(-1)} checked={isSelected(-1)} type="radio" />
                        <h3>Pledge with no reward</h3>
                    </div>
                    <p>Choose to support us without a reward if you simply believe in our project. As a backer,
                        you will be signed up to receive product updates via email.
                    </p>
                    <div className="pledge-input hidden">
                        <hr />
                        <h3>Enter your pledge</h3>
                        <div className="submit-pledge">
                            <input type="number" placeholder={`$1`} />
                            <button className="primary">Continue</button>
                        </div>
                    </div>
                </div>
                {data.map((item) => (
                    <div className={`pledge-container border ${getLeftPerReward(item.pledge) === 0 ? 'deactivated' : ''}`} key={item.title}>
                        <div className="pledge">

                            <input onClick={() => handleSelect(item.pledge)} checked={isSelected(item.pledge)} type="radio" />
                            <div className="title">
                                <div>
                                    <h3>{item.title}</h3>
                                    <h3 className="pledge-subtitle">Pledge ${item.pledge} or more</h3>
                                </div>
                                <div className="total desktop">
                                    <h1>{getLeftPerReward(item.pledge)}</h1>
                                    <p>left</p>
                                </div>
                            </div>
                        </div>
                        <p>{item.description}</p>
                        <div className="total mobile">
                            <h1>{getLeftPerReward(item.pledge)}</h1>
                            <p>left</p>
                        </div>
                        <div className="pledge-input hidden">
                            <hr />
                            <div className="row">
                                <h3>Enter your pledge</h3>
                                <div className="submit-pledge">
                                    <input
                                        type="number"
                                        placeholder={`$${item.pledge}`}
                                        value={pledgeInput}
                                        onChange={handleInputValue}
                                    />
                                    <button
                                        className="primary"

                                        onClick={() => handleAddPledge(item.pledge, pledgeInput)}
                                    >
                                        Continue
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </ModalStyled>
        </Overlay>
    )
}