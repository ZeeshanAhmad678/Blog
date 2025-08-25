import React, {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from '../appwrite/appwriteConfig'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { GoArrowRight } from "react-icons/go";

function Home() {

    const authStatus = useSelector((state) => state.auth.status)   
    const userData = useSelector((state) => state.auth.userData) 
    

    return authStatus ? (
        <div className='w-full min-h-screen py-8 mt-4 '>
                <Container>
                    <div className='flex flex-wrap items-center '>
                        <div className='p-2 flex mt-48  md:mt-16  md:ml-16 '>
                            <div className='max-w-[600px] '>
                                <h1 className='text-5xl md:text-6xl text-center md:text-left font-bold text-black'>Welcome,  <span className='text-[#38a3a5]'>{userData?.name.split(" ")[0]}</span></h1>
                                <p className='mt-6 text-[#666d71] break-words'>Dive into the latest stories, share your thoughts, and keep exploring articles that matter.</p>
                                <Link to='/all-posts' className='flex gap-4 '>
                                    <button className='inline-block px-5 py-3 mt-8 duration-200
                                    bg-[#38a3a5]  text-white rounded-full cursor-pointer text-center hover:bg-[#24bcbf] font-semibold'>See Posts</button>
                                    <p className='inline-flex items-center mt-8 gap-2 cursor-pointer font-medium'>You can read and add the posts   <span className='mt-1'><GoArrowRight /></span> </p>
                                </Link>
                            </div>
                            <div className='hidden md:block bottom-35 left-30  relative w-full max-w-[400px]  '>
                                <svg fill='#38a3a5' viewBox="-120 -120 240 240" xmlns="http://www.w3.org/2000/svg" className="w-full  md:h-[500px] "><path d="M 79.33115621699618,0 C 79.32312874403398,21.359269768103328 -21.821911611356768,80.2473596656669 -40.16895836605644,69.5746767771287 C -58.516005120756105,58.901993888590496 -58.471769991731705,-58.79756841558692 -40.116695764069846,-69.48415529515205 C -21.761621536407983,-80.17074217471718 79.33918368995838,-21.359269768103328 79.33115621699618,0 Z" ></path><path d="M 79.33115621699618,0 C 79.32312874403398,21.359269768103328 -21.821911611356768,80.2473596656669 -40.16895836605644,69.5746767771287 C -58.516005120756105,58.901993888590496 -58.471769991731705,-58.79756841558692 -40.116695764069846,-69.48415529515205 C -21.761621536407983,-80.17074217471718 79.33918368995838,-21.359269768103328 79.33115621699618,0 Z"  transform="rotate(120)"></path><path d="M 79.33115621699618,0 C 79.32312874403398,21.359269768103328 -21.821911611356768,80.2473596656669 -40.16895836605644,69.5746767771287 C -58.516005120756105,58.901993888590496 -58.471769991731705,-58.79756841558692 -40.116695764069846,-69.48415529515205 C -21.761621536407983,-80.17074217471718 79.33918368995838,-21.359269768103328 79.33115621699618,0 Z"  transform="rotate(240)"></path></svg>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
    ) : (
            <div className='w-full min-h-screen py-8 mt-4 '>
                <Container>
                    <div className='flex flex-wrap items-center'>
                        <div className='p-2 flex mt-48 md:mt-16 md:ml-16'>
                            <div className='max-w-[600px] '>
                                <h1 className='text-5xl md:text-6xl text-center md:text-left font-bold text-black'>Welcome to the <span className='text-[#38a3a5]'>Blog</span></h1>
                                <p className='mt-6 text-[#666d71] break-words'>The place where you can share stories, lessons, and thoughts worth reading. From tech deep-dives to thought-provoking essays, explore stories that matter.</p>
                                <Link to='/signup' className='flex gap-4 '>
                                    <button className='inline-block px-5 py-3 mt-8 duration-200
                                    bg-[#38a3a5]  text-white rounded-full cursor-pointer text-center hover:bg-[#24bcbf] font-semibold'>Get Started</button>
                                    <p className='inline-flex items-center mt-8 gap-2 cursor-pointer font-medium'>Login to read or write blogs  <span className='mt-1'><GoArrowRight /></span> </p>
                                </Link>
                            </div>
                            <div className='hidden md:block bottom-35 left-30   relative w-full max-w-[400px] '>
                                <svg fill='#38a3a5' viewBox="-120 -120 240 240" xmlns="http://www.w3.org/2000/svg" className="w-full md:h-[500px] "><path d="M 79.33115621699618,0 C 79.32312874403398,21.359269768103328 -21.821911611356768,80.2473596656669 -40.16895836605644,69.5746767771287 C -58.516005120756105,58.901993888590496 -58.471769991731705,-58.79756841558692 -40.116695764069846,-69.48415529515205 C -21.761621536407983,-80.17074217471718 79.33918368995838,-21.359269768103328 79.33115621699618,0 Z" ></path><path d="M 79.33115621699618,0 C 79.32312874403398,21.359269768103328 -21.821911611356768,80.2473596656669 -40.16895836605644,69.5746767771287 C -58.516005120756105,58.901993888590496 -58.471769991731705,-58.79756841558692 -40.116695764069846,-69.48415529515205 C -21.761621536407983,-80.17074217471718 79.33918368995838,-21.359269768103328 79.33115621699618,0 Z"  transform="rotate(120)"></path><path d="M 79.33115621699618,0 C 79.32312874403398,21.359269768103328 -21.821911611356768,80.2473596656669 -40.16895836605644,69.5746767771287 C -58.516005120756105,58.901993888590496 -58.471769991731705,-58.79756841558692 -40.116695764069846,-69.48415529515205 C -21.761621536407983,-80.17074217471718 79.33918368995838,-21.359269768103328 79.33115621699618,0 Z"  transform="rotate(240)"></path></svg>
                            </div>
                        </div>
                    </div>
                </Container>
            </div>
        )
}

export default Home