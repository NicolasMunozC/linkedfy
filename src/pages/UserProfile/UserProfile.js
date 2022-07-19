import React, {useEffect, useState} from 'react'
import axios from 'axios'
import './UserProfile.css'
import { 
    FaFacebookF,
    FaInstagram,
    FaWhatsapp,
    FaTiktok,
 } from "react-icons/fa";


function UserProfile() {

    const [username, setUsername] = useState('')
    const pathname = window.location.pathname.substring(1)
    const [userPost, setUserPost] = useState([])
    const [isLoading, setIsLoading] = useState(false)
    const [background, setBackground] = useState('Blue')
    const backgroundRule = 'profile__background'

    useEffect( () => {
        console.log("Inicio request");
        setUsername("@" + pathname)

        setIsLoading(true)
        axios.post('http://localhost:3001/api', {username: pathname})
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

        console.log("Termino Request");
    },[pathname, username])

  return (
    <div className={backgroundRule.concat(background, ' ', 'profile')}>
        <div className='profile__userBox'>
            <img className='profile__userImage' src='https://pixlr.com/studio/template/6264364c-b8cc-4f4f-92d8-28c69a2b756w/thumbnail.webp' alt=''/>
            <h1 className='profile__user'>{username}</h1>
            <div className='profile__userInfo'>
                <h2>Cinthia</h2>
                <h2>Vargas</h2>
            </div>

            <div className='profile__socialLinks'>
                <FaFacebookF />
                <FaInstagram />
                <FaWhatsapp />
                <FaTiktok />
            </div>

            <div className='profile__posts'> 
                {isLoading && <h3>Cargando...</h3>}
                {userPost.map( (post) => {
                    return <img key={post.index} src={post} alt='post' />
                })}
            </div>


        </div>
    </div>
  )
}

export default UserProfile