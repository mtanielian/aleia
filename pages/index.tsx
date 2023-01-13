import ListHouse from '@/components/ListHouse/ListHouse'
import useFetchHouses from '@/hooks/useFetchHouses'
import MainLayout from '../layouts/MainLayout'

const HomePage = () : JSX.Element => {
  const {loading, error} = useFetchHouses()
  return (
    <MainLayout>
      {loading && <h1>Loading...</h1>}
      {error && <h1>Error...</h1>}
      {!loading && !error &&  <ListHouse />}
    </MainLayout>
  )
}

export default HomePage