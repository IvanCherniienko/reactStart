async function getPost(postId) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    if (response.status >= 0 && response.status < 400) {
      const post = await response.json()
      return post
    } else {
      alert('Error status')
    }

}

export default getPost