/* eslint-disable react/prop-types */
import { ContainerStyles, FillerStyles } from "./styles/ProgressBar.styled";

export default function ProgressBar({ completed }) {

    return (
        <ContainerStyles>
            <FillerStyles completed={completed}>
            </FillerStyles>
        </ContainerStyles>

    )

}


