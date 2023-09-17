import React, { useState } from "react";
import Button from "./Button";

function Accordion({ children, title }) {
  const [show, setShow] = useState(false);

  return (
    <div className={`accordion`}>
      <Button
        handleClick={() => setShow(!show)}
        isActive={show}
        className={`buttons `}
      >
        {show ? "Ocultar todo " : "Mostrar todo "}
        {title}
      </Button>
      {show && children}
    </div>
  );
}

export default Accordion;
