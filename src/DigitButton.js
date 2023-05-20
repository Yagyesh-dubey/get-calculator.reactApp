import { ACTIONS } from "./App"

// DigitButton component responsible for rendering a button for a specific digit
export default function DigitButton({ dispatch, digit }) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {digit}
    </button>
  )
}
