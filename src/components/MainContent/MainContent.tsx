import React, { FC } from 'react';
import './MainContent.css';
import Menu from '../Menu/Menu';
import Section, { SectionContent } from '../Section/Section';
import { FaEnvelope, FaLinkedinIn } from "react-icons/fa6";


interface MainContentProps {}

const MainContent: FC<MainContentProps> = () => {
  const sections: Array<SectionContent> = [
    /*{
      id: 'summary',
      title: 'About Me', 
      text: `I'm a detail-oriented and result-driven software developer with comprehensive experience in front and backend
      development, unit testing, application creation, scheduling, creating, and maintaining timeframes, coding,
      enhancing projects, establishing pattern libraries, and adapting web systems, ensuring accessibility for the whole
      system. Demonstrated success leading projects and utilizing project management tools and processes from project
      initiation through system implementation. Spearheads continuous improvement through reengineering and process
      improvement to drive quality, efficiency, and risk management.`
    },
    {
      id: 'about-me',
      title: 'About Me',
      text: `I'm Angelica Díaz, a passionate frontend developer with a knack for crafting immersive digital experiences. With a strong foundation in both frontend and backend development. Specializing in mobile app development using hybrid platforms and web development, I thrive on creating dynamic, user-friendly interfaces that leave a lasting impression. Responsive design and accessibility are at the core of everything I do. I believe that every user, regardless of device or ability, deserves a smooth and intuitive experience. That's why I meticulously craft each development to be 100% responsive and accessible, adhering to the latest WCAG guidelines.
      Whether you're a startup looking to make a splash in the mobile app market or an established business seeking to enhance your online presence, I'm here to bring your vision to life. Let's collaborate and create something extraordinary together!`
    },*/
    {
      id: 'about-me',
      title: 'About Me',
      text: `I'm Angelica Díaz, a passionate frontend developer with a knack for crafting immersive digital experiences. With a strong foundation in both frontend and backend development. Specializing in mobile app development using hybrid platforms and web development, I thrive on creating dynamic, user-friendly interfaces that leave a lasting impression. 
      Responsive design and accessibility are at the core of everything I do. I believe that every user, regardless of device or ability, deserves a smooth and intuitive experience. That's why I meticulously craft each development to be 100% responsive and accessible, adhering to the latest WCAG guidelines. 
      Whether you're a startup looking to make a splash in the mobile app market or an established business seeking to enhance your online presence, I'm here to bring your vision to life. Let's collaborate and create something extraordinary together!`
    },
    {
      id: 'skills',
      title: 'Skills',
      list: [
        {
          title: 'Angular'
        }, {
          title: 'Ionic'
        }, {
          title: 'React'
        }, {
          title: 'Javascript'
        }, {
          title: 'Typescript'
        }, {
          title: 'HTML'
        }, {
          title: 'CSS'
        }, {
          title: 'Sass'
        }, {
          title: 'PHP'
        }, {
          title: 'WordPress'
        }, {
          title: 'jQuery'
        }, {
          title: 'Jasmine'
        }, {
          title: '.NET'
        }, {
          title: 'React Native'
        }, {
          title: 'WCAG Accessibility'
        }, {
          title: 'MySQL'
        }, {
          title: 'Git'
        }, {
          title: 'Jira'
        }, {
          title: 'Scrum'
        }, {
          title: 'Kanban'
        }, {
          title: 'Unit Testing'
        },
      ],
    },
    {
      id: 'experience',
      title: 'Experience',
      list: [
        {
          title: 'Kin + Carta',
          subtitle: '2022 - 2023',
          text: `As an analyst engineer, I spearheaded the development of new sections for both the mobile and web applications, playing a crucial role in their successful implementation. Additionally, I improved rules to streamline the UAT process.`,
        },
        {
          title: 'Nerdino',
          subtitle: '2021 - 2022',
          text: `At Offerpad, I created a pattern library to use between several projects. It has facilitated future development, ensured consistency, and streamlined the design process.`,
        },
        {
          title: 'Softtek',
          subtitle: '2018 - 2021',
          text: `I managed the review and implementation of accessibility features in the enrollment application for Purdue Global, ensuring compliance with the W3C Accessibility Guidelines. In addition, I played an active role in improving the application and migrating it to a CMS platform, making it more manageable and scalable.`,
        }, 
        {
          title: 'Teko Estudio',
          subtitle: '2015 - 2018',
          /*text: `As a Frontend lead I developed a ticket check-in mobile application on my own and also participated in creating a content management system (CMS) from scratch for a ticketing web application. Additionally, I created a manageable and customizable poll system, as well as several websites and themes for WordPress. As a full-stack developer, I have experience in developing both web and mobile applications and websites.`,*/
          text: `As a frontend lead and full-stack developer, I have extensive experience in developing both web and mobile applications and websites. I independently developed a ticket check-in mobile application, participated in the creation of a content management system (CMS) from scratch for a ticketing web application, and also created a manageable and customizable poll system, as well as several websites and themes for WordPress.`
        },
        {
          title: 'Freelance',
          subtitle: '2015 - Today',
          text: `As a Frontend and Full-stack developer, I've had the opportunity to work on various projects. Some of them include:

          - Developing a mobile app for students to share rides to school, where they can request a ride from other students who'll pick them up from their location and drop them off at school.
          - Creating a mobile app for survey management.
          - Designing and developing an on-demand service platform that connects users with local cleaning professionals. 
          - Developing websites with CMS for the Systems Department at the University in Aguascalientes and the youth institute in Aguascalientes.
          - Designing and developing a website with CMS for personalized wedding invitations. The website allows couples to design and personalize their invitations and includes a guest management system for managing RSVPs.`
        },
      ]
    }, 
  ];

  return (
    <body>
      <div className='main-content'>
        <Menu />
        <section className='sections'>
          {sections.map((sect) => (
            <Section id={sect.id} content={sect} key={sect.id} />
          ))}  
        </section>
      </div>
      
      <section className='last-section'>
        <div className="section contact-section" id='contact-me'>
          <h3 className="section-title">Let's Connect</h3>
          <p>Do not hesitate to contact me</p>
          <ul className="links">
            <li className="item">
              <a className="link" href="https://www.linkedin.com/in/dennise-dglz/" target="_blank"> 
                <FaLinkedinIn />
              </a>
            </li>
            <li className="item">
              
              <a className="link" href="mailto:dennise.dglz@gmail.com" target="_blank"> 
                <FaEnvelope />
              </a>
            </li>
            </ul>
            </div>
      </section>
    </body>
  );
};
export default MainContent;
