  
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Nav from "./Navigation/Navigation"


const About = () => {
  let line1 = useRef(null);
  let line2 = useRef(null);
  useEffect(() => {
    gsap.from([line1, line2], 0.8, {
      delay: 0.8,
      ease: "power3.out",
      y: 64,
      stagger: {
        amount: 0.15
      }
    });
  }, [line1, line2]);

return (
    <div>
    <Nav />
    <h1 class='page-title'>
      <div className='line-wrap'>
        <div ref={el => (line1 = el)} className='line'>
          Hello I'm JUSTMASTER
        </div>
      </div>
      <div className='line-wrap'>
        <div ref={el => (line2 = el)} className='line'>
          AND I HAVE A BIG PP
        </div>
      </div>
    </h1>
    <div className='inner'>
      <p className='other'>
        A character his cache I succeed employed entire been it find the more
        and may the to his their five and towards in lay rippedup, what and so
        endure before for her been decades the few to than would was concept.
      </p>
    </div>
    </div>
  );
};

export default About;
