/** @jsxImportSource @emotion/react */
import type { NextPage } from 'next'
import { css } from '@emotion/react'

const style = css({
  color: 'hotpink',
})

const Home: NextPage = () => {
  return (
    <div css={style}>
      emotionJS 테스트
    </div>
  )
}

export default Home
