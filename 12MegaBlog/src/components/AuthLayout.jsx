import React, {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useNavigate} from 'react-router'

function Protected({children, authantication = true}) {
    const navigate = useNavigate();
    const authStatus = useSelector((state) => (state.auth.status));
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        if (authantication && authStatus !== authantication) {
            navigate('/login');
        }else if (!authantication && authStatus !== authantication) {
            navigate('/');
        }
        setLoader(false);
    },[authStatus, navigate, authantication]);

  return loader ? <h1>Loading...</h1> : <>{children}</>
}

export default Pretected