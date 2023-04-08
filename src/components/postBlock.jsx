import React from 'react'

function PostBlock({ post }) {
  return (
    <div className="js-post-div">
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </div>
  )
}

export default PostBlock