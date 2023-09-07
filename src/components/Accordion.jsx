import { useState } from "react";

function Accordion({ children, title }) {
  const [show, setShow] = useState(false);

  return (
    <div className="accordion">
      <button onClick={() => setShow(!show)}>
        {show ? "Ocultar todo " : "Mostrar todo "}
        {title}
      </button>
      {show && children}
    </div>
  );
}

export default Accordion;
