import React from "react";
import { Progress } from "@mantine/core";
import { ContainerProgressBar } from "./styled";
import Typography from '@mui/material/Typography';

const ProgressBar = (props) => {
  return (
    <ContainerProgressBar>
      <Typography sx={{ mb: '10px', mt: '10px' }}>
        {props.statText && props.statText.charAt(0).toUpperCase() + props.statText.slice(1)}: {props.label}
      </Typography>
      <div>
        <Progress color="red" value={props.value} size="lg" />
      </div>
    </ContainerProgressBar>
  );
};

export default ProgressBar;
