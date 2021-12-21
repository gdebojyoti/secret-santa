import { useState } from 'react'

import Input from 'shared/components/common/Input'
import Button from 'shared/components/common/Button'

import { userDetailsStyle, labelStyle, addCtaStyle, rowLabelStyle, deleteCtaStyle } from './style'

const UserDetails = ({ onChange: onChangeProp, label }) => {
  const [details, setDetails] = useState([{}])
  const onChange = (index, key, value) => {
    const rowData = details[index] || {}
    rowData[key] = value

    const newDetails = [...details]
    newDetails[index] = rowData
    setDetails(newDetails)

    onChangeProp(newDetails)
  }
  const addUser = () => {
    setDetails([...details, {}])
  }
  const onDelete = (index) => {
    const newDetails = [...details]
    newDetails.splice(index, 1)
    setDetails(newDetails)
    onChangeProp(newDetails)
  }
  return (
    <div css={userDetailsStyle} className='input'>
      <div css={labelStyle}>{label}</div>
      {details.map((detail, index) => {
        return <Row key={index} data={detail} index={index} onChange={onChange} onDelete={() => onDelete(index)} />
      })}
      
      <Button onClick={addUser} text='Add another user' variants='full-width' style={addCtaStyle} />
    </div>
  )
}

const fields = [
  {
    type: 'text',
    key: 'name',
    label: 'User\'s name',
    // placeholder: 'Please enter a password',
    isRequired: true
  },
  {
    type: 'email',
    key: 'email',
    label: 'User\'s email ID',
    // placeholder: 'Please enter your email ID',
    isRequired: true
  }
]

const Row = ({ data, onChange: onChangeProp, index, onDelete }) => {
  return (
    <div>
      <div css={rowLabelStyle}>
        <span>User #{index + 1}</span>
        <button css={deleteCtaStyle} onClick={onDelete} type='button'>Delete user</button>
      </div>

      {fields.map(({ type, key, label, isRequired }, fieldIndex) => {
        const [value, setValue] = useState('')
        const onChange = (e) => {
          const fieldValue = e.target.value
          setValue(fieldValue) // update field input
          onChangeProp(index, key, fieldValue) // update form data
        }
        return (
          <div key={key}>
            <Input
              onChange={onChange}
              value={data[key] || ''}
              name={key}
              type={type}
              placeholder={label}
              isRequired={isRequired}
            />
          </div>
        )
      })}
    </div>
  )
}

export default UserDetails