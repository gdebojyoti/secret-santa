import React, { useState } from 'react'

import Form from 'shared/components/common/Form'

import { fields } from './data'
import { login } from './actions'

const Login = ({ tracking }) => {
  const [isFormEnabled, setIsFormEnabled] = useState(true)
  const [error, setError] = useState('')

  const onSubmit = async (data) => {
    // disable button & make api call
    setIsFormEnabled(false)
    tracking('LOGIN_CTA_CLICKED')

    const res = await login(data)

    console.log("data", data, res)
    const { status, message } = res
    if (status === 1) {
      tracking('LOGIN_ERROR')
      setError(message || 'Some error occurred. Please try again')
      setTimeout(() => {
        setError('')
      }, 5000)

      // re-enable button
      setIsFormEnabled(true)
    }

    // redirect to 'events' page after login
    if (status === 0) {
      tracking('LOGIN_SUCCESS')
      window.location.href = '/events'
    }
  }
  
  return (
    <>
      <h2>Log in <span className='light'>for existing users</span></h2>
      <Form onSubmit={onSubmit} fields={fields} isEnabled={isFormEnabled} error={error} cta='Log in' />
    </>
  )
}

export default Login