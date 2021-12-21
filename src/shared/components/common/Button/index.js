import { buttonStyle } from './style'

const Button = (props) => {
  const { text, onClick, variants, style } = props
  const cls = variants
  return (
    <button onClick={onClick} css={[buttonStyle, style]} className={cls}>{text}</button>
  )
}

export default Button