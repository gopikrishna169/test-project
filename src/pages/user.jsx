import { useParams, useNavigate } from 'react-router-dom';

function User() {

    // const { id } = useParams();

    const navigate = useNavigate();

    const handleOnClick = (path) => {
        navigate(path)
    }

    return (
        <>
            <div>Welcome User !!!</div>
            <button onClick={() => handleOnClick('/user/login')}> Login </button>
            <button onClick={() => handleOnClick('/user/signup')}> SignUp</button>
        </>
    )
}

export default User;