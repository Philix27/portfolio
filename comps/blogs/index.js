  import Link from 'next/link'
  import {useEffect, useState} from 'react' 
  import {motion} from 'framer-motion'


export default function BlogComp({ posts, title, page, categoryList, }) {
    const [selectedCategory, setSelectedCategory] = useState(posts);

    // useEffect(() => {
    // effect
    // return () => {
    //   cleanup
    // }
    // }, [input]);
  
  const changeToCateory = (_category) => {
    console.log('Before');
    console.log(selectedCategory);
    const tempList = [];
      posts.forEach(post => {
        if (post.frontmatter.category == _category) {
          tempList.add(post)
        }
      });
      setSelectedCategory(tempList);
      console.log('After');
      console.log(selectedCategory);
  }
  
      return (
        <div className='section postsSection' id="services">
          <div className='sectionTitle' >{title}</div >
          <div className='categoryContainer'>
            {categoryList.map((cat, index) => (
              <div className='categories' onClick={() => changeToCateory(cat)}>
                {cat}
              </div>
            ))}

          </div>        
          <div className='gridContainer'>
        {selectedCategory.map((post, index) => (
          <motion.div
            key={index}
            className='card'
            initial={{ x: "-100vw", opacity: 0.1 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{duration: 1.7, delay: 1, type: "spring", stiffness:"110"}}> 
            {/* transition={{duration: 1.7, delay: 1, type: "tween", }}> */}
            {/* <Image src={image} width={500} height={300}/> */}
            <Link href={`/${page}/${post.slug}`} target="_blank">
              <img className='img' src={post.frontmatter.cover_image} />
            </Link>
          {/* <BlogCard> */}
            <h3 className='headerThree'>{post.frontmatter.title}</h3>
              <div className='sectionText'>
                {post.frontmatter.excerpt}
              </div>
              <hr />
              <div className='sectionSmallText'>
                Posted on {post.frontmatter.date}
              </div>
         
        
         {/* </BlogCard> */}
         </motion.div>
        ))}
      </div>
            
          </div>
          //  </div>
      )
  }
