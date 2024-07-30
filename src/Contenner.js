import React, { useEffect } from 'react'

const tabs = ['posts', 'comments', 'albums']

function Contenner() {
  
  const [ title, setTitle] = React.useState('')
  const [ posts, setPosts] = React.useState([])
  const [ type, setType] = React.useState('posts')
  const [ show, setShow] = React.useState(false)

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then(res => res.json())
      .then(posts => {
        setPosts(posts);
      })
  }, [type])


  // sự kiện quận chuột web

  useEffect(() =>{
    const handleScroll = () =>{
      if (window.scrollY >= 200) {
        setShow(true)
      }else{
        setShow(false)
      }
    }
    window.addEventListener('scroll', handleScroll)
  }, [])

  return (

    <div>
    {tabs.map(tab => (
      <button 
      key={tab}
      style={type === tab ? {
        backgroundColor:'#333',
        color:'#fff'
      } : { }}
      onClick={() => setType(tab)}
      >
        {tab}
      </button>
    ))}

      <input
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
    <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title}</li> // Thêm key duy nhất cho mỗi phần tử
        ))}
      </ul>
      {
        show &&(
          <button 
            style={{
              position:'fixed',
              right:20,
              bottom:20
              }}
          >
            go to top
          </button>
        )
      }
    </div>
  )
}

export default Contenner