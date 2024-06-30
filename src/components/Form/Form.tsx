import { ReactElement } from "react"

import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form"

import "./Form.scss"

type FormProps<T extends FieldValues> = {
  children?: ReactElement | ReactElement[]
  form: UseFormReturn<T, unknown, undefined>
  onSubmit?: (values: T) => void
}

function Form<T extends FieldValues>({
  children,
  form,
  onSubmit,
}: FormProps<T>) {
  const handleSubmit = form.handleSubmit((data: T) => {
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
