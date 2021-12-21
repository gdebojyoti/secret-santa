import Image from 'shared/components/common/Image'

import logo from 'shared/assets/santa-claus.png'

import { headerStyle, headingStyle, logoStyle } from './style'

const Header = () => {
  return (
    <header css={headerStyle}>
      <Image src={logo} style={logoStyle} alt='Secret Santa Dx logo' />
      <h1 css={headingStyle}>
        Secret Santa 🤫🎅
      </h1>
    </header>
  )
}

export default Header