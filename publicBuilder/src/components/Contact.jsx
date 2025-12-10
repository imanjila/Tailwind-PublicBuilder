import React from 'react'

const Contact = () => {
  return (
    <div className='text-center p-6 py-20 lg:px-32 w-full
    overflow-hidden' id = 'Contact'>
      
      <h1 className='text-2xl sm: text-4xl font-bold mb-2 text-center'>Contact{" "}
        <span className='underline underline-offset-4 decoration-1 under font-light'>
        Us</span></h1>
        <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>
            Reach out with any questions or inquiries</p>

            {/* Contact + Map */}
           <div className='flex flex-col lg:flex-row gap-8'>
        {/* Google Map */}
        <div className='w-full lg:w-1/2 h-80 lg:h-[500px] rounded-xxl overflow-hidden shadow-lg'>
          <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1241.5020921620658!2d-0.12183836938934434!3d51.513139229360306!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399595527f51d81b%3A0x2c32610433dbfda4!2sPublic%20Builders%20and%20Suppliers!5e0!3m2!1sen!2suk!4v1765261990543!5m2!1sen!2suk"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"/>
        </div>

            <form className='max-w-2xl mx-auto text-gray-600 pt-8'>
                <div className='flex flex-wrap'>
                    <div className='w-full md:w-1/2 text-left'>
                        Your Name
                    <input className = 'w-full border border-gray-300 rounded py-3 px-4 mt-2' 
                    type="text" name = 'Name' placeholder='Enter your name...' required />
                    </div>
                    <div className='w-full md:w-1/2 text-left md:pl-4'>
                        Your Email
                    <input className = 'w-full border border-gray-300 rounded py-3 px-4 mt-2' 
                    type="email" name = 'Email' placeholder='Enter your email...' required />
                    </div>
                </div>
                <div className='my-6 text-left'>
                    Message
                    <textarea className='w-full border border-gray-300 rounded py-3px-4 mt-2 h-48 resize-none' 
                    name="Message" placeholder='Any message?' required></textarea>
                </div>
                <button className='bg-black text-white py-2 px-12 mb-10 rounded cursor-pointer'
                >Submit</button>
            </form>
            </div>
    </div>
  )
}

export default Contact
