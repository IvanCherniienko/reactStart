import React, { useState } from 'react'

import GetPost from './server/getPost'
import PostBlock from './components/postBlock'
import CommentsBlock from './components/commentsBlock'

import styles from './App.module.css'

function App() {
  const [postId, setPostId] = useState('')

  async function handleSubmit(event) {
    event.preventDefault()

    if (postId < 1 || postId > 100) {
      alert('Validation incorrect')
      return
    }

    try {
      const post = await GetPost(postId)
      setPostId('')
      setPost(post)
    } catch (error) {
      alert(error.message)
    }
  }

  const [post, setPost] = useState(null)

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className={styles.container}>Post ID:</label>
        <input className={styles.container}
          type="text"
          id="inputId"
          value={postId}
          onChange={(event) => setPostId(event.target.value)}
        />
        <button type="submit" className="js-btn">
          Search
        </button>
      </form>
      {post && <PostBlock post={post} />}
      {post && <CommentsBlock postId={post.id} />}
    </div>
  )
}


export default App
