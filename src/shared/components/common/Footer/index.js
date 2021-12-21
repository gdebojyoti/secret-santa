import { footerStyle } from './style'

const Footer = ({ style }) => {
  return (
    <footer css={[footerStyle, style]}>
      Made with ❤️ by <strong>Debojyoti Ghosh</strong>
    </footer>
  )
}

export default Footer