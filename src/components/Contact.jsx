import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center py-4'>
        <form method='POST' action="https://getform.io/f/eapdzgva" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-400 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>( Contact me through this form )</p>
            </div>
            <input name="Name" className='bg-[#ccd6f6] p-2' type="text" placeholder='Name'/>
            <input name="Email" className='my-4 p-2 bg-[#ccd6f6]' type="text" placeholder='Email'/>
            <textarea name='Message' className='bg-[#ccd6f6] p-2' rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:bg-pink-400 hover:border-pink-400 px-4 py-3 mx-auto my-6'>Send</button>
        </form>
    </div>
  )
}

export default Contact