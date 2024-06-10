import { ReactElement, cloneElement } from "react"
import { FieldValues, RegisterOptions, useFormContext } from "react-hook-form"

import "./Form.scss"

type Props = {
  name?: string
  children: ReactElement
  label?: string
  rules?: RegisterOptions<FieldValues, string> | undefined
}

function FormItem({ name, children, label, rules }: Props) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  const errMsg = errors?.[name ?? ""]?.message

  const child = cloneElement(children, { ...register(name ?? "", rules) })

  return (
    <div className="form-item-wrapper">
      <div className="form-item-label">{label}</div>
      <div>{child}</div>
      {errMsg && <div className="error">{String(errMsg)}</div>}
    </div>
  )
}

export default FormItem
