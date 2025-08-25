import React , {useState, useEffect} from 'react'
import { Container, PostCard } from '../components'
import appwriteService from '../appwrite/appwriteConfig';


function AllPosts() {
    const [posts, setPosts] = useState([]);
    
    appwriteService.getPosts([])
    .then(posts => {
        if(posts){
            setPosts(posts.documents)
        }
    })

  return (
    <div className='py-8 w-full'>
        <Container>
            <div className='flex flex-wrap'>
                {posts.map(post => (
                    <div key={post.$id} className='p-2 md:w-1/4'>
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </Container>  
    </div>
  )
}

export default AllPosts