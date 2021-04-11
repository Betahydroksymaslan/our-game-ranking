import React from "react";
import { useHistory } from "react-router-dom";

const Back = () => {
  const history = useHistory();

  const goBack = () => history.goBack();
  return <div className="Back" onClick={goBack}></div>;
};

export default Back;
