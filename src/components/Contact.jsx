import React from 'react';

const Contact = () => {
  return (
    <div id='contact' className='flex justify-center items-center min-h-screen '>
      <div className='bg-darkblueish shadow-md rounded-lg p-8 w-full max-w-md mx-4 text-white'>
        <h2 className='text-3xl font-bold mb-6 text-center '>Contact Me</h2>
        <form>
          <div className='mb-4'>
            <label className='block  font-bold mb-2' htmlFor='name'>
              Name
            </label>
            <input type='text' id='name' 
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon' 
              placeholder='Your name' 
            />
          </div>
          <div className='mb-4'>
            <label className='block  font-bold mb-2' htmlFor='email'>
              Email
            </label>
            <input type='email' id='email' 
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon' 
              placeholder='Your email' 
            />
          </div>
          <div className='mb-6'>
            <label className='block  font-bold mb-2' htmlFor='message'>
              Message
            </label>
            <textarea id='message'
              className='w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-maroon' 
              placeholder='Your message' 
              rows='5'
            ></textarea>
          </div>
          <div className='flex justify-center'>
            <button type='submit' 
              className='bg-redish text-white px-4 py-2 rounded-lg hover:bg-maroon transition-colors duration-200'>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact;
