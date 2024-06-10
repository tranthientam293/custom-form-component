import BaseForm from "./Form"
import FormItem from "./FormItem"

type BaseFormType = typeof BaseForm

type TForm = BaseFormType & {
  Item: typeof FormItem
}

const Form = BaseForm as TForm
Form.Item = FormItem

export default Form
