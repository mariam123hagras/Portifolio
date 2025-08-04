import SkillProgressBar from './skillProgressbar';
import Carousel from 'react-multi-carousel';
import "react-multi-carousel/lib/styles.css";



import React from 'react';

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  
  },
  tablet: {
    breakpoint: { max: 1024, min: 751 },
    items: 2,
  
  },
  mobile: {
    breakpoint: { max: 750, min: 0 },
    items: 1,
   
  }
};


const Skills = () => {
    return (
        <section id="skills">
            <div className="skill-section">
                <div className="skills-container">
                    <h2 className='Section-title'>Skills</h2>
                    <h5>You Can See My Skills Here</h5>
                    <Carousel className="custom-carousel" responsive={responsive} infinite={true} arrows={true }   >  

                        <SkillProgressBar percentage={90} label={"FrontEnd Development"}   />
                        <SkillProgressBar percentage={95} label={"HTML5"} />
                        <SkillProgressBar percentage={90} label={"CSS3"} />
                        <SkillProgressBar percentage={90} label={"Responsive Design"} />
                        <SkillProgressBar percentage={85} label={"JavaScript (ES6+)"} />
                        <SkillProgressBar percentage={80} label={"React JS"} />
                        <SkillProgressBar percentage={90} label={"Bootstrap"} />
                        <SkillProgressBar percentage={85} label={"Version Control (Git/GitHub)"} />
                        <SkillProgressBar percentage={80} label={"Cross-Browser Compatibility"} />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

export default React.memo(Skills);