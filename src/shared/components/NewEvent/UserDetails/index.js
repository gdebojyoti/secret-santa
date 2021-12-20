import { useState } from 'react'

const UserDetails = ({ onChange: onChangeProp, label }) => {
  const [details, setDetails] = useState([])
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
    <div>
      <div>{label}</div>
      {details.map((detail, index) => {
        return <Row key={index} data={detail} index={index} onChange={onChange} onDelete={() => onDelete(index)} />
      })}
      
      <button onClick={addUser} type='button'>Add another user</button>
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
      {fields.map(({ type, key, label, isRequired }) => {
        const [value, setValue] = useState('')
        const onChange = (e) => {
          const fieldValue = e.target.value
          setValue(fieldValue) // update field input
          onChangeProp(index, key, fieldValue) // update form data
        }
        return (
          <div key={key}>
            <input
              onChange={onChange}
              name={key}
              value={data[key] || ''}
              type={type}
              placeholder={label}
              required={isRequired}
            />
          </div>
        )
      })}

      <button onClick={onDelete} type='button'>Delete user</button>
    </div>
  )
}

export default UserDetails