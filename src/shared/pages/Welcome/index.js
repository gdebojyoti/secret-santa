import React, { useState } from 'react'

import MetaTags from 'shared/components/common/MetaTags'
import Image from 'shared/components/common/Image'
import Signup from 'shared/components/Welcome/Signup'
import Login from 'shared/components/Welcome/Login'

import logo from 'shared/assets/santa-claus.png'

import {
  pageStyle,
  logoStyle,
  flipStyle,
  footerStyle
} from './style'

const Welcome = () => {
  const [showSignup, setShowSignup] = useState(true)
  
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

      {showSignup && <Signup />}
      {!showSignup && <Login />}

      <Flip showSignup={showSignup} flip={() => setShowSignup(!showSignup)} />

      <footer css={footerStyle}>
        Made with ❤️ by <strong>Debojyoti Ghosh</strong>
      </footer>
    </div>
  )
}

const Flip = ({ showSignup, flip }) => {
  if (showSignup) {
    return (
      <div css={flipStyle} onClick={flip}>
        Already a user? Log in
      </div>
    )
  }

  return (
    <div css={flipStyle} onClick={flip}>
      Don't have an account? Sign up here
    </div>
  )
}

export default Welcome
