import { ReactElement } from "react"

import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form"

import "./Form.scss"

type FormProps = {
  children: ReactElement | ReactElement[]
  form: UseFormReturn<FieldValues, unknown, undefined>
  onSubmit?: (values: unknown) => void
}

function Form({ children, form, onSubmit }: FormProps) {
  const handleSubmit = form.handleSubmit((data: unknown) => {
    if (typeof onSubmit === "function") {
      onSubmit(data)
    }
  })
  return (
    <FormProvider {...form}>
      <form className="main-form" onSubmit={handleSubmit}>
        {children}
      </form>
    </FormProvider>
  )
}

export default Form
