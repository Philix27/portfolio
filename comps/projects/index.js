import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
// import styles from "./projects.module.css";
// import { projects } from "./constants";
// import { HeaderThree, Tag, TagList, TitleContent } from "./projectsStyles";

export default function ProjectsGroup({ category, projectCol }) {
  const projectll = projectCol.filter((project) => {
    return project.frontmatter.category == category;
  });

  return (
    <div className="projects">
      <div className="section">
        <div className="gridContainer">
          {projectll.map(({ slug, frontmatter }, index) => (
            <motion.div
              key={index}
              className="card"
              initial={{ x: "-100vw", opacity: 0.1 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1.7, delay: 1, type: "tween" }}
            >
              <Link href={`/projects/${slug}`} target="_blank">
                <a>
                  <img className="img" src={frontmatter.cover_image} />{" "}
                </a>
              </Link>
              <div className="content">
                <h3>{frontmatter.title}</h3>
                <p>{frontmatter.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
