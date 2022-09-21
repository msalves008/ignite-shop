import type { NextPage } from 'next'
import { styled } from '../styles'

const Button = styled('button', {
  backgroundColor: '$rocketseat',
  borderRadius: 4,
  border: 0,
  padding: '4px 8px',

  span: {
    fontWeight: 'bold',
  },

  '&:hover': {
    filter: 'brightness(0.8)',
  },
})
const Home: NextPage = () => {
  return (
    <>
      <h1> hello world</h1>
      <Button>
        <span>Testedassd</span>
        Enviar
      </Button>
    </>
  )
}

export default Home
