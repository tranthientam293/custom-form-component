import React from "react"

import {
  Controller,
  ControllerProps,
  FieldValues,
  RegisterOptions,
  useFormContext,
} from "react-hook-form"
import classNames from "classnames"

import "./Form.scss"

export type FormItemProps = {
  name?: string
  children: React.ReactElement
  label?: string
  rules?: RegisterOptions<FieldValues, string> | undefined
  required?: boolean
}

function FormItem({
  name = "",
  children,
  label,
  rules,
  required,
}: FormItemProps) {
  const { control } = useFormContext()

  const render: ControllerProps["render"] = ({ field, fieldState }) => {
    const errMsg = fieldState.error?.message ?? ""

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
          {React.cloneElement(children, { ...field })}
        </div>
        <div className="form-item-error">{errMsg}</div>
      </div>
    )
  }

  return (
    <Controller name={name} rules={rules} control={control} render={render} />
  )
}

export default FormItem
