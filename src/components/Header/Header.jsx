import React from 'react'
import {Container, Logo, LogoutBtn} from '../index';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const location = useLocation()
  const [isOpen, setIsOpen] = React.useState(false);

  const navItems =[
    {
      name: 'Home',
      slug: '/',
      active: true
    },
    {
      name: 'Login',
      slug: '/login',
      active: !authStatus
    },
    {
      name: 'Signup',
      slug: '/signup',
      active: !authStatus
    },
    {
      name: 'All Posts',
      slug: '/all-posts',
      active: authStatus
    },
    {
      name: 'Add Posts',
      slug: '/add-posts',
      active: authStatus
    }
  ]
  return (
    <>
      <header className='sticky top-0 py-1 z-50 shadow hidden md:block bg-[#f3f6f8]'>
        <Container>
          <nav className='flex items-center '>
            <div className='mx-3 '>
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <ul className='flex ml-auto'>
              {navItems.map((item) => 
              item.active ? (
                <li key={item.name}>
                  <button
                    className={`inline-block mr-2 px-5 py-2 duration-200
                  hover:bg-[#38a3a5] hover:text-white rounded-full cursor-pointer text-center   font-semibold  ${location.pathname === item.slug ? 'bg-[#38a3a5] text-white' : 'text-black'}`}
                    onClick={() =>  navigate(item.slug)}
                  >{item.name}</button>
                </li>
              ) : null)}
              
              {authStatus && (
                  <li>
                    <LogoutBtn  />
                  </li> 
              )}
            </ul>
          </nav>
        </Container>
      </header>
      <div>
        <>
          <button
            className='md:hidden fixed top-4 left-4 z-[101] p-2 rounded-md  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <RxCross2/> : <AiOutlineMenu/>}
          </button>
        </>
        <header className={`fixed top-0 left-0 w-1/2 h-screen py-1 z-[100] shadow md:hidden bg-gray-100 
        ${isOpen ? 'translate-x-0' : '-translate-x-full'} transform transition-transform duration-300 ease-in-out`}>
            <Container>
              <nav className='flex flex-col items-center gap-5 mt-14 '>
                <div className='mx-3 '>
                  <Link to="/">
                    <Logo />
                  </Link>
                </div>
                <ul className='flex flex-col space-y-2 items-center '>
                  {navItems.map((item) => 
                  item.active ? (
                    <li key={item.name}>
                      <button
                        className={`inline-block mr-2 px-5 py-2 duration-200
                      hover:bg-[#38a3a5] hover:text-white rounded-full cursor-pointer text-center   font-semibold  ${location.pathname === item.slug ? 'bg-[#38a3a5] text-white' : 'text-black'}`}
                        onClick={() =>  navigate(item.slug)}
                      >{item.name}</button>
                    </li>
                  ) : null)}
                  
                </ul>
              </nav>
            </Container>
          </header>
          <div className='absolute top-4 right-4 list-none  h-screen z-[100] md:hidden'>
            {authStatus && (
                <li>
                  <LogoutBtn  />
                </li> 
            )}
          </div >
      </div>
    </>
   
  )
}

export default Header