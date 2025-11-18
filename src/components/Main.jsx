import Typewriter from './Typewriter';
import React from 'react';
import Lottie from 'lottie-react';
import imgAnim from '../assets/Animations/Analytics Character Animation.json';

const Main = () => {
    return (
        <main id='home'>
            <div className='main-section container-fluid'>
                <div className='row row-gap-5'>
                    <div className='type-writer-container col-12 col-lg-7'>
                        <div className='welcome'>
                            Welcome All To My Portfolio
                        </div>
                        <p className='my-type-writer'>
                            Hi! I'm Mariam Ehab Hagras,
                            <Typewriter  
                                texts={[
                                    "Full Stack Web Developer",
                                    "FrontEnd Developer", 
                                    "React JS Developer",
                                    "Angular Developer", 
                                    "BackEnd Developer (Node JS)",
                                    "MERN Stack Developer"
                                ]}
                                speed={200}
                                deleteSpeed={100}
                                delay={1000}
                            />
                        </p>
                        <p className='sup-paragraph'>
                            Hello Everyone! I have 1 year of experience in web development
                        </p>
                        <a className='main-connect' href="#connect" rel="noopener noreferrer">
                            <span>Let's connect</span>
                            <svg className='connect-arrow-icon' xmlns="http://www.w3.org/2000/svg" viewBox='0 0 16 16' width="30" height="30" fill='currentColor'>
                                <path fillRule='evenodd' d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
                            </svg>
                            {/* https://heroicons.com/ this where you can get svg */}
                        </a>
                    </div>
                    <div className='main-img col-12 col-lg-5'>
                        <Lottie style={{height: '100%'}} loop={true} animationData={imgAnim} />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default React.memo(Main);