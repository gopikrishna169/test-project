import { useState } from "react";

function Weather() {

    const [city, setCity] = useState("")

    const handleChange = () => {

    }

    

    return (
        <>
            <input type="text" value={city} />
            <button onClick={handleChange} > Submit</button>
        </>
    )

}

export default Weather;