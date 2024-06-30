import BaseForm from "./Form"
import FormItem from "./FormItem"

type TForm = typeof BaseForm & {
  Item: typeof FormItem
}

const Form = BaseForm as TForm
Form.Item = FormItem

export default Form
