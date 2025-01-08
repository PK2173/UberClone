import React from 'react'
import { UserDataContext } from '../context/UserContext';

const Home = () => {
  const {users, setUsers} = React.useContext(UserDataContext)
  return (
    <div>Home</div>
  )
}


export default Home