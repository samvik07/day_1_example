import Email_Signup from '@/components/Email_Signup'
import React from 'react'
 
function page() {
  return (
    <div className='flex flex-col items-center gap-y-4'>
        <h1 className='text-6xl font-semibold'>This is my contact page</h1>
        <Email_Signup />
    </div>
  )
}
 
export default page