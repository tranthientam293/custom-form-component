import {
  ChangeEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react"

import "./Input.scss"

import {
  InputFocusOptions,
  InputProps,
  InputRef,
  SelectionDirection,
} from "./interface"
import { resolveOnChange, triggerFocus } from "./utils"

const Input = forwardRef<InputRef, InputProps>((props, ref) => {
  const { onChange } = props
  const [value, setValue] = useState<string>("")
  const inputRef = useRef<HTMLInputElement>(null)

  function focus(option?: InputFocusOptions) {
    if (inputRef.current) {
      triggerFocus(inputRef.current, option)
    }
  }

  function triggerChange(
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.CompositionEvent<HTMLInputElement>,
    currentValue: string
  ) {
    const cutValue = currentValue

    setValue(cutValue)

    if (inputRef.current) {
      resolveOnChange(inputRef.current, e, onChange, cutValue)
    }
  }

  function onInternalChange(e: ChangeEvent<HTMLInputElement>) {
    triggerChange(e, e.target.value)
  }

  useImperativeHandle(
    ref,
    () => ({
      focus,
      blur: () => {
        inputRef.current?.blur()
      },
      setSelectionRange: (
        start: number,
        end: number,
        direction?: SelectionDirection
      ) => {
        inputRef.current?.setSelectionRange(start, end, direction)
      },
      select: () => {
        inputRef.current?.select()
      },
      input: inputRef.current,
    }),
    [inputRef]
  )

  return (
    <div className="input-wrapper">
      <input
        ref={inputRef}
        {...props}
        value={value}
        onChange={onInternalChange}
      />
    </div>
  )
})

Input.displayName = "Input"

export default Input
