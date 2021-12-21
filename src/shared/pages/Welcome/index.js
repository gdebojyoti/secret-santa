import React, { useState } from 'react'

import MetaTags from 'shared/components/common/MetaTags'
import Footer from 'shared/components/common/Footer'
import Image from 'shared/components/common/Image'
import Button from 'shared/components/common/Button'
import Modal from 'shared/components/common/Modal'
import Signup from 'shared/components/Welcome/Signup'
import Login from 'shared/components/Welcome/Login'

import logo from 'shared/assets/santa-claus.png'

import {
  pageStyle,
  logoStyle,
  headingStyle,
  textStyle,
  ctaStyle,
  flipStyle
} from './style'

const Welcome = () => {
  const [showModal, setShowModal] = useState(true)
  const [showSignup, setShowSignup] = useState(true)

  const onClickCta = () => {
    setShowModal(true)
  }
  
  return (
    <div className='page' css={pageStyle}>
      <MetaTags />

      <Image src={logo} style={logoStyle} alt='Secret Santa Dx logo' />
      
      <h1 css={headingStyle}>Secret Santa 🤫🎅</h1>
      
      <div css={textStyle}>
        Organize a secret gift exchange between friends or colleagues.
        The only app with 100% secrecy. No one gets to know who is the Santa to whom -
        not even the organizer!
      </div>

      <Button text='Get Started' variants='primary full-width' style={ctaStyle} onClick={onClickCta} />

      {showModal && <Modal>
        <Signup />
      </Modal>}

      {/* {showSignup && <Signup />} */}
      {!showSignup && <Login />}

      {/* <Flip showSignup={showSignup} flip={() => setShowSignup(!showSignup)} /> */}

      {/* <Footer /> */}
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
