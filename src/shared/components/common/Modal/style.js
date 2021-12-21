import { css, keyframes } from '@emotion/react'

import { swatches } from 'shared/styles/colors'

const fadeIn = keyframes`
  0% { opacity: 0 }
  100% { opacity: 1 }
`
export const modalBgStyle = css`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.54);
  opacity: 0;
  animation: ${fadeIn} .2s forwards;
`

const slideUp = keyframes`
  0% { transform: translateY(100%) }
  100% { transform: translateY(0) }
`
export const modalStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  bottom: 0;
  transform: translateY(100%);
  width: 100%;
  max-height: 80%;
  padding: 40px 25px 25px;
  background-color: #fff;
  border-radius: 25px 25px 0 0;
  overflow: auto;
  animation: ${slideUp} .2s .2s forwards;
  box-shadow: 0 0 50px 0 rgba(0,0,0,.54);

  &::before {
    content: '';
    position: absolute;
    top: 20px;
    width: 35px;
    height: 5px;
    border-radius: 5px;
    background-color: ${swatches.lightGray};
  }
`