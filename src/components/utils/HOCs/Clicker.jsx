import React, { useState } from "react";

function Clicker({ children }) {
  const [state, setstate] = useState(false);
  return <>{children}</>;
}

export default Clicker;
