import { css } from '@emotion/react'

export const formStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 350px;
  margin-top: 30px;

  .input:first-of-type {
    margin-top: 0;
  }
`

export const inputStyle = css`
  width: 100%;
  margin-top: 18px;
`

export const errorStyle = css`
  min-height: 16px;
  margin-top: 10px;
  font-size: 12px;
  color: #f00;
`

export const ctaStyle = css`
  margin-top: 10px;
`