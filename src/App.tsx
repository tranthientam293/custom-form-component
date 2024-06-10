import { useForm } from "react-hook-form"
import "./App.scss"
import Form from "./components/Form"
import Input from "./components/Input"

function App() {
  const form = useForm()
  return (
    <Form form={form} onSubmit={(value) => console.log({ value })}>
      <Form.Item
        name="firstName"
        rules={{
          required: "This field is required",
          minLength: {
            value: 5,
            message: "At least 5 characters",
          },
        }}
      >
        <Input autoComplete="off" />
      </Form.Item>
      <button type="submit">Submit</button>
    </Form>
  )
}

export default App
