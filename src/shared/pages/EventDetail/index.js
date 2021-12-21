import React, { useState, useEffect } from 'react'

import MetaTags from 'shared/components/common/MetaTags'
import Footer from 'shared/components/common/Footer'
import Image from 'shared/components/common/Image'

import logo from 'shared/assets/santa-claus.png'

import { getEventDetails, triggerEvent } from './actions'
import {
  pageStyle,
  logoStyle
} from './style'

const EventDetail = ({ match }) => {
  const {
    params: {
      id
    } = {}
  } = match || {}

  const [isCtaEnabled, setIsCtaEnabled] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    (async function () {
      const data = await getEventDetails(id)
      console.log("data!!!", data)
    })()
  }, [])

  const onClick = async () => {
    setIsCtaEnabled(false)
    const res = await triggerEvent({ id })

    const { status, message } = res
    if (status === 1) {
      setError(message || 'Some error occurred. Please try again')
      setTimeout(() => {
        setError('')
      }, 5000)

      // re-enable button
      setIsCtaEnabled(true)
    }

    // redirect to 'events' page after login
    if (status === 0) {
      alert("Success! Now go check your email")
    }
  }

  return (
    <div className='page' css={pageStyle}>
      <MetaTags />

      <header>
        <Image src={logo} style={logoStyle} alt='Secret Santa Dx logo' />
        <h1>
          Secret Santa Dx 🤫🎅 <br />
          The real app with 100% secrecy!
        </h1>
      </header>

      <h2>1 last step!</h2>
      {error}
      <button disabled={!isCtaEnabled} onClick={onClick}>Start distribution!</button>

      <Footer />
    </div>
  )
}

export default EventDetail
