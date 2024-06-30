import { ReactElement } from "react"

import { FieldValues, FormProvider, UseFormReturn } from "react-hook-form"

import "./Form.scss"

type FormProps<T extends FieldValues> = {
  form: UseFormReturn<T, unknown, undefined>
  className?: string
  children?: ReactElement[]
  onSubmit?: (values: T) => void
}

function Form<T extends FieldValues>({
  children,
  form,
  className,
  onSubmit,
}: FormProps<T>) {
  const handleSubmit = form.handleSubmit((data: T) => {
    if (typeof onSubmit === "function") {
      onSubmit(data)
    }
  })
  return (
    <FormProvider {...form}>
      <form className={className} onSubmit={handleSubmit}>
        {children}
      </form>
    </FormProvider>
  )
}

export default Form
