import React from 'react'
import Nav from '../container/Nav'
import Box from '../container/CardBox'


import {FiArrowDownCircle} from 'react-icons/fi'
const Homepage = () => {

    const [action , setAction] = React.useState('Get Started');
    const getStarted =() =>{
        const action1 = "Sign up Now";
        setAction(action1);
    }


  return (
    <div className='Main-page'>
        {/* This is navigation part */}
        <Nav/>

        <section className='landing'>
            <div className='hero-section'>
            <div className="action">
                <p>
                Implement No Code <br /> Authentication.
                </p>
                <button style={{
                    
                }} onClick={getStarted}>{action}</button>
            </div>

            <div className="quote">
            </div>
            </div>
        </section>

            <div className='arrow'>
            <FiArrowDownCircle/>
            </div>

            <h2 style={{
                textAlign:'center'
            }}>Abstraction in four stage</h2>
        <section className='main-content'>
            <Box/>
        </section>
    </div>
  )
}

export default Homepage