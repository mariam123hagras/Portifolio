import React, { useState } from 'react';
import img1 from '../assets/images/hotel-booking.png';
import img2 from '../assets/images/movie.png';
import img3 from '../assets/images/auth.png';
import img4 from '../assets/images/iti.png';
import img5 from '../assets/images/project-5.jpg';
import img6 from '../assets/images/filteration.png';
import img7 from '../assets/images/frontend.png';
import img8 from '../assets/images/backend.png';
import img9 from '../assets/images/full stack.png';
import img10 from '../assets/images/alx.jpg';
import img11 from '../assets/images/backendcerti.png';
import img12 from '../assets/images/frontcerti.png';
import img13 from '../assets/images/softskills.jpg';
import img14 from '../assets/images/iti angular.jpg';




const projects = [
    {
        id: 1,
        imgUrl: img1,
        title: "Hotel Booking",
        text: "Full Stack Project With MERN",
        link: "https://github.com/mariam123hagras/Hotel-Booking"
    },
    {
        id: 2,
        imgUrl: img2,
        title: "Movie App",
        text: "React Project With TMDB API",
        link: "https://github.com/mariam123hagras/movies"
    },
    {
        id: 3,
        imgUrl: img3,
        title: "MERN Authentication",
        text: "Full Stack Authentication With MERN",
        link: "https://github.com/mariam123hagras/mern-auth"
    },
    {
        id: 4,
        imgUrl: img4,
        title: "ITI Graduation Project",
        text: "Angular Project",
        link: "https://github.com/mariam123hagras/Angular1",
    },
    {
        id: 5,
        imgUrl: img5,
        title: "My Portfolio",
        text: "Portfolio with React",
        link: "https://github.com/mariam123hagras/Portifolio"
    },
    {
        id: 6,
        imgUrl: img6,
        title: "Watch Store Filtration",
        text: "React Project With Zustand",
        link: "https://github.com/mariam123hagras/Zustand-Projects/tree/mary/Watch%20Store"
    },
];

const cvItems = [
    {
        id: 1,
       imgUrl: img7,
        title: "Backend Developer",
        text: "Express.js & Node.js",
        link: "https://drive.google.com/file/d/1q6_xEBegfbiutW0Y4zrmxiWBqE1NN2MJ/view?usp=drive_link"
    },
    {
        id: 2,
       imgUrl: img8,
        title: "Frontend Developer",
        text: "React.js & Angular", 
        link: "https://drive.google.com/file/d/1fy-JPMxxfutTLnlVPBUKr33VCi9gtZiB/view?usp=drive_link"
    },
    {
        id: 3,
        imgUrl: img9,
        title: "Full Stack Developer",
        text: "MERN Stack",
        link: "https://drive.google.com/file/d/1AjyX03-eZRBqLKsSa3DkF3dU4yZX67Ic/view?usp=drive_link"
    }
];

const certificates = [
    {
        id: 1,
         imgUrl: img10,
        title: "AI Career Essential Certificate",
         text: "Ai Tools",
        
        link: "https://drive.google.com/file/d/1H8pA0drXQ3zyxaWnLDs835Cbu_i8Nxy7/view?usp=sharing"
    },
    {
        id: 2,
        imgUrl: img11,
        title: "Backend Certificate",
        text: "Node.js & Express.js",
        link: "https://drive.google.com/file/d/1w0LIfYMLDT36eGnOt3-dvxahYT8-vZBv/view?usp=sharing"
    },
    {
        id: 3,
        imgUrl: img12,
        title: "Frontend Certificate",
        text: "React.Js",
        link: "https://drive.google.com/file/d/1asgQl1k6upHkY0QtFTHY_FZ_ykABN1Gu/view?usp=sharing"
    },
    {
        id: 4,
        imgUrl: img14,
        title: "Frontend Certificate",
        text: "Angular Framework",
        link: "https://drive.google.com/file/d/1Ke41xuieHSXvqMCz9m5mQlcWaglItv90/view?usp=sharing"
    },
    {
        id: 5,
        imgUrl: img13,
        title: "Soft Skills Certificate",
        text: "Personal Pranding & Communication",
        link: "https://drive.google.com/file/d/1Y50Xd2tZ8wQDPZUkH9YQbTPApx0QBOHh/view?usp=sharing"
    },

];

// Reusable Card Component
const ProjectCard = ({ item }) => {
    const handleCardClick = (link) => {
        window.open(link, '_blank', 'noopener noreferrer');
    };

    return (
        <div className='card-spacing col-11 col-md-6 col-lg-4 d-flex'>
            <div 
                className='project-card card text-bg-dark w-100 h-100'
                onClick={() => handleCardClick(item.link)}
                style={{ cursor: 'pointer' }}
            >
                <img 
                    src={item.imgUrl} 
                    className="card-img h-100 object-fit-cover" 
                    alt={item.title} 
                />
                <div className='card-img-overlay d-flex flex-column justify-content-end'>
                    <h3 className='card-title'>{item.title}</h3>
                    <i className='card-text'>{item.text}</i>
                </div>
            </div>
        </div>
    );
};

// Tab Components
const Tab1 = () => {
    return (
        <div className='project-cards container w-100'>
            <div className='row justify-content-center row-gap-4 w-100 mx-auto'>
                {projects.map((item) => (
                    <ProjectCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

const Tab2 = () => {
    return (
        <div className='project-cards container w-100'>
            <div className='row justify-content-center row-gap-4 w-100 mx-auto'>
                {cvItems.map((item) => (
                    <ProjectCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

const Tab3 = () => {
    return (
        <div className='project-cards container w-100'>
            <div className='row justify-content-center row-gap-4 w-100 mx-auto'>
                {certificates.map((item) => (
                    <ProjectCard key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

const Projects = () => {
    const [activeTab, setActiveTab] = useState('tab1');
    
    const activeClass = (tabName) => {
        return activeTab === tabName ? "active" : "";
    };
    
    return (
        <section id="projects">
            <div className='projects-section'>
                <h2 className='section-title text-light mb-3 fs-1'>My Portfolio</h2>
                <p className='sup-paragraph w-75 mb-5'>
                    Explore my projects, CV, and certifications
                </p>
                <div style={{ padding: "0 8.5%" }} className='container projects-tab'>
                    <ul className='projects-nav row'>
                        <li className={`${activeClass("tab1")} col-4`}>
                            <button onClick={() => setActiveTab("tab1")}>Important Projects</button>
                        </li>
                        <li className={`${activeClass('tab2')} col-4`}>
                            <button onClick={() => setActiveTab("tab2")}>CV & Resume</button>
                        </li>
                        <li className={`${activeClass("tab3")} col-4`}>
                            <button onClick={() => setActiveTab("tab3")}>Certificates</button>
                        </li>
                    </ul>
                </div>
                <div className='w-100 mt-4'>
                    {activeTab === 'tab1' && <Tab1 />}
                    {activeTab === 'tab2' && <Tab2 />}
                    {activeTab === 'tab3' && <Tab3 />}
                </div>
            </div>
        </section>
    );
};

export default React.memo(Projects);