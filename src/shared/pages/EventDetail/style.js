import { css } from '@emotion/react'

export const pageStyle = css``

export const contentStyle = showSuccess => {
  const successStyles = css`
    .success-graphic {
      transform: translateY(0) scale(1);
      opacity: 1;
    }
  `
  return css`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-grow: 1;
    width: 100%;

    ${showSuccess && successStyles}
  `
}

export const h2Style = css`
  margin-top: 50px;
  text-align: center;
`

export const textStyle = css`
  margin-top: auto;
  width: 85%;
  font-size: 16px;
  line-height: 1.75;
  color: #555;
  text-align: center;
`

export const errorStyle = css`
  min-height: 16px;
  margin-top: auto;
  font-size: 12px;
  color: #f00;
`

export const ctaStyle = css`
  margin-top: 10px;
`

export const successGraphicWrapperStyle = css`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
`

export const successGraphicStyle = css`
  width: 200px;
  transform: translateY(100%) scale(.5);
  opacity: 0;
  transition: all .4s ease-in-out;
`

export const footerStyle = css`
  margin-top: 30px;
`
