import React, { useState } from "react";
import { useTheme } from "../context/ThemeContext";
import Button from "./Button";

function Accordion({ children, title }) {
  const [show, setShow] = useState(false);
  const theme = useTheme();

  return (
    <div className={`accordion ${theme}`}>
      <Button onClick={() => setShow(!show)} className={`buttons ${theme}`}>
        {show ? "Ocultar todo " : "Mostrar todo "}
        {title}
      </Button>
      {show && children}
    </div>
  );
}

export default Accordion;
