import React, { useEffect } from "react";
import ExpertiesHeader from "./ExpertiesHeader";

import ExpertiesCards from "./ExpertiesCards";

const Experties = () => {
  useEffect(() => {
    window.scroll(0, 0);
  });
  return (
    <div>
      <ExpertiesHeader team="Experties" />
      <ExpertiesCards />
    </div>
  );
};

export default Experties;
