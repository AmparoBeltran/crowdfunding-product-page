/* eslint-disable react/prop-types */
import { data } from "../data";
import { PledgeSectionStyled } from "./styles/PledgeSection.styled";
export default function PledgeSection({ handleSelect, getLeftPerReward }) {

    return (
        <PledgeSectionStyled>
            {data.map((item) => (
                <div className={`pledge-container border ${getLeftPerReward(item.pledge) === 0 ? 'deactivated' : ''}`} key={item.title}>
                    <div className="pledge">
                        <div>
                            <h3>{item.title}</h3>
                            <h3 className="pledge-subtitle">Pledge ${item.pledge} or more</h3>
                        </div>
                        <div className="total desktop">
                            <h1>{getLeftPerReward(item.pledge)}</h1>
                            <p>left</p>
                        </div>
                    </div>
                    <p>{item.description}</p>
                    <div className="total mobile">
                        <h1>{getLeftPerReward(item.pledge)}</h1>
                        <p>left</p>
                    </div>
                    <button className="primary" onClick={() => handleSelect(item.pledge)}>Select Reward</button>
                </div>
            ))}
        </PledgeSectionStyled>
    )
}