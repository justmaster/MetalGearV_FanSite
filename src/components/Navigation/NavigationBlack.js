import React from 'react'
import styled from "styled-components";
import { useParams, useHistory, useLocation } from "react-router-dom";

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
  color: white;
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




const NavB = () => {
    const history = useHistory();
    const { langId, Id } = useParams();
    const objectpath = useLocation();
    const path = objectpath && objectpath['pathname']
    console.log(path);
    console.log(history.location)

    // mainId === "depth" ? `/depth/${nextLang}` : `/characters/${nextLang}/${mainId}`

    const handleClick = async () => {
      const nextLang = langId === "en" ? "ru" : "en";
      const mainId = Id;
      const route = path.includes("/characters/ru") ? `/characters/${nextLang}/${mainId}` : path.includes("/characters/en") ? `/characters/${nextLang}/${mainId}` : path.includes("/depth/") ? `/depth/${nextLang}` : path.includes("/about/") ? `/about/${nextLang}` : "error"
      return history.push(`${route}`)
  };


const home = langId === "en" ? "Home" : "Домой";
const characters = langId === "en" ? "Characters" : "Персонажи";
const about = langId === "en" ? "About" : "О нас";
const gallery = langId === "en" ? "Gallery" : "Галлерея";
const in_depth_analysis = langId === "en" ? "In Depth Analysis" : "Анализ Персонажей";
const trailer = langId === "en" ? "Game Trailers" : "Трейлеры к игре";

const homelink = langId === "en" ? "/home/en" : "/home/ru";
const characterlink = langId === "en" ? "/characters/en" : "/characters/ru";
const aboutlink = langId === "en" ? "/about/en" : "/about/ru";
const gallerylink = langId === "en" ? "/gallery/en" : "/gallery/ru";
const depthlink = langId === "en" ? "/depth/en" : "/depth/ru";
const trailerlink = langId === "en" ? "/trailer/en" : "/trailer/ru";





    return(
            <nav>
                    <Langcontainer>
                      <LanguageSelect className={langId === "ru" ? "active" : "disabled"} onClick={handleClick}>RU
                      </LanguageSelect>
                      <LanguageSelect className={langId === "en" ? "active" : "disabled"} onClick={handleClick}>EN
                      </LanguageSelect>
                    </Langcontainer>
                    <ul className='inversenavbar'>
                      <a className='inverselink' href={homelink}>{home}</a>
                      <a className='inverselink' href={characterlink}>{characters}</a>
                      <a className='inverselink' href={gallerylink}>{gallery}</a>
                      <a className='inverselink' href={aboutlink}>{about}</a>
                      <a className='inverselink' href={depthlink}>{in_depth_analysis}</a>
                      <a className='inverselink' href={trailerlink}>{trailer}</a>
                    </ul>
            </nav>
    )
}

export default NavB