import axios from "axios";
import { useEffect, useState } from "react";
import { Sidebar } from "../components/Sidebar";
import { VideoPlayer } from "../components/VideoPlayer";
import { SearchBar } from '../components/SearchBar'

export default function Home() {
  const [keyword, setKeyword] = useState('beatles')
  const [data, setData] = useState()
  const [selected, setSelected] = useState(0)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    handleSearch()
  }, [keyword])

  const handleSearch = async () => {
    try {
      const response = await axios({
        method: 'get',
        url: '/api/search',
        params: {
          keyword: keyword
        }
      })
      if (response.status === 200) {
        setData(response.data)
        setIsLoading(false)
        setError(false)
      }
    } catch (error) {
      setError(true)
    }
  }

  const handleVideoSelect = (index) => {
    setSelected(index)
  }

  return (
    <div className='container mx-auto dark:text-white'>
      <SearchBar handleSearch={(text) => setKeyword(text)} />
      {isLoading && !data ? <p className='text-center'>Loading...</p> :
        <div className='flex flex-col lg:flex-row mt-4 w-full justify-between'>
          <VideoPlayer videoInfo={data?.currentPage[selected]} />
          <Sidebar
            videos={data?.currentPage}
            handleVideoSelect={handleVideoSelect}
            selected={selected}
          />
        </div>
      }
    </div >
  )
}
