import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
// import Head from 'next/head'
import BlogComp from '../../comps/blogs'
import { sortByDate } from '../../utils'

export default function PostPage({ books }) {
  const _category = ["All", "Psycology", "Self Development"];
  return (
    <div>
      {/* <Head>
        <title>Blog Categories</title>
      </Head> */}
      <BlogComp 
        title='Book Reviews and Summaries'
        page='books' 
        categoryList={_category}
        posts={books}/>
    </div>
  )
}

export async function getStaticProps() {
  // Get files from the posts dir
  const files = fs.readdirSync(path.join('books'))

  // Get slug and frontmatter from posts
  const books = files.map((filename) => {
    // Create slug
    const slug = filename.replace('.md', '')

    // Get frontmatter
    const markdownWithMeta = fs.readFileSync(
      path.join('books', filename),
      'utf-8'
    )

    const { data: frontmatter } = matter(markdownWithMeta)

    return {
      slug,
      frontmatter,
    }
  })

  return {
    props: {
      books: books.sort(sortByDate),
    },
  }
}