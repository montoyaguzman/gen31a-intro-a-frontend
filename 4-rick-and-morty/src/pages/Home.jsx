import { useEffect } from 'react'
import { getCharacters } from '../services/characterServices'

const Home = () => {

  const getInitialData = async () => {
    try {
      const { data } = await getCharacters()
      console.log(data)
    } catch (error) {
      alert('Algo fallo en la petición')
    }
  }

  useEffect(() => {
    getInitialData()
  }, [])

  return (
    <div>Home</div>
  )
}

export default Home