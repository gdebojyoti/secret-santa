import React, { useState } from 'react'

import MetaTags from 'shared/components/common/MetaTags'
import Footer from 'shared/components/common/Footer'
import Image from 'shared/components/common/Image'

import logo from 'shared/assets/santa-claus.png'

import { pageStyle, logoStyle } from './style'

const NewEvent = () => {
  return (
    <div css={pageStyle}>
      <MetaTags />

      <header>
        <Image src={logo} style={logoStyle} alt='Secret Santa Dx logo' />
        <h1>
          Secret Santa Dx 🤫🎅 <br />
          The real app with 100% secrecy!
        </h1>
      </header>

      New Event page

      <Footer />
    </div>
  )
}

export default NewEvent