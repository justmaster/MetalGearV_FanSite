import React, { useContext }  from "react"
import styled from 'styled-components'
import { Database } from '../context/database'
import Nav from "./Navigation/Navigation"


const Primary = styled.div`
    background: rgba(255, 255, 255, 1);
`


const FlexWrap = styled.div`
  display: grid;
  grid-template-rows: repeat(5, 300px);
  grid-template-columns: repeat(4, 200px);
  justify-content: space-evenly;
  align-content: center;
  height: 100%;
  width:100%;
  border: 1px;
  border-color:black;
  @media (max-width: 780px) {
    display:grid;
    grid-template-rows: repeat(15, 300px);
    grid-template-columns: repeat(1, 200px);

  }
`

// CHARACTER CARD STYLES

const H5 = styled.section`
  margin:0px;
  font-size:1.1em;
  font-weight:400;
  margin: 3%;
`

const P1 = styled.section`
  font-size:10px;
  padding: 0px;
  position: center;
  text-align: center;
  display:block;
`

const ChCard = styled.section`  
  height:5vh;
`

const CardImg = styled.section`
 /* class="property-image" */
  height:10em;
  width:14em;
  padding:1em 2em;
  position:Absolute;
  top:0px;
  -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  /* background-image: ${props => props.background}; */
  background: url(${props => props.background})  no-repeat;
  /* background: url(${props => props.background}) center center no-repeat; */
  /* url('https://i.pinimg.com/originals/1b/a6/f7/1ba6f7d941a1e49b3b6a1aa742f862c4.jpg'); */
  background-size:cover;
  background-repeat:no-repeat;
`


const Des = styled.section`
 /* class="property-description" */
  background-color: #FAFAFC;
  height:65px;
  width:14em;
  position:absolute;
  /* position:bottom; */
  bottom:0em;
  -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  padding: 0em 0em;
  text-align:right;
  vertical-align: bottom;
`

const ImgTitle = styled.section` 
 /* class="property-image-title" */
    text-align:center;
    position:Relative;
    top:30%;
    opacity:0;
    transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
    color:black;
    font-size:1.2em;
`

const Icons = styled.section`
 /* class="property-social-icons" */
  width:0.5em;
  height:0.5em;
  background-color:black;
  position:absolute;
  bottom:1em;
  left:1em;
  -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
`

const Inside = styled.section`
 /* class="property-card" */
  height:18em;
  width:14em;
  display:-webkit-box;
  display:-ms-flexbox;
  display:flex;
  -webkit-box-orient:vertical;
  -webkit-box-direction:normal;
  -ms-flex-direction:column;
  flex-direction:column;
  position:relative;
  -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
  border-radius:16px;
  overflow:hidden;
  /* -webkit-box-shadow:  15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff;
  box-shadow:  15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff; */
  &:hover {
    ${Des} {
        height:0em;
        padding:0px 1em;
    }
    ${CardImg} {
        height:18em;
    }
    ${Icons} {
        height:0em;
        padding:0px 1em;
    }
    ${H5} {
        color: transparent;
    }
    ${P1} {
        color: transparent;
    }
  }
`
// CHARCTER CARD ENDS

const Characters = () => {
    const { characters } = useContext(Database);
    console.log(characters)
    console.log(characters && characters[0]['background'])
    return (
    <Primary>
        <Nav />
        <FlexWrap>
                <ChCard>
                    <Inside>
                        <a href="/characters/en/Quiet">
                            <CardImg background = {characters && characters[0]['background']} >
                                <ImgTitle>
                                    {/* <h5> {characters && characters[0]['first_name']}</h5> */}
                                </ImgTitle>
                            </CardImg>
                        </a>
                            <Des>
                                <H5>{characters && characters[0]['first_name']}</H5>
                                <P1>A woman deprived of her words</P1>
                            </Des>
                        <a href="google.com">
                            <Icons>
                            </Icons>
                        </a> 
                    </Inside>
                </ChCard>

                <ChCard>
                    <Inside>
                        <a href="/Quiet">
                            <CardImg background = {characters && characters[0]['background']} >
                                <ImgTitle>
                                    {/* <h5> {characters && characters[0]['first_name']}</h5> */}
                                </ImgTitle>
                            </CardImg>
                        </a>
                            <Des>
                                <H5>{characters && characters[0]['first_name']}</H5>
                                <P1>A woman deprived of her words</P1>
                            </Des>
                        <a href="google.com">
                            <Icons>
                            </Icons>
                        </a> 
                    </Inside>
                </ChCard>

                <ChCard>
                    <Inside>
                        <a href="/Quiet">
                            <CardImg background = {characters && characters[0]['background']} >
                                <ImgTitle>
                                    {/* <h5> {characters && characters[0]['first_name']}</h5> */}
                                </ImgTitle>
                            </CardImg>
                        </a>
                            <Des>
                                <H5>{characters && characters[0]['first_name']}</H5>
                                <P1>A woman deprived of her words</P1>
                            </Des>
                        <a href="google.com">
                            <Icons>
                            </Icons>
                        </a> 
                    </Inside>
                </ChCard>

                <ChCard>
                    <Inside>
                        <a href="/Quiet">
                            <CardImg background = {characters && characters[0]['background']} >
                                <ImgTitle>
                                    {/* <h5> {characters && characters[0]['first_name']}</h5> */}
                                </ImgTitle>
                            </CardImg>
                        </a>
                            <Des>
                                <H5>{characters && characters[0]['first_name']}</H5>
                                <P1>A woman deprived of her words</P1>
                            </Des>
                        <a href="google.com">
                            <Icons>
                            </Icons>
                        </a> 
                    </Inside>
                </ChCard>

                <ChCard>
                    <Inside>
                        <a href="/Quiet">
                            <CardImg background = {characters && characters[0]['background']} >
                                <ImgTitle>
                                    {/* <h5> {characters && characters[0]['first_name']}</h5> */}
                                </ImgTitle>
                            </CardImg>
                        </a>
                            <Des>
                                <H5>{characters && characters[0]['first_name']}</H5>
                                <P1>A woman deprived of her words</P1>
                            </Des>
                        <a href="google.com">
                            <Icons>
                            </Icons>
                        </a> 
                    </Inside>
                </ChCard>
        </FlexWrap>
    </Primary>
    )};
