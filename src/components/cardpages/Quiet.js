import React from "react"
import NavB from "../Navigation/NavigationBlack"
import { useParams} from "react-router-dom";
import { useState, useEffect} from 'react';
import styled from "styled-components";





export const LanguageSelect = styled.h3`
  width: auto;
  height: auto;
  color: white;
  opacity: 0.5;
  font-family: "Open Sans", montserrat;
  font-weight: 300;
  font-size: 30px;
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
    font-size: 15px;
  }
`;



const Quiet = () => {

  const { langId, Id } = useParams();
  const [text, setText] = useState();
  const getData = async () => {
    const res = await fetch('https://api.jsonbin.io/b/5ed797da7741ef56a567395c');
    const resData = await res.json();
    setText(resData);
}

const buttontext = langId === "en" ? "Gallery" : "Галлерея"
const leftbuttontext = langId === "en" ? "Previous Character " : "Пред. Персонаж"
const rightbuttontext = langId === "en" ? "Next Character " : "След. Персонаж"


const quiet_slogan = 
text && Id === "Quiet" & langId === "en" ? "Quiet EN" : (text && Id === "Quiet" && langId === "ru" ? "Quiet Ru" : "Quiet En")

const miller_slogan =
(text && Id === "Miller" & langId === "en" ? "Miller EN" : (text && Id === "Miller" && langId === "ru" ? "Miller Ru" : "Miller En"))

const snake_slogan =
(text && Id === "Snake" & langId === "en" ? "Snake EN" : (text && Id === "Snake" && langId === "ru" ? "Snake Ru" : "Snake En"))



function slogan() {
if (Id === "Quiet") {
  return quiet_slogan
} else if (Id === "Miller") {
  return miller_slogan
} else if (Id === "Snake") {
  return snake_slogan
} 
}


useEffect(() => {
  const idcheck = () => {
    Id && getData()
  }
    idcheck()
  }, []);


console.log(text)
console.log(text && text[0]['background']) 

return (
  
      <div className="overlay">
        <NavB /> 
        <div className="gallerycontainer">
            <a href="/quietgallery" className='gallerytoggle'></a>
            <p className='gallerytext'>{buttontext}</p>
        </div>

        

        <div className="buttoncontainer">
            <a href="" className='characterbutton'>‹</a>
          <p className='reftext'>{leftbuttontext}</p>
        </div>

        <div className="rightbuttoncontainer">
            <a href="" className='characterbutton'>›</a>
          <p className='reftext'>{rightbuttontext}</p>
        </div>
          
          
        <div className="middlebox">

          <div className='character-name' alignText="center">
              {slogan()}
          </div>

          <div className="text"
            >Ex enim reprehenderit irure in occaecat irure ad velit esse nulla officia Lorem cillum. Veniam exercitation voluptate laboris sit officia cupidatat non dolor dolore mollit deserunt ea aute. Nulla dolore velit id cillum sit cupidatat et deserunt cupidatat laborum voluptate ex mollit. Irure minim laboris do culpa do consectetur. Duis eiusmod voluptate in amet tempor dolore non eiusmod consectetur voluptate irure eu.Ex enim reprehenderit irure in occaecat irure ad velit esse nulla officia Lorem cillum. Veniam exercitation voluptate laboris sit officia cupidatat non dolor dolore mollit deserunt ea aute. Nulla dolore velit id cillum sit cupidatat et deserunt cupidatat laborum voluptate ex mollit. Irure minim laboris do culpa do consectetur. Duis eiusmod voluptate in amet tempor dolore non eiusmod consectetur voluptate irure eu.Ex enim reprehenderit irure in occaecat irure ad velit esse nulla officia Lorem cillum. Veniam exercitation voluptate laboris sit officia cupidatat non dolor dolore mollit deserunt ea aute. Nulla dolore velit id cillum sit cupidatat et deserunt cupidatat laborum voluptate ex mollit. Irure minim laboris do culpa do consectetur. Duis eiusmod voluptate in amet tempor dolore non eiusmod consectetur voluptate irure eu.Ex enim reprehenderit irure in occaecat irure ad velit esse nulla officia Lorem cillum. Veniam exercitation voluptate laboris sit officia cupidatat non dolor dolore mollit deserunt ea aute. Nulla dolore velit id cillum sit cupidatat et deserunt cupidatat laborum voluptate ex mollit. Irure minim laboris do culpa do consectetur. Duis eiusmod voluptate in amet tempor dolore non eiusmod consectetur voluptate irure eu.Ex enim reprehenderit irure in occaecat irure ad velit esse nulla officia Lorem cillum. Veniam exercitation voluptate laboris sit officia cupidatat non dolor dolore mollit deserunt ea aute. Nulla dolore velit id cillum sit cupidatat et deserunt cupidatat laborum voluptate ex mollit. Irure minim laboris do culpa do consectetur. Duis eiusmod voluptate in amet tempor dolore non eiusmod consectetur voluptate irure eu.Ex enim reprehenderit irure in occaecat irure ad velit esse nulla officia Lorem cillum. Veniam exercitation voluptate laboris sit officia cupidatat non dolor dolore mollit deserunt ea aute. Nulla dolore velit id cillum sit cupidatat et deserunt cupidatat laborum voluptate ex mollit. Irure minim laboris do culpa do consectetur. Duis eiusmod voluptate in amet tempor dolore non eiusmod consectetur voluptate irure eu.Ex enim reprehenderit irure in occaecat irure ad velit esse nulla officia Lorem cillum. Veniam exercitation voluptate laboris sit officia cupidatat non dolor dolore mollit deserunt ea aute. Nulla dolore velit id cillum sit cupidatat et deserunt cupidatat laborum voluptate ex mollit. Irure minim laboris do culpa do consectetur. Duis eiusmod voluptate in amet tempor dolore non eiusmod consectetur voluptate irure eu.Ex enim reprehenderit irure in occaecat irure ad velit esse nulla officia Lorem cillum. Veniam exercitation voluptate laboris sit officia cupidatat non dolor dolore mollit deserunt ea aute. Nulla dolore velit id cillum sit cupidatat et deserunt cupidatat laborum voluptate ex mollit. Irure minim laboris do culpa do consectetur. Duis eiusmod voluptate in amet tempor dolore non eiusmod consectetur voluptate irure eu.Ex enim reprehenderit irure in occaecat irure ad velit esse nulla officia Lorem cillum. Veniam exercitation voluptate laboris sit officia cupidatat non dolor dolore mollit deserunt ea aute. Nulla dolore velit id cillum sit cupidatat et deserunt cupidatat laborum voluptate ex mollit. Irure minim laboris do culpa do consectetur. Duis eiusmod voluptate in amet tempor dolore non eiusmod consectetur voluptate irure eu.Ex enim reprehenderit irure in occaecat irure ad velit esse nulla officia Lorem cillum. Veniam exercitation voluptate laboris sit officia cupidatat non dolor dolore mollit deserunt ea aute. Nulla dolore velit id cillum sit cupidatat et deserunt cupidatat laborum voluptate ex mollit. Irure minim laboris do culpa do consectetur. Duis eiusmod voluptate in amet tempor dolore non eiusmod consectetur voluptate irure eu.Ex enim reprehenderit irure in occaecat irure ad velit esse nulla officia Lorem cillum. Veniam exercitation voluptate laboris sit officia cupidatat non dolor dolore mollit deserunt ea aute. Nulla dolore velit id cillum sit cupidatat et deserunt cupidatat laborum voluptate ex mollit. Irure minim laboris do culpa do consectetur. Duis eiusmod voluptate in amet tempor dolore non eiusmod consectetur voluptate irure eu.Ex enim reprehenderit irure in occaecat irure ad velit esse nulla officia Lorem cillum. Veniam exercitation voluptate laboris sit officia cupidatat non dolor dolore mollit deserunt ea aute. Nulla dolore velit id cillum sit cupidatat et deserunt cupidatat laborum voluptate ex mollit. Irure minim laboris do culpa do consectetur. Duis eiusmod voluptate in amet tempor dolore non eiusmod consectetur voluptate irure eu.Ex enim reprehenderit irure in occaecat irure ad velit esse nulla officia Lorem cillum. Veniam exercitation voluptate laboris sit officia cupidatat non dolor dolore mollit deserunt ea aute. Nulla dolore velit id cillum sit cupidatat et deserunt cupidatat laborum voluptate ex mollit. Irure minim laboris do culpa do consectetur. Duis eiusmod voluptate in amet tempor dolore non eiusmod consectetur voluptate irure eu.Ex enim reprehenderit irure in occaecat irure ad velit esse nulla officia Lorem cillum. Veniam exercitation voluptate laboris sit officia cupidatat non dolor dolore mollit deserunt ea aute. Nulla dolore velit id cillum sit cupidatat et deserunt cupidatat laborum voluptate ex mollit. Irure minim laboris do culpa do consectetur. Duis eiusmod voluptate in amet tempor dolore non eiusmod consectetur voluptate irure eu.Ex enim reprehenderit irure in occaecat irure ad velit esse nulla officia Lorem cillum. Veniam exercitation voluptate laboris sit officia cupidatat non dolor dolore mollit deserunt ea aute. Nulla dolore velit id cillum sit cupidatat et deserunt cupidatat laborum voluptate ex mollit. Irure minim laboris do culpa do consectetur. Duis eiusmod voluptate in amet tempor dolore non eiusmod consectetur voluptate irure eu.Ex enim reprehenderit irure in occaecat irure ad velit esse nulla officia Lorem cillum. Veniam exercitation voluptate laboris sit officia cupidatat non dolor dolore mollit deserunt ea aute. Nulla dolore velit id cillum sit cupidatat et deserunt cupidatat laborum voluptate ex mollit. Irure minim laboris do culpa do consectetur. Duis eiusmod voluptate in amet tempor dolore non eiusmod consectetur voluptate irure eu.Ex enim reprehenderit irure in occaecat irure ad velit esse nulla officia Lorem cillum. Veniam exercitation voluptate laboris sit officia cupidatat non dolor dolore mollit deserunt ea aute. Nulla dolore velit id cillum sit cupidatat et deserunt cupidatat laborum voluptate ex mollit. Irure minim laboris do culpa do consectetur. Duis eiusmod voluptate in amet tempor dolore non eiusmod consectetur voluptate irure eu.Ex enim reprehenderit irure in occaecat irure ad velit esse nulla officia Lorem cillum. Veniam exercitation voluptate laboris sit officia cupidatat non dolor dolore mollit deserunt ea aute. Nulla dolore velit id cillum sit cupidatat et deserunt cupidatat laborum voluptate ex mollit. Irure minim laboris do culpa do consectetur. Duis eiusmod voluptate in amet tempor dolore non eiusmod consectetur voluptate irure eu.Ex enim reprehenderit irure in occaecat irure ad velit esse nulla officia Lorem cillum. Veniam exercitation voluptate laboris sit officia cupidatat non dolor dolore mollit deserunt ea aute. Nulla dolore velit id cillum sit cupidatat et deserunt cupidatat laborum voluptate ex mollit. Irure minim laboris do culpa do consectetur. Duis eiusmod voluptate in amet tempor dolore non eiusmod consectetur voluptate irure eu.Ex enim reprehenderit irure in occaecat irure ad velit esse nulla officia Lorem cillum. Veniam exercitation voluptate laboris sit officia cupidatat non dolor dolore mollit deserunt ea aute. Nulla dolore velit id cillum sit cupidatat et deserunt cupidatat laborum voluptate ex mollit. Irure minim laboris do culpa do consectetur. Duis eiusmod voluptate in amet tempor dolore non eiusmod consectetur voluptate irure eu.
          </div>
        
        </div>
      </div>
    )
  }

export default Quiet



// const Quiet_slogan = 
// Id === "Quiet" & langId === "en" ? "Quiet EN" : (Id === "Quiet" && langId === "ru" ? "Quiet Ru" : "Quiet En")
// ?
// (Id === "Miller" & langId === "en" ? "Miller EN" : (Id === "Miller" && langId === "ru" ? "Miller Ru" : "Miller En"))
// :
// (Id === "Snake" & langId === "en" ? "Snake EN" : (Id === "Snake" && langId === "ru" ? "Snake Ru" : "Snake En"))
// ||  
// Id === "Miller" & langId === "en" ? "Miller EN" : (langId === "ru" ? "Miller Ru" : "Miller En")
// const Miller_slogan =  text && Id === "Miller" & langId === "en" ? "Miller EN" : "Miller RU"