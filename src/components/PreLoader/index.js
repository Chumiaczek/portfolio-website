import React, { useEffect, useState } from 'react'
import Home from '../../pages'
import Lottie from 'react-lottie';
import * as location from '../../images/worldlocations.json'
import * as success from '../../images/success.json'

const defaultOptions1 = {
    loop: true,
    autoplay: true,
    animationData: location.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  
  const defaultOptions2 = {
    loop: true,
    autoplay: true,
    animationData: success.default,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

function PreLoader() {

    const [data, setData] = useState([]);
    const [loading, setloading] = useState(undefined);
    const [completed, setcompleted] = useState(undefined);

    useEffect(() => {
        setTimeout(() =>{
            fetch('https://jsonplaceholder.typicode.com/posts/1')
            .then((response) => response.json())
            .then((json) => {
                setData(json);
                setloading(true);

                setTimeout(() => {
                    setcompleted(true)
                }, 1000)
        })
        }, 2000)
}, [])

    return (
        <>
            {
                !completed ? (<div className='preloader'>
                    {!loading ? (
                      <Lottie options={defaultOptions1} height={200} width={200} />
                    ) : (
                      <Lottie options={defaultOptions2} height={100} width={100} />
                    )}
                  </div>)  
                : (<Home />)
            
            }
        </>
    )
}

export default PreLoader
