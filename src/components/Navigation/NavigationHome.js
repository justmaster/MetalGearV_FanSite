import React from 'react'
import styled from "styled-components";
import { useParams, useHistory } from "react-router-dom";


const Langcontainer = styled.div`
position: fixed; 
left:180px;
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

const HomeNav = () => {
    const history = useHistory();
    const { langId, Id } = useParams();


    const handleClick = async () => {
        const nextLang = langId === "en" ? "ru" : "en";
        history.push(`/home/${nextLang}/`);
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
        <div className="parentbar">
            <Langcontainer>  
                <LanguageSelect className={langId === "ru" ? "active" : "disabled"} onClick={handleClick}>RU
                </LanguageSelect>
                
                <LanguageSelect className={langId === "en" ? "active" : "disabled"} onClick={handleClick}>EN
                </LanguageSelect>                 
            </Langcontainer>
            <div className="leftside">
                    <a className='homeleftlink' href={homelink}>{home}</a>
                    <a className='homeleftlink' href={characterlink}>{characters}</a>
                    <a className='homeleftlink' href={gallerylink}>{gallery}</a>
            </div>



            <div className="rightside">
                <a className='homerightlink' href={aboutlink}>{about}</a>
                <a className='homerightlink' href={depthlink}>{in_depth_analysis}</a>
                <a className='homerightlink' href={trailerlink}>{trailer}</a>
                <a className='ddlogo' href={homelink}></a>
            </div>

        </div>

    )
}

export default HomeNav

{/* <div className="fullback">

<div className="lefthalf">
    <a className='homeleftlink' href="/">Home</a>
    <a className='homeleftlink' href="/characters">Characters</a>
    <a className='homeleftlink' href="/quietgallery">Gallery</a>
    <div className="whitebackground"></div>
</div>


<div className="righthalf">
    <a className='homerightlink' href="/">About</a>
    <a className='homerightlink' href="/characters">In depth Analysis</a>
    <a className='homerightlink' href="/quietgallery">Gallery</a>
    <div className="blackbackground"></div>
</div>

</div> */}















{/* <nav className='overflow'>
<div className='homeleftnavbar'>
    <a className='homeleftlink' href="/">Home</a>
    <a className='homeleftlink' href="/characters">Characters</a>
    <a className='homeleftlink' href="/quietgallery">Gallery</a>
</div>
<div className='homerightnavbar'>
    <a className='homerightlink' href="/about">About</a>
    <a className='homerightlink' href="/depth">In Depth Analysis</a>
    <a className='homerightlink' href="error">Contact</a>
</div>
</nav> */}