import React, { InputHTMLAttributes } from "react"

type CheckboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "type">

const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  (props, ref) => {
    return <input type="checkbox" ref={ref} {...props} />
  }
)

Checkbox.displayName = "Checkbox"

export default Checkbox
