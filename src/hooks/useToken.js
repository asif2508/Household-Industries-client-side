import {useEffect, useState} from 'react';
const useToken = user =>{
    const [token, setToken] = useState('')
    const email = user?.user?.email;
    console.log(email);
    console.log(token);
    useEffect(()=>{
        fetch(`http://localhost:5000/users/${email}`,{
            method:'PUT',
            headers : {
                'content-type': 'application/json'
            },
            body: JSON.stringify({email: email})
        })
        .then(res => res.json())
        .then(data => {
            const accessToken = data.token;
            console.log(data);
            localStorage.setItem('accessToken', accessToken);
            setToken(accessToken);
        })
    },[])
    return [token];
}
export default useToken;