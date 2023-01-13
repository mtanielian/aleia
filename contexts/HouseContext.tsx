import { createContext, Dispatch, SetStateAction, useState } from 'react'
import { House } from '@/tsDefinitions/interfaces'


interface PropsCreateContext {
  houses: House[],
  loading: boolean,
  error: boolean,
  setHouses: Dispatch<SetStateAction<House[]>>,
  setLoading: Dispatch<SetStateAction<boolean>>,
  setError: Dispatch<SetStateAction<boolean>>
}

const valuesCreateContext = {
  houses: [],
  loading: false,
  error: false,
  setHouses: () => void [],
  setLoading: () => void false,
  setError: ()  => void false,
}


export const HouseContext = createContext<PropsCreateContext>(valuesCreateContext)




interface Props {
  children: JSX.Element
}

export const HouseContextProvider = ({ children } : Props) => {
  const [houses, setHouses] = useState<House[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  return (
    <HouseContext.Provider value={{ 
      houses, setHouses,
      loading, setLoading,
      error, setError
    }}>
      {children}
    </HouseContext.Provider>
  )
}


