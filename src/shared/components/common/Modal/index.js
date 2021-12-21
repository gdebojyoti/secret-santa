import { modalBgStyle, modalStyle } from './style'

const Modal = (props) => {
  const { children, onClose, style } = props
  const onClickCard = e => {
    e.stopPropagation()
  }
  return (
    <div css={[modalBgStyle, style]} onClick={onClose}>
      <div css={modalStyle} className='card' onClick={onClickCard}>
        {children}
      </div>
    </div>
  )
}

export default Modal