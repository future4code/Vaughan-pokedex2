import React from "react";
import { Progress } from "@mantine/core";
import { ContainerProgressBar } from "./styled";


const ProgressBar = (props) => {
  return (
    <ContainerProgressBar>
      <p>
        {props.statText}: {props.label}
      </p>
      <div>
        <Progress color="red" value={props.value} size="lg" />
      </div>
    </ContainerProgressBar>
  );
};

export default ProgressBar;
