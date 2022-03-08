import React from 'react'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

//Para baixar essa biblioteca usei --> npm i -S react-sweet-progress <--


const ProgressBar = () => {
    return(
        <Progress
        percent={30}
        status="active"
        theme={{
            active: {
                symbol: '',
                color: '#1b97e5',  //Pode modificar a cor 
            }
          
        }}
      />
    )
}

export default ProgressBar;