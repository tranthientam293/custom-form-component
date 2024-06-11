import { InputFocusOptions } from "./interface"

/* eslint-disable @typescript-eslint/no-explicit-any */
export function cloneEvent<
  EventType extends React.SyntheticEvent<any, any>,
  Element extends HTMLInputElement
>(event: EventType, target: Element, value: any): EventType {
  const currentTarget = target.cloneNode(true) as Element

  // click clear icon
  const newEvent = Object.create(event, {
    target: { value: currentTarget },
    currentTarget: { value: currentTarget },
  })

  // Fill data
  currentTarget.value = value

  // Fill selection. Some type like `email` not support selection
  // https://github.com/ant-design/ant-design/issues/47833
  if (
    typeof target.selectionStart === "number" &&
    typeof target.selectionEnd === "number"
  ) {
    currentTarget.selectionStart = target.selectionStart
    currentTarget.selectionEnd = target.selectionEnd
  }

  return newEvent
}

export function resolveOnChange<E extends HTMLInputElement>(
  target: E,
  e:
    | React.ChangeEvent<E>
    | React.MouseEvent<HTMLElement, MouseEvent>
    | React.CompositionEvent<HTMLElement>,
  onChange: undefined | ((event: React.ChangeEvent<E>) => void),
  targetValue?: string
) {
  if (!onChange) {
    return
  }
  let event = e

  if (e.type === "click") {
    event = cloneEvent(e, target, "")

    onChange(event as React.ChangeEvent<E>)
    return
  }

  // Trigger by composition event, this means we need force change the input value
  if (target.type !== "file" && targetValue !== undefined) {
    event = cloneEvent(e, target, targetValue)
    onChange(event as React.ChangeEvent<E>)
    return
  }
  onChange(event as React.ChangeEvent<E>)
}

export function triggerFocus(
  element?: HTMLInputElement,
  option?: InputFocusOptions
) {
  if (!element) return

  element.focus(option)

  // Selection content
  const { cursor } = option || {}
  if (cursor) {
    const len = element.value.length

    switch (cursor) {
      case "start":
        element.setSelectionRange(0, 0)
        break

      case "end":
        element.setSelectionRange(len, len)
        break

      default:
        element.setSelectionRange(0, len)
    }
  }
}
