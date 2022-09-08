import React from 'react'
import Nav from '../container/Nav'

const Logout = () => {
  return (
    <div className='Main-page'>
        <Nav/>

        <section className='main-content'>
            <p style={{
                width:'100%',
                textAlign:'center',
                marginTop:'50px'
            }}> Logout</p>
        </section>
    </div>
  )
}

export default Logout