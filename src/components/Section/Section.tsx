import React, { FC } from 'react';
import './Section.css';

export interface ListContent {
   title?: string,
   subtitle?: string,
   text?: string,
   link?: string
 }
 
 export interface SectionContent {
   id: string,
   title: string,
   text?: string,
   list?: Array<ListContent>
 }

interface SectionProps {
   classes: string,
   content?: SectionContent,
   children?: React.ReactNode,
}

const Section: FC<SectionProps> = ({classes, content, children}) => (
      <div className={`section ${classes}`}> 
         {content?.title && <h3 className='section-title'>{content.title}</h3> } 
         {content?.text && <p>{content.text}</p> }
            <ul className='experience-list'> 
            { content?.list && content.list.map((item) => (
                  <li className='item'>
                     <div className='company-date'>
                     {
                        item.title && <h4>{item.title}</h4>
                     }
                     {
                        item.subtitle && <p>{item.subtitle}</p>
                     }

                        
                     </div>

                     {
                        item.text && !item.link && <p>{item.text}</p>
                     }

                     {
                        item.link && <a className='link' href={`${item.link}`} target='_blank'> {item.text} </a>
                     }
                  </li>
               ))
            }
            </ul>
      </div>
      
);

export default Section;
