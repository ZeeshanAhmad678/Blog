import React from 'react'
import apprwriteService from '../appwrite/appwriteConfig'
import {Link} from 'react-router-dom'

function PostCard({$id, title, featuredImage}) {

  return (
    <Link to={`/post/${$id}`} >
         <div className='w-full rounded-xl p-4 mt-6 md:mt-2'>
            <div className='w-full mb-4'>
                <div className='mb-2 w-100% object-cover rounded-lg overflow-hidden'>
                  <img src={apprwriteService.getFileView(featuredImage)} alt={title} className='rounded-xl ' />
                </div>
                <h2 className='text-xl font-bold '>{title}</h2>
            </div>
         </div>
    </Link>
  )
}

export default PostCard