import React from 'react'
import {Link} from 'react-router'
import storageservice from '../appwrite/Storage_service'

function PostCard({$id, title, featuredImage}) {
  return (
    <Link to={`/post/${$id}`} className='w-full bg-gray-100 rounded-xl p-4'>
        <div>
            <div className='w-full justify-center mb-4'>
                <img src={storageservice.getFilePreview(featuredImage)} alt={title} className='rounded-xl' />
            </div>
            <h2 className='text-xl font-bold'>{title}</h2>
        </div>
    </Link>
  )
}

export default PostCard