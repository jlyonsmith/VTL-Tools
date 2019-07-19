import React, { useState, useEffect, createRef, useContext } from "react";
import { TokenContext } from "./editor.component";
import PropTypes from "prop-types";

/* */
const Cursor = ({ endLine = false }) => {
  const [pos, setPos] = useState({ x: undefined, y: undefined });

  const ctx = useContext(TokenContext);
  const spanEl = createRef();
  useEffect(() => {
    const rect = spanEl.current.getBoundingClientRect();
    if (pos.x !== rect.x || pos.y !== rect.y) {
      setPos({ x: rect.x, y: rect.y });
      ctx.setPos({ x: rect.x, y: rect.y });
    }
  }, [ctx, pos.x, pos.y, spanEl]);

  return <span ref={spanEl} className={endLine ? "cursor-end" : "cursor"} />;
};

Cursor.propTypes = {
  endLine: PropTypes.bool
};

export default Cursor;
