import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from "yup"

import "./App.scss"

import Input from "rc-input"
import TextArea from "rc-textarea"
import Form from "./components/Form"
import Checkbox from "./components/Checkbox/Checkbox"

type FormData = {
  name: string
  email: string
  subject: string
  message: string
  agreement: boolean
}

const schema = yup
  .object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string().required(),
    agreement: yup.boolean().required(),
  })
  .required()

function App() {
  const form = useForm<FormData>({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  })

  const {
    formState: { isValid, isDirty },
  } = form

  const disabled = !(isDirty && isValid)

  function onSubmit(values: FormData) {
    console.log(values)
  }

  return (
    <div className="container">
      <Form form={form} onSubmit={onSubmit} className="feedback-form">
        <div className="title">Feedback Form</div>
        <Form.Item name="name" label="Name" required>
          <Input placeholder="Enter name" autoComplete="off" />
        </Form.Item>

        <Form.Item name="email" label="Email" required>
          <Input placeholder="Enter email" autoComplete="off" />
        </Form.Item>

        <Form.Item name="subject" label="Subject" required>
          <Input placeholder="Enter subject" autoComplete="off" />
        </Form.Item>

        <Form.Item name="message" label="Message" required>
          <TextArea rows={5} placeholder="Enter message" autoComplete="off" />
        </Form.Item>

        <Form.Item name="agreement" label="Agreement" required>
          <Checkbox />
        </Form.Item>

        <button className="submit-btn" disabled={disabled}>
          Submit
        </button>
      </Form>
    </div>
  )
}

export default App
