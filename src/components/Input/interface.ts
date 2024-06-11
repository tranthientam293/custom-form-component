import { InputHTMLAttributes } from "react"

export type SelectionDirection = "forward" | "backward" | "none"

export interface InputFocusOptions extends FocusOptions {
  cursor?: "start" | "end" | "all"
}

export interface InputRef {
  focus: (options?: InputFocusOptions) => void
  blur: () => void
  setSelectionRange: (
    start: number,
    end: number,
    direction?: SelectionDirection
  ) => void
  select: () => void
  input: HTMLInputElement | null
}

export interface InputProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "value"> {}

export interface ChangeEventInfo {
  source: "compositionEnd" | "change"
}
