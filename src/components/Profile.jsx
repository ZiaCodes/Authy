import React from 'react'
import Nav from '../container/Nav'

const Profile = () => {
  return (
    <div className='Main-page'>
        <Nav/>

        <section className='main-content'>
            <p style={{
                width:'100%',
                textAlign:'center',
                marginTop:'50px'
            }}> Profile Page</p>
        </section>
    </div>
  )
}

export default Profile