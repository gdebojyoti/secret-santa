import { css } from '@emotion/react'

import { swatches } from 'shared/styles/colors'

export const buttonStyle = isDisabled => {
  const disabledStyle = css`
    opacity: .7;
    pointer-events: none;
  `
  return css`
    height: 50px;
    padding: 0 30px;
    border: none;
    font-size: 12px;
    font-weight: 700;
    letter-spacing: 1px;
    border-radius: 4px;
    cursor: pointer;
    transition: opacity .2s;

    /* default styles */
    color: #333;
    background-color: #e7e7e7;
    text-transform: uppercase;

    /* variants */
    &.primary {
      color: #fff;
      background-color: ${swatches.santaRed};
    }
    &.full-width {
      width: 100%;
      max-width: 400px;
      border-radius: 25px;
    }

    ${isDisabled && disabledStyle}
  `
}
