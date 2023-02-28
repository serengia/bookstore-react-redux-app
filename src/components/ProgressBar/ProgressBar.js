import React from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import ProgressProvider from "./ProgressProvider";

function ProgressBar(props) {
  const { value } = props;
  return (
    <ProgressProvider valueStart={0} valueEnd={value}>
      {(value) => <CircularProgressbar value={value} />}
    </ProgressProvider>
  );
}

export default ProgressBar;
