import React, { useEffect, useState } from 'react'
import Home from '../../pages'
import LinearProgress from '@mui/material/LinearProgress';
import { LoadingBar, Logo, BarWithProgress, Value } from './PreLoaderElements'

let progress = 0
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

const [value,setValue] = useState();

  const refresh = ()=>{
      // it re-renders the component
     setValue({});
  }

function SetProgress() {
    setTimeout(() => {
        if( progress < 100){
            progress = Number(progress) + 10
            console.log(progress)
            refresh()
        }
    }, 400)

}
SetProgress()
    return (
        <>
            {
                !completed ? (<div className='preloader'>
                    {!loading ? (<LoadingBar><Logo>Chumi</Logo>
                      <BarWithProgress><LinearProgress variant="determinate" value={progress}></LinearProgress><Value>{progress}</Value></BarWithProgress></LoadingBar>
                    ) : (
                        <>
                        <LoadingBar><Logo>Chumi</Logo>
                        <BarWithProgress><LinearProgress></LinearProgress><Value>{progress}</Value></BarWithProgress></LoadingBar>
                        </>
                    )}
                  </div>)  
                : (<Home />)
            
            }
        </>
    )
    function setProgress() {
        setTimeout(() => {
            if( progress < 90){
                progress = Number(progress) + 10
                console.log(progress)
            }
        }, 200)
    }
}

export default PreLoader
