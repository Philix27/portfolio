import React from 'react';
import Image from 'next/image';
import styles from '../../comps/HomeComps/projects/details.module.css'
import { projects } from '../../comps/HomeComps/projects/constants';

export default function Mim() {
   
    const { title, image, description, visit} = projects[1];
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
                alt={title}
                src={image}
            />  
               
            <div className={styles.description}>
               <div className='sectionText'>{description}</div>
                <div className='sectionText'>
                    
                    This app has been used in a pharmacy to track records such as daily sales,
                    daily expenses, daily transfers and deposit, out-of-stock products, soon to expire items 
                    and some essential contacts of customers and suppliers
                </div>
                <div className='sectionText'>
                   It also has a notification section for all staffs of the premises.
                </div>
               
            </div>
        
         
        </div>
            
    );
}





