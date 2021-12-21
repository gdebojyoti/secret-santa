import React, { useState } from 'react'

import MetaTags from 'shared/components/common/MetaTags'
import Header from 'shared/components/common/Header'
import Footer from 'shared/components/common/Footer'
import Form from 'shared/components/common/Form'

import { createEvent } from './actions'
import { fields } from './data'
import { pageStyle, h2Style, formStyle } from './style'

const NewEvent = () => {
  const [isFormEnabled, setIsFormEnabled] = useState(true)
  const [error, setError] = useState('')

  const onSubmit = async (data) => {
    // disable button & make api call
    setIsFormEnabled(false)
    const res = await createEvent(data)

    const { status, message } = res
    if (status === 1) {
      setError(message || 'Some error occurred. Please try again')
      setTimeout(() => {
        setError('')
      }, 5000)

      // re-enable button
      setIsFormEnabled(true)
    }

    // redirect to 'events' page after login
    if (status === 0) {
      const { data: { eventId } = {} } = res
      window.location.href = `/event/${eventId}`
    }
  }

  return (
    <div className='page' css={pageStyle}>
      <MetaTags />

      <Header />

      <h2 css={h2Style}><span className='light'>Create</span> New Event</h2>
      <Form
        onSubmit={onSubmit}
        fields={fields}
        isEnabled={isFormEnabled}
        error={error}
        cta='Create event'
        style={formStyle}
      />

      <Footer />
    </div>
  )
}

export default NewEvent