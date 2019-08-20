import React from "react"
import { textAlign } from "@material-ui/system";
import Logo from "../assets/Logo.svg";
import styled from "styled-components";
import { relative } from "path";


class LoadingScreen extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = 
        {

        }
    }

    render()
    {
        return (
            <div style={{width: "100vw", height: "100vh", position: "relative", top: "0%", left: "0%", display: "flex", alignItems: "center", justifyContent: "center", backgroundColor: "#EEE"}}>
                <div style={{position: "relative", top: "0", right: "0"}}>
                   {/*  <img style={{width: "90vw", height: "90vw", maxWidth: "90vh", maxHeight: "90vh"}} src={Logo}/> */}
                    <Spinner /* style={{position: "absolute", top: "15%", right: "45%"}} *//>
                </div>
            </div>
        )
    }
}

const Spinner = styled.div`
border: 2vw solid #aaa;
border-radius: 100%;
border-top: 2vw solid #478529;
width: 10vw;
height: 10vw;
max-width: 10vh;
max-height: 10vh;
-webkit-animation: spin 2s linear infinite; /* Safari */
animation: spin 2s linear infinite;
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
`

export default LoadingScreen;