import React from 'react'
import { Link } from 'gatsby'
import {
  useTheme,
  useComponents
} from '@jxnblk/gatsby-theme-mdx-blog'

const modes = [
  'normal',
  'dark',
  'book',
]
const cycle = (arr, item) => {
  const i = (arr.indexOf(item) + 1) % arr.length
  return arr[i]
}

export default props => {
  const { mode, setMode } = useTheme()
  const Styled = useComponents()

  return (
    <header>
      <Styled.Container
        css={{
          display: 'flex',
          alignItems: 'center',
        }}>
        <Styled.h3 my={0}>
          <Styled.a as={Link} to='/'>
            Custom Header
          </Styled.a>
        </Styled.h3>
        <Styled.a as={Link} to='/blog'>
          Blog
        </Styled.a>
        <Styled.Box mx='auto' />
        <button
          onClick={e => {
            setMode(cycle(modes, mode))
          }}>
          {mode}
        </button>
    </Styled.Container>
    </header>
  )
}