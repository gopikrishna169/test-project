import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";

function Notes() {

    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => {
            setData(response.data);
            setIsLoading(false);
        })
        .catch((error) => {
            console.log(error);
            setIsLoading(false);
        })

    }, [])

    return (
        <>
            Notes
            {isLoading ? (<div>Data is Loading</div> )
                : 
                (
                    data.slice(0,10).map((post) => {
                        return (<div><div><b>{post.title}</b></div><p> <i>{post.body}</i></p></div>)
                    })
                )}
        </>
    )
}

export default Notes;