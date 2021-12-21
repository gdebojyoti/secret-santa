import React, { useState } from 'react'

import MetaTags from 'shared/components/common/MetaTags'
import Footer from 'shared/components/common/Footer'
import Image from 'shared/components/common/Image'
import Form from 'shared/components/common/Form'

import logo from 'shared/assets/santa-claus.png'

import { createEvent } from './actions'
import { fields } from './data'
import { pageStyle, headerStyle, headingStyle, h2Style, logoStyle, formStyle } from './style'

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

      <header css={headerStyle}>
        <Image src={logo} style={logoStyle} alt='Secret Santa Dx logo' />
        <h1 css={headingStyle}>
          Secret Santa 🤫🎅
        </h1>
      </header>

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