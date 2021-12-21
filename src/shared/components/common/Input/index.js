import { inputWrapperStyle, labelStyle, inputFieldStyle } from './style'

const Input = (props) => {
  const {
    label,
    onChange,
    value,
    name,
    type,
    placeholder,
    isRequired,
    style
  } = props
  return (
    <div css={[inputWrapperStyle, style]} className='input'>
      {!!label && <label css={labelStyle}>{label}</label>}
      <input
        onChange={onChange}
        value={value}
        name={name}
        type={type}
        placeholder={placeholder}
        required={isRequired}
        css={inputFieldStyle}
      />
    </div>
  )
}

export default Input