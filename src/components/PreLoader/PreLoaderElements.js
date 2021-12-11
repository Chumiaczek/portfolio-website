import styled from "styled-components";

export const LoadingBar = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    height: 90vh;
    align-items: center;
    flex-direction: column;
`

export const Logo = styled.h1`
    color: #fff;
    font-size: 40px;
    margin-bottom: 10vh;
`

export const BarWithProgress = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    align-items: center;
`

export const Value = styled.span`
    color: #fff;
    margin-left: 30px;
    font-family: 'Roboto Mono', monospace;
`