import React from 'react'
import Nav from '../container/Nav'

const Dashboard = () => {
  return (
    <div className='Main-page'>
        <Nav/>

        <section className='main-content'>
            <p style={{
                width:'100%',
                textAlign:'center',
                marginTop:'50px'
            }}> Dashboard Page</p>
        </section>
    </div>
  )
}

export default Dashboard