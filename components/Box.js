import React from 'react';

function Box({
  label,
  top,
  left,
  height,
  width,
  style = {
    border: {
      fg: "blue",
    },
  },
  border = { type: "line" },
  children,
}) {
  const boxProps = { label, top, left, width, height, style, border };

  return (
    <box {...boxProps}>
      {`${JSON.stringify({ top, left, width, height }, null, 2)}`}
      {children}
    </box>
  );
}

export default Box;
