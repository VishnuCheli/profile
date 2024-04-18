import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center py-4 text-black'>
        {/* grid */}
        <div className='max-w-[1000px] mx-auto p-4 w-full grid md:grid-cols-2 gap-8'>
            <form method='POST' action="https://getform.io/f/eapdzgva" className='flex flex-col w-full '>
                <div className='pb-2 text-center md:text-left'>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-400 text-gray-300'>Contact Form</p>
                    <p className='text-gray-300 pt-3 pb-2'>( Contact me through this form )</p>
                </div>
                <input required name="Name" className='placeholder-gray-500 bg-[#ccd6f6] p-2 hover:bg-pink-50 hover:bg-opacity-95' type="text" placeholder='Name *'/>
                <input required name="Email" className='my-4 p-2 placeholder-gray-600 bg-[#ccd6f6] hover:bg-pink-50 hover:bg-opacity-95' type="text" placeholder='E-mail *'/>
                <textarea required name='Message' className='bg-[#ccd6f6] placeholder-gray-600 p-2 hover:bg-pink-50 hover:bg-opacity-95' rows="7" placeholder='Message *'></textarea>
                <button className='text-white border-2 hover:bg-pink-400 hover:border-pink-400 px-4 py-3 mx-auto my-6'>Send</button>
            </form>
            <div className='flex flex-col w-full items-center md:items-start'>
                <div className='pb-12 '>
                    <p className='text-4xl font-bold inline border-b-4 border-pink-400 text-gray-300'>Contact Information</p>
                </div>
                <div className='bg-[#ccd6f6] p-2 flex '>
                    <span className='inline-block text-lg'>
                    <p className=''><span >Current Location:</span> Fairfax, Virginia, USA </p>
                    <p className='my-4 '><span>Phone:</span> 7033324907</p>
                    <p className=''><span>Email:</span> vishnucheliyan@gmail.com</p>
                    </span>
                </div>
            </div>
        </div>
    </div>
    // border-b-2 border-b-transparent hover:border-pink-200
  )
}

export default Contact