import React, { useState } from 'react'

import Form from 'shared/components/common/Form'

import { fields } from './data'
import { signup } from './actions'

const Signup = () => {
  const [isFormEnabled, setIsFormEnabled] = useState(true)
  const [error, setError] = useState('')

  const onSubmit = async (data) => {
    // disable button & make api call
    setIsFormEnabled(false)
    const res = await signup(data)

    console.log("data", data, res)
    const { status, message } = res
    if (status === 1) {
      setError(message || 'Some error occurred. Please try again')
      setTimeout(() => {
        setError('')
      }, 5000)

      // re-enable button
      setIsFormEnabled(true)
    }

    // redirect to 'events' page after successful signup
    if (status === 0) {
      window.location.href = '/events'
    }
  }
  return (
    <>
      <h2>Sign up</h2>
      <Form onSubmit={onSubmit} fields={fields} isEnabled={isFormEnabled} error={error} cta='Sign up' />
    </>
  )
}

export default Signup