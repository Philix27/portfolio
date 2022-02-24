import React from 'react';
import Image from 'next/image';
import styles from '../../comps/HomeComps/projects/details.module.css'
import { projects } from '../../comps/HomeComps/projects/constants';
import { Section, SectionTitle, SectionText } from '../../styles';
import {   Img } from '../../comps/HomeComps/projects/projectsStyles';

export default function Mim() {
   
    const { title, image, description, visit} = projects[1];
    return (
        <div className={styles.wrapper}>
                <div>
                <SectionTitle >{title}</SectionTitle>
                </div>
                <Image
                layout="responsive"
                objectFit="cover"
                height={250}
                width={1040}
                alt={title}
                src={image}
            />  
            {/* <div className={styles.imgBox}>
                <Img src={image} />  
            </div>   */}
               
            <div className={styles.description}>
            <div className={styles.SectionText}>{description}</div>
                <div className={styles.SectionText}>
                     <ul>
                    <a href={visit} target="_blank" rel="noreferrer"><li>View Source Code on Github</li></a>        
                    <a><li>View on Playstore - Android</li></a>        
                          
                </ul>
            </div>
                <div className={styles.SectionText}>
                    This app consist of several pages which will be discussed in a bit.
                <ul>
                    <li>Dashboard</li>        
                    <li>Daily Sales</li>        
                    <li>Expensens</li>        
                    <li>Products List</li>        
                    <li>Summary</li>        
                    <li>Notification Page</li>        
                </ul>
            </div>

            </div>
        
         
        </div>
            
    );
}





