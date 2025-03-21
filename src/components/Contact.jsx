import React from 'react'
import LocationIcon from "../assets/gps.png";
import PhoneIcon from "../assets/phone.png";
import EmailIcon from "../assets/email.png";

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center py-4 text-black'>
  {/* Grid Container */}
  <div className='max-w-[1000px] mx-auto p-4 w-full grid md:grid-cols-2 gap-8 items-center'>
    
    {/* Contact Form */}
    <form method='POST' action="https://getform.io/f/eapdzgva" className='flex flex-col w-full'>
      <div className='pb-6 text-center md:text-center'>
        <p className='text-4xl font-bold inline border-b-4 border-[#82d0cb] text-gray-300'>Contact Form</p>
      </div>
      <input required name="Name" 
        className='placeholder-gray-500 bg-[#C5C6C7] p-3 rounded-lg hover:bg-[#d0fbf8] hover:bg-opacity-95 transition-all' 
        type="text" placeholder='Name *' 
      />
      <input required name="Email" 
        className='my-4 p-3 placeholder-gray-600 bg-[#C5C6C7] rounded-lg hover:bg-[#d0fbf8] hover:bg-opacity-95 transition-all' 
        type="email" placeholder='E-mail *' 
      />
      <textarea required name='Message' 
        className='bg-[#C5C6C7] placeholder-gray-600 p-3 rounded-lg hover:bg-[#d0fbf8] hover:bg-opacity-95 transition-all' 
        rows="7" placeholder='Message *'
      ></textarea>
      <button 
        className='text-white border-2 hover:bg-[#48ccc3] hover:border-[#48ccc3] px-6 py-3 mx-auto my-6 rounded-lg transition-all'
      >
        Send
      </button>
    </form>

    {/* Contact Information Section */}
    <div className='flex flex-col w-full items-center md:items-start self-center md:ml-20'>
  <div className='text-white text-xl md:text-2xl leading-relaxed flex flex-col gap-12'>

    {/* Location */}
    <div className='flex items-center gap-4'>
      <img src={LocationIcon} alt="Location Icon" className='w-10 h-10 bg-white rounded-full p-1' />
      <p><span className="text-md">Fairfax, Virginia, USA</span></p>
    </div>

    {/* Phone Number */}
    <div className='flex items-center gap-4'>
      <img src={PhoneIcon} alt="Phone Icon" className='w-10 h-10 bg-white rounded-full p-1' />
      <p><span className="text-md">703-332-4907</span></p>
    </div>

    {/* Email */}
    <div className='flex items-center gap-4'>
      <img src={EmailIcon} alt="Email Icon" className='w-10 h-10 bg-white rounded-full p-1' />
      <p><span className="text-md">vishnucheliyan@gmail.com</span></p>
    </div>

  </div>
</div>


  </div>
</div>


    // border-b-2 border-b-transparent hover:border-pink-200
  )
}

export default Contact