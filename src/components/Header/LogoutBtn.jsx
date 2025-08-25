import React from 'react'
import { useDispatch } from 'react-redux'
import authService  from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
    const dispatch = useDispatch();

    const logoutHandler = () =>{
      authService.logout()
      .then(() => {
          dispatch(logout());
      })
      .catch((error) => {
          console.error('Logout error:', error);      
      })
    }
    
  return (
    <button
      className='inline-block px-5 py-2 duration-200
      hover:bg-[#38a3a5] hover:text-white rounded-full cursor-pointer text-center active:bg-[#22577a] font-semibold'
      onClick={logoutHandler}
    >Logout</button>
  )
}

export default LogoutBtn