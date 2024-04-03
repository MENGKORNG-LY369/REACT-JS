import React from 'react'

function SignIn() {
  return (
    <>
      <form action="/" className=''>
        <div className="flex gap-3">
          <div className="flex flex-col">
            <label htmlFor="fName">First Name</label>
            <input className='outline-0' type="text" id='fName' />
          </div>
          <div className="flex flex-col">
            <label htmlFor="fName">First Name</label>
            <input type="text" id='fName' />
          </div>
        </div>
      </form>
    </>
  )
}

export default SignIn