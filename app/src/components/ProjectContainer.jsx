/* eslint-disable react/prop-types */
import AboutSection from "./AboutSection";
import PledgeSection from "./PledgeSection";
import { ProjectContainerStyled } from "./styles/ProjectContainer.styled";

export default function ProjectContainer({ handleSelect, getLeftPerReward }) {
    return (
        <ProjectContainerStyled>
            <AboutSection />
            <PledgeSection handleSelect={handleSelect} getLeftPerReward={getLeftPerReward} />
        </ProjectContainerStyled>
    )
}