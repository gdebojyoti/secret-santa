import { css } from '@emotion/react'

import { swatches } from 'shared/styles/colors'

export const buttonStyle = css`
  height: 50px;
  padding: 0 30px;
  border: none;
  font-size: 12px;
  font-weight: 700;
  letter-spacing: 1px;
  border-radius: 4px;
  cursor: pointer;

  /* variants */
  &.primary {
    color: #fff;
    background-color: ${swatches.santaRed};
    text-transform: uppercase;
  }

  &.full-width {
    width: 100%;
    max-width: 400px;
    border-radius: 25px;
  }
`
