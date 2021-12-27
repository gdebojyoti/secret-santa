import { buttonStyle } from './style'

const Button = (props) => {
  const { text, onClick = () => {}, variants, isSubmit, isDisabled, style } = props
  const cls = variants
  return (
    <button
      disabled={isDisabled}
      type={isSubmit ? 'submit' : 'button'}
      onClick={onClick}
      css={[buttonStyle(isDisabled), style]}
      className={cls}
    >
      {text}
    </button>
  )
}

export default Button