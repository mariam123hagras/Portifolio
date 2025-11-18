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
        <section id="skills" >
            <div className="skill-section">
                <div className="skills-container ">
                    
                    <h5>You Can See My Skills Here</h5>
                    <Carousel className="custom-carousel" responsive={responsive} infinite={true} arrows={true}>  
                        {/* Frontend Technologies */}
                        <SkillProgressBar percentage={80} label={"Backend Development"} />
                        <SkillProgressBar percentage={90} label={"Frontend Development"} />

                        <SkillProgressBar percentage={95} label={"HTML5"} />
                        <SkillProgressBar percentage={90} label={"CSS3"} />
                        <SkillProgressBar percentage={90} label={"Responsive Design"} />
                        <SkillProgressBar percentage={85} label={"JavaScript (ES6+)"} />
                        <SkillProgressBar percentage={80} label={"React JS"} />
                        <SkillProgressBar percentage={80} label={"Angular"} />
                        <SkillProgressBar percentage={80} label={"TypeScript"} />
                        <SkillProgressBar percentage={90} label={"Bootstrap"} />
                        <SkillProgressBar percentage={80} label={"Tailwind CSS"} />
                        
                        {/* Frontend Libraries & Tools */}
                        <SkillProgressBar percentage={90} label={"Vite"} />
                        <SkillProgressBar percentage={85} label={"Axios"} />
                        <SkillProgressBar percentage={90} label={"Zustand"} />
                        <SkillProgressBar percentage={95} label={"Framer Motion"} />
                        <SkillProgressBar percentage={85} label={"React Router DOM"} />
                        <SkillProgressBar percentage={95} label={"React Hot Toast"} />
                        <SkillProgressBar percentage={95} label={"Lottie React"} />
                        <SkillProgressBar percentage={95} label={"React Circular Progressbar"} />
                        <SkillProgressBar percentage={95} label={"Font Awesome"} />
                        <SkillProgressBar percentage={95} label={"Formspree React"} />
                        
                        
                        {/* Backend Technologies */}
                        
                        <SkillProgressBar percentage={85} label={"Node.js"} />
                        <SkillProgressBar percentage={80} label={"Express.js"} />
                        <SkillProgressBar percentage={85} label={"MongoDB"} />
                        <SkillProgressBar percentage={90} label={"Mongoose"} />
                        <SkillProgressBar percentage={85} label={"JWT"} />
                        <SkillProgressBar percentage={90} label={"Nodemailer"} />
                        
                        {/* Backend Tools & Libraries */}
                        <SkillProgressBar percentage={80} label={"Cloudinary"} />
                        <SkillProgressBar percentage={85} label={"dotenv"} />
                        <SkillProgressBar percentage={80} label={"CORS"} />
                        <SkillProgressBar percentage={75} label={"Multer"} />
                        <SkillProgressBar percentage={70} label={"Svix"} />
                        <SkillProgressBar percentage={95} label={"Nodemon"} />
                        <SkillProgressBar percentage={85} label={"Clerk"} />
                        
                        {/* General Tools */}
                        <SkillProgressBar percentage={85} label={"Version Control (Git/GitHub)"} />
                        <SkillProgressBar percentage={90} label={"Vercel"} />
                    </Carousel>
                </div>
            </div>
        </section>
    );
}

export default React.memo(Skills);