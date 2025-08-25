import React from 'react'
import { Container, PostForm } from '../components'

function AddPost() {
  return (
    <div className='py-8 md:mt-0 mt-6'>
        <Container>
            <PostForm /> 
        </Container>
    </div>
  )
}

export default AddPost