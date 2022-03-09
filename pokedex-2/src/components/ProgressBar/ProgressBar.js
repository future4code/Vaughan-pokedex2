import React from 'react'
import { Progress } from 'react-sweet-progress';
import "react-sweet-progress/lib/style.css";

//Para baixar essa biblioteca usei --> npm i -S react-sweet-progress <--


const ProgressBar = (props) => {
    return(
        <div>

        <p>{props.statText}</p>
        <Progress
        percent={props.percent}
        status="active"
        theme={{
            active: {
                symbol: props.value,
                color: '#1b97e5',  //Pode modificar a cor 
            }
          
        }}
      />
      </div>
    )
}

export default ProgressBar;