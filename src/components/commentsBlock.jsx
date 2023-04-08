import React, { useState } from 'react'

async function getComments(postId) {
  const response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
  if (response.status >= 0 && response.status < 400) {
    const comments = await response.json()
    return comments
  } else {
    alert('Error status')
  }
}

function CommentsBlock({ postId }) {
  const [comments, setComments] = useState([])

  async function handleClick() {
    try {
      const commentsData = await getComments(postId)
      setComments(commentsData)
    } catch (error) {
      alert(error.message)
    }
  }

  return (
    <div className="js-comments-div">
      <button className="js-comm-btn block-open" onClick={handleClick}>
        Show Comments
      </button>
      {comments.length > 0 && (
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>{comment.body}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default CommentsBlock