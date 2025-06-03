import { useState } from "react";

function List(props) {

    const [inputValue, setInputValue] = useState("");
    const [list, setList] = useState([]);

    const changeInputValue = (val) => {
        setInputValue(val);
        console.log(inputValue);
    }

    const handleOnClick = () => {
        setList([...list, inputValue]);
        props.updateCounter();
    }

    return (
        <>
            <div>Welcome to List Component !!!</div>
            <input 
                type="text" 
                value={inputValue} 
                onChange={(e) => changeInputValue(e.target.value)}
            />
            <button onClick={handleOnClick}> Add </button>

            <ul>
                {list.map((item, index) => (<li id={index}>{item}</li>))}
            </ul>
        </>
    )

}

export default List;