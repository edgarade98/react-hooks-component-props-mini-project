import React from 'react'
import Article from './Article'
export default function ArticleList({ posts }) {
    return (
        <main>
            {posts.map((post, index) => 
            (<Article  
            title={post.title}
            date={post.date}
            preview={post.preview}
            minutes={post.minutes}/>))}
        </main>
    )
}