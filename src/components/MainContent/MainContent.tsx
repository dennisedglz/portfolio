import React, { FC } from 'react';
import './MainContent.css';
import Menu from '../Menu/Menu';
import Section, { SectionContent } from '../Section/Section';

interface MainContentProps {}

const MainContent: FC<MainContentProps> = () => {
  const sections: Array<SectionContent> = [
    {
      id: 'summary',
      title: 'Summary', 
      text: `I'm a detail-oriented and result-driven software developer with comprehensive experience in front and backend
      development, unit testing, application creation, scheduling, creating, and maintaining timeframes, coding,
      enhancing projects, establishing pattern libraries, and adapting web systems, ensuring accessibility for the whole
      system. Demonstrated success leading projects and utilizing project management tools and processes from project
      initiation through system implementation. Spearheads continuous improvement through reengineering and process
      improvement to drive quality, efficiency, and risk management.`
    },
    {
      id: 'skills',
      title: 'Skills',
      text: `Angular, Ionic, React, JavaScript, Typescript, HTML, CSS, Sass, PHP, WordPress, jQuery, Jasmine, .NET, React Native,
      MySQL, Git, Jira, Kanban, VS Code, Scrum`
    },
    {
      id: 'experience',
      title: 'Experience',
      list: [
        {
          title: 'Kin + Carta',
          subtitle: '2022 - 2023',
          text: `Served as delivery analyst engineer working in creation and maintenance of modules and components for mobile
          and web application for US Foods, using Ionic and Angular.`,
        },
        {
          title: 'Nerdino',
          subtitle: '2021 - 2022',
          text: `Served as delivery analyst engineer working in creation and maintenance of modules and components for mobile
          and web application for US Foods, using Ionic and Angular.`,
        },
        {
          title: 'Softtek',
          subtitle: '2018 - 2021',
          text: `Served as delivery analyst engineer working in creation and maintenance of modules and components for mobile
          and web application for US Foods, using Ionic and Angular.`,
        }, 
        {
          title: 'Teko Estudio',
          subtitle: '2015 - 2018',
          text: `Served as delivery analyst engineer working in creation and maintenance of modules and components for mobile
          and web application for US Foods, using Ionic and Angular.`,
        },
      ]
    },
    {
      id: 'contact',
      title: 'Contact Me',
      text: `Do not hesitate to contact me`,
      list: [
        {
          text: 'LinkedIn',
          link: `https://www.linkedin.com/in/dennise-dglz/`
        },
        {
          text: 'Email',
          link: `dennise.dglz@gmail.com`
        }
      ]
    }
  ]

  return (
    <body className='main-content'>
      <Menu />
      <section className='sections'>
        {sections.map((sect) => (
          <Section classes={`${sect.id}-section`} content={sect} />
        ))}  
      </section>
    </body>
  );
};
export default MainContent;
