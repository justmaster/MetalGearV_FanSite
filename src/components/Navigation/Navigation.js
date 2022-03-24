import React from 'react'
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";


const Langcontainer = styled.div`
position: fixed; 
left:40px;
top: 20px;
display: flex;
justify-content: space-evenly;
`


const LanguageSelect = styled.h3`
  width: auto;
  height: auto;
  color: black;
  opacity: 0.5;
  font-family: "Open Sans", montserrat;
  font-weight: 300;
  font-size: 20px;
  margin: auto 5px auto 5px;
  transition: all 0.5s;
  cursor: pointer;
  &.active {
    opacity: 1;
  }
  &:hover {
    opacity: 1;
  }

  @media (max-width: 780px) {
    font-size: 13px;
  }
`;




const Nav = () => {
    const history = useHistory();
    const { langId, Id } = useParams();


    const handleClick = async () => {
        const nextLang = langId === "en" ? "ru" : "en";
        history.push(`/characters/${nextLang}/`);
  };
  
// Button Consts
const home = langId === "en" ? "Home" : "Домой";
const characters = langId === "en" ? "Characters" : "Персонажи";
const about = langId === "en" ? "About" : "О нас";
const gallery = langId === "en" ? "Gallery" : "Галлерея";
const in_depth_analysis = langId === "en" ? "In Depth Analysis" : "Анализ Персонажей";
const trailer = langId === "en" ? "Game Trailers" : "Трейлеры к игре";



//Button Links
const homelink = langId === "en" ? "/home/en" : "/home/ru";
const characterlink = langId === "en" ? "/characters/en" : "/characters/ru";
const aboutlink = langId === "en" ? "/about/en" : "/about/ru";
const gallerylink = langId === "en" ? "/gallery/en" : "/gallery/ru";
const depthlink = langId === "en" ? "/depth/en" : "/depth/ru";
const trailerlink = langId === "en" ? "/trailer/en" : "/trailer/ru";


    return(
      
            <nav className='overflow'>
                <Langcontainer>  
                    <LanguageSelect className={langId === "ru" ? "active" : "disabled"} onClick={handleClick}>RU
                    </LanguageSelect>
                    
                    <LanguageSelect className={langId === "en" ? "active" : "disabled"} onClick={handleClick}>EN
                    </LanguageSelect>                 
                </Langcontainer>
                <ul className='navbar'>
                    <a className='link' href={homelink}>{home}</a>
                    <a className='link' href={characterlink}>{characters}</a>
                    <a className='link' href={gallerylink}>{gallery}</a>
                    <a className='link' href={aboutlink}>{about}</a>
                    <a className='link' href={depthlink}>{in_depth_analysis}</a>
                    <a className='link' href={trailerlink}>{trailer}</a>
                </ul>
            </nav>
    )
}

export default Nav
