import React from 'react'
import { SRLWrapper } from 'simple-react-lightbox'
import Nav from "../Navigation/Navigation";
import {useParams} from "react-router-dom"
import { useState, useEffect } from 'react';




const Gallery = () => {

  // Fetching Pictures based on ID (Character Name)


  const { id } = useParams();

  const [pics, setPics] = useState();


  const getData = async () => {
    const res = await fetch('https://api.jsonbin.io/b/5ed797da7741ef56a567395c');
    const resData = await res.json();
    setPics(resData);
}


  useEffect(() => {
    const idcheck = () => {
      id === "Quiet" &&  getData()
    }
      idcheck()
    }, []);

console.log(pics)
console.log(pics && pics[0]['background']) 
    
  return (
    <div>
    <Nav />
      <SRLWrapper>
                <div className="gallerybuttoncontainer">
                  <a href="/home/en" className='gallerycharacterbutton'>›</a>
                  <p className='reftext'>Next Character</p>
                </div>
                <div className="grid">

                    <img src= {pics && pics[0]['background']} ></img>
                    <img src="https://picsum.photos/200/300" alt=""></img>
                    <img src="https://picsum.photos/200/300"></img>
                    <img src="https://picsum.photos/200/300"></img>
                    <img src="https://picsum.photos/200/300"></img>
                    <img src="https://picsum.photos/200/300"></img>
                    <img src="https://picsum.photos/200/300"></img>
                    <img src="https://picsum.photos/200/300"></img>
                    <img src="https://picsum.photos/200/300"></img>
                    <img src="https://picsum.photos/200/300"></img>
                    <img src="https://picsum.photos/200/300"></img>
                    <img src="https://picsum.photos/200/300"></img>
                    <img src="https://picsum.photos/200/300"></img>
                    <img src="https://picsum.photos/200/300"></img>
                    <img src="https://picsum.photos/200/300"></img>
                    <img src="https://picsum.photos/200/300"></img>
                    <img src="https://picsum.photos/200/300"></img>


                </div>
       </SRLWrapper>
    </div>
  )
}

export default Gallery
