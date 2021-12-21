import { css } from '@emotion/react'

import { swatches } from 'shared/styles/colors'

export const inputWrapperStyle = css`
  display: flex;
  flex-direction: column;
`

export const labelStyle = css`
  font-size: 12px;
  font-weight: 700;
`

export const inputFieldStyle = css`
  height: 40px;
  margin-top: 7px;
  padding: 0 10px;
  border-radius: 4px;
  border: solid 1px ${swatches.lightGray};
`