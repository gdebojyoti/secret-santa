import Image from 'shared/components/common/Image'

import logo from 'shared/assets/santa-hat.png'

import { headerStyle, headingStyle, logoStyle } from './style'

const Header = () => {
  return (
    <header css={headerStyle}>
      <Image src={logo} style={logoStyle} alt='Secret Santa Dx logo' />
      <h1 css={headingStyle}>
        Secret Santa
        <br />
        🤫🎅
      </h1>
    </header>
  )
}

export default Header