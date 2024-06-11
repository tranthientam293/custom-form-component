import { useForm } from "react-hook-form"
import "./App.scss"
import Form from "./components/Form"
import Input from "./components/Input"

function App() {
  const form = useForm()

  function onSubmit(value: unknown) {
    console.log({ value })
  }
  return (
    <Form form={form} onSubmit={onSubmit}>
      <Form.Item name="firstName">
        <Input autoComplete="off" />
      </Form.Item>
      <button type="submit">Submit</button>
    </Form>
  )
}

export default App
