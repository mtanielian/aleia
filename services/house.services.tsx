import api from './api'

export const getHouses = async () => {
  const { data } = await api.get('mocks/houses.json')
  return data
}