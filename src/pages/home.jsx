import './home.css';
import Child from './child'
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import { useEffect } from 'react';
// import Button from 'react-bootstrap/Button'; 

function Home() {

    // Basic JSX Syntax
    const element = <h1>Hello, world!</h1>;

    const inputRef = useRef(null);

    const count = useRef(0);

    // JSX with JavaScript Expressions
    // const name = 'Alice';
    // const element1 = <h2>Welcome, {name}!</h2>;

    // JSX Must Return a Single Element

    const navigate = useNavigate();

    const handleOnClick = (name) => {
        navigate('/user');
    }

    useEffect(() => {
        // const interval = setInterval(() => {
        //     if (count.current < 10) {
        //         count.current += 1;
        //         console.log(count);
        //     }
        // }, 1000)



        inputRef.current.focus();

        // return () => clearInterval(interval);
    }, [])

    return (
    <div className="Home">
        <>
            <header className="Home-header">
                <p>
                    Welcome to React JS Class !!!
                </p>
                <input ref={inputRef} />
                <button className="btn btn-primary" onClick={() => handleOnClick('Dhoni')} >Click to navigate to User - Dhoni</button>
                {/* <Button variant="primary">Primary</Button> */}
            </header>
        </>
        
    </div>

    // <>
    //     <header className="Home-header">
    //     <p>
    //       Welcome to React JS Class !!!
    //     </p>
    //   </header>
    // </>
    );
}

export default Home;
