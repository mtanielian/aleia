import { useContext, useEffect } from 'react'
import { HouseContext } from '@/contexts/HouseContext'
import { getHouses } from '@/services/house.services'

const useFetchHouses = () => {
  const { setHouses, loading, error, setError, setLoading } = useContext(HouseContext)

  const loadHouses = async() => {
    try {
      setLoading(true)
      const data = await getHouses()
      setHouses(data)
      setLoading(false)
    } catch (error) {
      console.log(error)
      setError(true)
    }
  }

  useEffect(() => {
    loadHouses()
  }, [])


  return {
    loading, error
  }

}

export default useFetchHouses