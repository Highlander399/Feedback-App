import React from 'react'

function Button({ children, version, type, isDisable}) {
  return (
    <button type={type} disabled={isDisable} className={`btn btn-${version}`}>
      {children}
    </button>
  )
}

Button.defaultProps = {
    type: "button",
    isDisable: false,
    version: "primary",
}
export default Button;
