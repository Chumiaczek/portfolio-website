import React, { useEffect, useState } from 'react'
import Home from '../../pages'
import LinearProgress from '@mui/material/LinearProgress';
import { LoadingBar, Logo, BarWithProgress, Value } from './PreLoaderElements'

var styles = `
.css-eglki6-MuiLinearProgress-root{
    width: 50%;
    height: 30px;
    background-color: rgba(252, 140, 3, 0.3) !important;
  }
  
  .css-5ir5xx-MuiLinearProgress-bar1{
    background-color:rgba(252, 140, 3, 1) !important;
  }
  
  .css-1r8wrcl-MuiLinearProgress-bar2{
    background-color:rgba(252, 140, 3, 1) !important;
  }
  
  .css-fl5ss-MuiLinearProgress-root{
    background-color:rgba(252, 140, 3, 1) !important;
    width: 50%;
    height: 30px;
  }
  
  .css-qhoknl-MuiLinearProgress-bar1{
    background-color:rgba(252, 140, 3, 1) !important;
  }
  
  .css-1qdnzt4-MuiLinearProgress-bar2{
    background-color: rgba(252, 140, 3, 0.3) !important;
  }
  
  .css-5xe99f-MuiLinearProgress-bar1{
    background-color: rgba(252, 140, 3, 1) !important;
  }
`

var styleSheet = document.createElement("style")
styleSheet.innerText = styles
document.head.appendChild(styleSheet)

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
        }, 20000)
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
    }, 200)

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
