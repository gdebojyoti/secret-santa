import { useState } from 'react'

import Input from 'shared/components/common/Input'
import Button from 'shared/components/common/Button'

import { formStyle, inputStyle, errorStyle, ctaStyle } from './style'

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
    <form css={formStyle} onSubmit={onSubmit}>
      {fields.map(({ type, key, component: Component, label, placeholder, isRequired }) => {
        const [value, setValue] = useState('')
        const onChange = (e) => {
          const fieldValue = type === 'custom' ? e : e.target.value
          setValue(fieldValue) // update field input
          onChangeForm(key, fieldValue) // update form data
        }
        switch (type) {
          case 'custom': {
            return (
              <Component
                key={key}
                label={label}
                placeholder={placeholder}
                isRequired={isRequired}
                onChange={onChange}
              />
            )
          }
          default: {
            return (
              <Input
                key={key}
                label={label}
                onChange={onChange}
                value={value}
                name={key}
                type={type}
                placeholder={placeholder}
                isRequired={isRequired}
                style={inputStyle}
              />
            )
          }
        }
      })}

      {<div css={errorStyle}>{error}</div>}
      <Button
        isSubmit
        isDisabled={!isEnabled}
        text={cta}
        variants='primary full-width'
        style={ctaStyle}
      />
    </form>
  )
}

export default Form