import React, { useState } from 'react'

import Form from 'shared/components/common/Form'

import { fields } from './data'
import { signup } from './actions'

const Signup = ({ tracking }) => {
  const [isFormEnabled, setIsFormEnabled] = useState(true)
  const [error, setError] = useState('')

  const onSubmit = async (data) => {
    // disable button & make api call
    setIsFormEnabled(false)
    tracking('SIGNUP_CTA_CLICKED')
    
    const res = await signup(data)

    console.log("data", data, res)
    const { status, message } = res
    if (status === 1) {
      tracking('SIGNUP_ERROR')
      setError(message || 'Some error occurred. Please try again')
      setTimeout(() => {
        setError('')
      }, 5000)

      // re-enable button
      setIsFormEnabled(true)
    }

    // redirect to 'events' page after successful signup
    if (status === 0) {
      tracking('SIGNUP_SUCCESS')
      window.location.href = '/events'
    }
  }
  return (
    <>
      <h2>Sign up <span className='light'>for new users</span></h2>
      <Form onSubmit={onSubmit} fields={fields} isEnabled={isFormEnabled} error={error} cta='Sign up' />
    </>
  )
}

export default Signup