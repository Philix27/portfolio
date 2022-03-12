import React from 'react';
import Image from 'next/image';
import styles from '../../comps/HomeComps/projects/details.module.css'
import { projects } from '../../comps/HomeComps/projects/constants';
import { SectionText } from '../../styles';
import {   Img } from '../../comps/HomeComps/projects/projectsStyles';

export default function Mim() {
   
    const { title, image, description, visit} = projects[3];
    return (
        <div className={styles.wrapper}>
                <div>
                <h1 className='sectionTitle'>{title}</h1>
                </div>
                <Image
                layout="responsive"
                objectFit="cover"
                height={250}
                width={1040}
                src={image}
                alt={title}
            />  
            {/* <div className={styles.imgBox}>
                <Img src={image} />  
            </div>   */}
               
            <div className={styles.description}>
                <div className='sectionText'>
                    <a href={visit} rel="noreferrer">
                        <li>
                            Visit Website
                        </li>
                    </a>
                </div>
                <div className='sectionText'>
                    {description}
                </div>
                
            </div>        
        </div>
            
    );
}