export default Characters; 

// styledComponents 
// Material UI
// Ocelot Url
// https://i.pinimg.com/originals/7c/9f/0e/7c9f0ebb25db95f60c5fba0ab16e05d4.jpg
// Big boss
// https://i.pinimg.com/564x/78/e2/5c/78e25c294e5a5195ab41a05d18c90f78.jpg



/* <chCard>
                    <Inside>
                        <a href="/Quiet">
                            <CardImg background="https://i.pinimg.com/originals/1b/a6/f7/1ba6f7d941a1e49b3b6a1aa742f862c4.jpg">
                                <ImgTitle>
                                    <h5>Quiet</h5>
                                </ImgTitle>
                            </CardImg>
                        </a>
                            <Des>
                                <H5>Quiet</H5>
                                <P1>A woman deprived of her words</P1>
                            </Des>
                        <a href="google.com">
                            <Icons>
                            </Icons>
                        </a> 
                    </Inside>
                </chCard> */




            //     const Primary = styled.div`
            //     background: rgba(255, 255, 255, 1);
            // `
            // const FlexWrap = styled.div`
            //   flex-flow: wrap;
            //   display: flex;
            //   justify-content: space-between;
            //   margin-left: 120px;
            //   margin-right: 120px;
            //   flex-direction: row;
            //   flex-wrap: row;
            // `
            
            
            // // CHARACTER CARD STYLES
            
            // const H5 = styled.section`
            //   margin:0px;
            //   font-size:1.3em;
            //   font-weight:400;
            //   margin: 7%;
            // `
            
            // const P1 = styled.section`
            //   font-size:12px;
            //   top: 15px;
            //   padding: 0px;
            // `
            
            // const ChCard = styled.section`  
            // /* class="center" */
            //   height:100vh;
            //   width:100%;
            //   display: flex;
            //   align-items: center;
            // `
            
            // const CardImg = styled.section`
            //  /* class="property-image" */
            //   height:10em;
            //   width:14em;
            //   padding:1em 2em;
            //   position:Absolute;
            //   top:0px;
            //   -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
            //   -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
            //   transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
            //   /* background-image: ${props => props.background}; */
            //   background: url(${props => props.background})  no-repeat;
            //   /* background: url(${props => props.background}) center center no-repeat; */
            //   /* url('https://i.pinimg.com/originals/1b/a6/f7/1ba6f7d941a1e49b3b6a1aa742f862c4.jpg'); */
            //   background-size:cover;
            //   background-repeat:no-repeat;
            // `
            
            // const Des = styled.section`
            //  /* class="property-description" */
            //   background-color: #FAFAFC;
            //   height:4em;
            //   width:14em;
            //   position:absolute;
            //   bottom:4em;
            //   -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
            //   -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
            //   transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
            //   padding: 0.5em 1em;
            //   text-align:center;
            // `
            
            // const ImgTitle = styled.section` 
            //  /* class="property-image-title" */
            //     text-align:center;
            //     position:Relative;
            //     top:30%;
            //     opacity:0;
            //     transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1) 0.2s;
            //     color:black;
            //     font-size:1.2em;
            // `
            
            // const Icons = styled.section`
            //  /* class="property-social-icons" */
            //   width:1em;
            //   height:1em;
            //   background-color:black;
            //   position:absolute;
            //   bottom:1em;
            //   left:1em;
            //   -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
            //   -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
            //   transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
            // `
            
            // const Inside = styled.section`
            //  /* class="property-card" */
            //   height:18em;
            //   width:14em;
            //   display:-webkit-box;
            //   display:-ms-flexbox;
            //   display:flex;
            //   -webkit-box-orient:vertical;
            //   -webkit-box-direction:normal;
            //   -ms-flex-direction:column;
            //   flex-direction:column;
            //   position:relative;
            //   -webkit-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
            //   -o-transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
            //   transition:all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
            //   border-radius:16px;
            //   overflow:hidden;
            //   /* -webkit-box-shadow:  15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff;
            //   box-shadow:  15px 15px 27px #e1e1e3, -15px -15px 27px #ffffff; */
            //   &:hover {
            //     ${Des} {
            //         height:0em;
            //         padding:0px 1em;
            //     }
            //     ${CardImg} {
            //         height:18em;
            //     }
            //     ${Icons} {
            //         height:0em;
            //         padding:0px 1em;
            //     }
            //     ${H5} {
            //         color: transparent;
            //     }
            //     ${P1} {
            //         color: transparent;
            //     }
            //   }
            // `