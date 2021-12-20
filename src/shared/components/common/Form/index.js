import { useState } from 'react'

import { errorStyle } from './style'

const Form = ({ onSubmit: onSubmitProp, fields, isEnabled, error, cta = 'Submit' }) => {
  const [formData, setFormData] = useState({})
  
  const onSubmit = (e) => {
    if (!isEnabled) {
      return
    }
    e.preventDefault()
    onSubmitProp(formData)
  }

  const onChangeForm = (key, value) => {
    console.log(key, value);
    setFormData({
      ...formData,
      [key]: value
    })
  }

  return (
    <form onSubmit={onSubmit}>
      {fields.map(({ type, key, label, placeholder, isRequired }) => {
        const [value, setValue] = useState('')
        const onChange = (e) => {
          const fieldValue = e.target.value
          setValue(fieldValue) // update field input
          onChangeForm(key, fieldValue) // update form data
        }
        return (
          <div key={key}>
            <label>{label}</label>
            <input onChange={onChange} value={value} name={key} type={type} placeholder={placeholder} required={isRequired} />
          </div>
        )
      })}

      {error && <div css={errorStyle}>{error}</div>}
      <button disabled={!isEnabled} type='submit'>{cta}</button>
    </form>
  )
}

export default Form