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
  const [showModal, setShowModal] = useState(false)
  const [showSignup, setShowSignup] = useState(true)

  const onClickCta = () => {
    // setShowSignup(true)
    setShowModal(true)
  }

  const onCloseModal = () => {
    setShowModal(false)
  }

  const onFlipClick = () => {
    setShowModal(false)
    setShowSignup(!showSignup)

    setTimeout(() => {
      setShowModal(true)
    }, 0)
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

      {showModal && <Modal onClose={onCloseModal}>
        {showSignup && <Signup />}
        {!showSignup && <Login />}
        <Flip showSignup={showSignup} flip={onFlipClick} />
      </Modal>}

      <Footer />
    </div>
  )
}

const Flip = ({ showSignup, flip }) => {
  return (
    <div css={flipStyle} onClick={flip}>
      {showSignup ? 'Already a user' : `Don't have an account`}
      ? <strong>{showSignup ? 'Log in' : 'Sign up'}</strong> here
    </div>
  )
}

export default Welcome
