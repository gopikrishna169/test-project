import React from 'react';
import './home.css'
// import styles from'./home.module.css'

function Home() {

    const third_line = {
        color: 'black'
    }
    return (
        <>
            <div className='home-first-line' id="test">Home Page</div>
            <div className='home-first-line' >Welcome everyone !!!</div>
            <div style={third_line}> Hope everyone likes the class... <p style={{color: 'green'}}>May be or May not...</p></div>
        </>
    );
}

export default Home;
