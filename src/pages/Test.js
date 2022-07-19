import {useState} from 'react'
import axios from 'axios'

function Test() {

  const [username, setUsername] = useState('')
  const [userPost, setUserPost] = useState([])
  const [isLoading, setIsLoading] = useState(false)


  function getUserData (event) {
    setIsLoading(true)
    event.preventDefault()
    axios.post('http://localhost:3001/api', {username: username})
    .then(function (res) {
      const response = res.data
      if(response.status === 200) {
        setUserPost(response.data)
      }
      setIsLoading(false)
    })
    .catch(function (error) {
      console.log(error);
    });
  }


  return (
    <div>
      <form onSubmit={getUserData}>
        <input type='text' value={username} onChange={(event) => {setUsername(event.target.value)}} />
        <button type='submit'> Consultar </button>
        <h1>{isLoading && "Cargando"}</h1>
        {userPost.map( (url) => {
          return <img key={url.index} src={url} alt='post' />
        })
        }
      </form>
    </div>
  );
}

export default Test;