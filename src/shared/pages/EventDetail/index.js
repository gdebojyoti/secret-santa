import React, { useState, useEffect } from 'react'

import MetaTags from 'shared/components/common/MetaTags'
import Header from 'shared/components/common/Header'
import Image from 'shared/components/common/Image'
import Button from 'shared/components/common/Button'
import Footer from 'shared/components/common/Footer'

import successGraphic from 'shared/assets/gift.png'

import tracking from './tracking'
import { getEventDetails, triggerEvent } from './actions'
import {
  pageStyle,
  contentStyle,
  h2Style,
  textStyle,
  errorStyle,
  ctaStyle,
  successGraphicWrapperStyle,
  successGraphicStyle,
  footerStyle
} from './style'

const EventDetail = ({ match }) => {
  const {
    params: {
      id
    } = {}
  } = match || {}

  const [isCtaEnabled, setIsCtaEnabled] = useState(true)
  const [error, setError] = useState('')
  const [showSuccess, setShowSuccess] = useState(false)

  useEffect(() => {
    (async function () {
      // const data = await getEventDetails(id)
      // console.log("data!!!", data)
    })()
  }, [])

  const onClick = async () => {
    setIsCtaEnabled(false)
    tracking('EVENT_DETAIL_CTA_CLICKED')
    const res = await triggerEvent({ id })

    const { status, message } = res
    if (status !== 0) {
      tracking('EVENT_DETAIL_ERROR')
      setError(message || 'Some error occurred. Please try again')
      setTimeout(() => {
        setError('')
      }, 5000)

      // re-enable button
      setIsCtaEnabled(true)

      return
    }

    // show success graphic
    tracking('EVENT_DETAIL_SUCCESS')
    setShowSuccess(true)
  }

  return (
    <div className='page' css={pageStyle}>
      <MetaTags />

      <Header />

      <div css={contentStyle(showSuccess)}>
        {!showSuccess && <h2 css={h2Style}><span className='light'>Just one</span> last step</h2>}
        {showSuccess && <h2 css={h2Style}><span className='light'>All done.</span> Check your email!</h2>}
        
        {!showSuccess && <>
          <div css={textStyle}>
            <strong>Click the button</strong> below to dispatch emails to your fellow Santas.<br />
            Quickly! Before the reindeers run away..
          </div>
          <div css={errorStyle}>{error}</div>
          <Button
            isDisabled={!isCtaEnabled}
            text='Start distribution'
            variants='primary full-width'
            onClick={onClick}
            style={ctaStyle}
          />
        </>}

        <div css={successGraphicWrapperStyle} className='success-graphic-wrapper'>
          <Image src={successGraphic} style={successGraphicStyle} className='success-graphic' alt='Secret Santa Dx logo' />
        </div>
      </div>

      <Footer style={footerStyle} />
    </div>
  )
}

export default EventDetail
