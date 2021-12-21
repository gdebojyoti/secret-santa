import { modalBgStyle, modalStyle } from './style'

const Modal = (props) => {
  const { children, style } = props
  return (
    <div css={[modalBgStyle, style]}>
      <div css={modalStyle} className='card'>
        {children}
      </div>
    </div>
  )
}

export default Modal