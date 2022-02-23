// import Image from 'next/image';

import Link from 'next/link'
import React from 'react'
import {motion} from 'framer-motion'
import styles from './projects.module.css'
import {FaGithub, FaHourglassEnd } from 'react-icons/fa'
import { projects } from './constants';
import {  BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './projectsStyles';
import { Section, SectionTitle, SectionText } from '../../../styles';


export default function Projects() {
    return (
      <>
        <Section id="projects">
        {/* <div className={styles.container}> */}
            {/* <h1 className="h3d">Our Goal</h1> */}
          <SectionTitle>Projects</SectionTitle>
        
             <GridContainer>
      {projects.map(({
    title,
    description,
    image,
    tags,
    source,
    visit,
    id,
  }) => (
        <motion.div
          key={id}
          className={styles.card}
          initial={{ x: "-100vw", opacity: 0.1 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{duration: 1.7, delay: 1, type: "tween", }}>
          <a href={`/project/${id}`} target="_blank"><Img src={image} /></a>
        {/* <BlogCard> */}
        <TitleContent>
          <HeaderThree >{title}</HeaderThree>
        </TitleContent>
          <div style={{padding: "0px 20px"}}>
            <SectionText>{description}</SectionText>
            {/* <CardInfo>{description}</CardInfo> */}
        </div>
        <div>
          {/* <TitleContent>Stack</TitleContent> */}
          <TagList>
            {
              tags.map((tag, i) => (
                <Tag key = {i}>{tag} |</Tag>
              ))
            }
          </TagList>
        </div>
       {/* </BlogCard> */}
       </motion.div>
      ))}
    </GridContainer>
            <br/>
            <br/>
            <br/>
            {/* <div className={styles.cards}>
              
                <div className={styles.card}>
                <FaGithub className={styles.icon} />
                  <h1 className={styles.title}>Why Philix?</h1>
                    <p className={styles.subtitle}>
                   From classy clothing to matching accessories, we’ve got you. 
                        In a world of boring male fashion, join hands 
                      
                </p>
                </div>
            </div> */}
            {/* </div> */}
         </Section>
         <Section>
          <Link href="/project"><a>View All Projects</a></Link>
         </Section>
      </>
    )
}
