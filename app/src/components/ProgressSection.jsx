/* eslint-disable react/prop-types */
import ProgressBar from "./ProgressBar";
import { ProgressSectionStyled } from "./styles/ProgressSection.styled";

export default function ProgressSection({ getTotalBacked, getTotalBackers, getDaysLeft }) {
    function getCompleted() {
        return getTotalBacked() / 100000 * 100
    }
    return (
        <ProgressSectionStyled>
            <div className="project-progress border">
                <div className="progress-container ">
                    <div>

                        <h1>${getTotalBacked()}</h1>
                        <p>of $100,000 backed</p>
                    </div>
                    <hr />
                    <div>

                        <h1>{getTotalBackers()}</h1>
                        <p>total backers</p>
                    </div>
                    <hr />
                    <div>

                        <h1>{getDaysLeft()}</h1>
                        <p>days left</p>
                    </div>
                </div>
                <ProgressBar completed={getCompleted()} />
            </div>
        </ProgressSectionStyled>
    )
}