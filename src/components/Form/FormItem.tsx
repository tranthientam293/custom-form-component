import { ReactElement, cloneElement } from "react"
import {
  Controller,
  FieldValues,
  RegisterOptions,
  useFormContext,
} from "react-hook-form"

import "./Form.scss"

type Props = {
  name?: string
  children: ReactElement
  label?: string
  rules?: RegisterOptions<FieldValues, string> | undefined
}

function FormItem({ name, children, label }: Props) {
  const {
    control,
    formState: { errors },
  } = useFormContext()

  const errMsg = errors?.[name ?? ""]?.message

  return (
    <Controller
      name={name ?? ""}
      control={control}
      render={({ field }) => (
        <div className="form-item-wrapper">
          <div className="form-item-label">{label}</div>
          <div>{cloneElement(children, { ...field })}</div>
          {errMsg && <div className="error">{String(errMsg)}</div>}
        </div>
      )}
    />
  )
}

export default FormItem
