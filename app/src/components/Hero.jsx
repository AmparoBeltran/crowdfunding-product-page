/* eslint-disable react/prop-types */
import { HeroStyled } from "./styles/Hero.styled";
import { useState } from "react";

export default function Hero({ handleOpenModal }) {
    const [bookmarked, setBookmarked] = useState(false)

    const handleToggleBookmark = () => {
        setBookmarked((bookmarked) => !bookmarked)
    }

    return (
        <HeroStyled>
            <div className="project-container border">
                <img className="logo-icon" src="/images/logo-mastercraft.svg" alt="logo mastercraft" />
                <div className="project-title">
                    <h1>Mastercraft Bamboo Monitor Riser</h1>
                    <p>A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
                </div>
                <div className="cta">
                    <button className="primary" onClick={handleOpenModal}>Back this project</button>
                    <button className="bookmark-btn" onClick={handleToggleBookmark}>
                        {bookmarked ?
                            <div className="bookmark">
                                <img src="/images/icon-bookmark-active.svg" alt="Bookmark" />
                                <span className="bookmark-text-green">Bookmarked</span>
                            </div> :
                            <div className="bookmark">
                                <img src="/images/icon-bookmark.svg" alt="Bookmark" />
                                <span className="bookmark-text">Bookmark</span>
                            </div>}
                    </button>

                </div>
            </div>

        </HeroStyled>
    )
}