import { ReactElement, cloneElement } from "react"
import {
  Controller,
  FieldValues,
  RegisterOptions,
  useFormContext,
} from "react-hook-form"
import classNames from "classnames"

import "./Form.scss"

type RenderField = Parameters<typeof Controller>[0]["render"]

type Props = {
  name?: string
  children: ReactElement
  label?: string
  rules?: RegisterOptions<FieldValues, string> | undefined
  required?: boolean
}

function FormItem({ name = "", children, label, rules, required }: Props) {
  const { control } = useFormContext()

  const render: RenderField = ({ field, fieldState }) => {
    const errMsg = fieldState.error?.message

    return (
      <div className="form-item-wrapper">
        <div
          className={classNames("form-item-label", {
            ["required"]: required,
          })}
        >
          {label}
        </div>
        <div className="form-item-content">
          {cloneElement(children, { ...field })}
        </div>
        {!!errMsg && <div className="form-item-error">{String(errMsg)}</div>}
      </div>
    )
  }

  return (
    <Controller name={name} rules={rules} control={control} render={render} />
  )
}

export default FormItem
