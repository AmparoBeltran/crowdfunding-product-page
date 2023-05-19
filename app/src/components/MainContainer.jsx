import { useState } from "react";
import Header from "./Header";
import Hero from "./Hero";
import ProgressSection from "./ProgressSection";
import ProjectContainer from "./ProjectContainer";
import { MainContainerStyled } from "./styles/MainContainer.styled";
import Modal from './Modal';
import { data } from "../data";
import ModalThanks from "./ModalThanks";

export default function MainContainer() {
    const [open, setOpen] = useState(false)
    const handleOpenModal = () => {
        setOpen(true)
    }

    const handleCloseModal = () => {
        setOpen(false)
    }

    const [openThanksModal, setOpenThanksModal] = useState(false)

    const handleOpenThanksModal = () => {
        setOpenThanksModal(true)
    }
    const handleCloseThanksModal = () => {
        setOpenThanksModal(false)
    }

    const [selected, setSelected] = useState(undefined)

    function handleSelect(pledge) {
        if (getLeftPerReward(pledge) === 0)
            return;
        setSelected(pledge)
        handleOpenModal()
    }

    const [pledges, setPledges] = useState([])



    function handleAddPledge(rewardId, amount) {

        if (amount >= rewardId) {
            setPledges((pledges) => [...pledges, { rewardId, amount }])
            handleCloseModal()
            handleOpenThanksModal()
        } else {
            alert(`Please enter $${rewardId} or more`)
        }
    }

    function getAllPledgesForReward(rewardId) {

        return pledges.filter((pledge) => pledge.rewardId === rewardId)
    }

    function getLeftPerReward(rewardId) {
        const pledgesForReward = getAllPledgesForReward(rewardId)
        const reward = data.find((item) => {
            if (item.pledge === rewardId) {
                return true
            }
            return false
        })
        return reward.totalAvailable - pledgesForReward.length

    }

    function getTotalBackers() {
        return pledges.length
    }


    function getTotalBacked() {
        return pledges.reduce((total, item) => total + item.amount, 0)
    }

    function getDaysLeft() {
        const today = Date.now()
        const deadLine = today + 56 * 24 * 60 * 60 * 1000
        return (deadLine - today) / (24 * 60 * 60 * 1000)
    }

    return (
        <MainContainerStyled>
            <Header />
            <Hero handleOpenModal={handleOpenModal} />
            <ProgressSection
                getTotalBacked={getTotalBacked}
                getTotalBackers={getTotalBackers}
                getDaysLeft={getDaysLeft}
            />
            <ProjectContainer handleSelect={handleSelect} getLeftPerReward={getLeftPerReward} />
            {open && <Modal
                selected={selected}
                handleCloseModal={handleCloseModal}
                handleSelect={handleSelect}
                handleAddPledge={handleAddPledge}
                getLeftPerReward={getLeftPerReward}
            />}
            {openThanksModal && <ModalThanks
                handleCloseThanksModal={handleCloseThanksModal}
            />}
        </MainContainerStyled>
    )
}