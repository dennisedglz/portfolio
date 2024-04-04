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
   id: string,
   content?: SectionContent,
   children?: React.ReactNode,
}

const Section: FC<SectionProps> = ({id, content, children}) => (
      <div className={`section`} id={`${id}`}> 
         {content?.title && <h3 className='section-title'>{content.title}</h3> } 
         <div>
            {content?.text && content.text.split("\n").map((t, key) => {
               return <p key={key}>{t}</p>;
            })}
         </div>
            <ul className='list'> 
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
                        //item.text && !item.link && <p>{item.text}</p>
                     }
                     <div>
                        {item.text && !item.link && item.text.split("\n").map((t, key) => {
                           return <p key={key}>{t}</p>;
                        })}
                     </div>

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
