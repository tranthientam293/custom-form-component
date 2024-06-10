import { InputHTMLAttributes, forwardRef } from "react"

type Props = InputHTMLAttributes<HTMLInputElement>

const Input = forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <div>
      <input ref={ref} {...props} />
    </div>
  )
})

Input.displayName = "Input"

export default Input
