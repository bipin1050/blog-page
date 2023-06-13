import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import AddBlogs from './AddBlog';

const Headers = () => {
  const navigate = useNavigate();
  return (
    <>
    <div className='border-b-2 border-b-gray-200 sticky top-0 z-10 bg-white'>
      <div className='flex justify-between w-[85%] mx-auto'>
          <div className='py-4 text-2xl font-mono text-purple-500 hover:cursor-pointer' onClick={()=>{navigate("/")}}>
              Happy Reading !
          </div>
          <div>
            <div onClick={()=>{navigate("/addblog")}} className='my-3 p-2 self-center text-xl font-mono rounded-lg bg-purple-500 text-white border-2 border-purple-500 hover:bg-white hover:text-purple-500 hover:cursor-pointer'>Add Blogs</div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Headers