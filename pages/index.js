import axios from "axios";
import Image from 'next/image'
import { useEffect, useState } from "react";

const VideoSearch = ({ handleSearch }) => {
  const handleKeyPress = event => {
    if (event.key === 'Enter' && event.target.value) {
      handleSearch(event.target.value)
    }
  }
  return (
    <div
      className='container border-solid border border-gray-200 rounded-sm flex flex-col p-2 shadow-md '
    >
      <label>Video Search</label>
      <input
        type='text'
        className='mt-2 outline-none border-solid border-2 rounded-sm border-gray-200 focus:border-gray-400 p-1'
        onKeyPress={handleKeyPress}
      />
    </div>
  )
}

const Sidebar = ({ videos, handleVideoSelect, selected }) => {
  return (
    <div
      className='flex flex-col w-full lg:w-1/3 lg:ml-2'
    >
      {videos && videos.map((video, index) => {
        const isSelected = selected === index

        return (
          <div
            key={video.id}
            onClick={() => handleVideoSelect(index)}
            className={`container mb-2 flex items-center justify-evenly border border-solid border-gray-200 shadow-md ${isSelected && 'bg-blue-400 text-white'}`}
          >
            <Image
              className=''
              src={video.thumbnails.default.url}
              width='160px'
              height='90px'
            />
            <h3
              className='overflow-hidden overflow-ellipsis  flex-1 ml-2 pr-2'
            >
              {video.title}
            </h3>
          </div>
        )
      })}



    </div>
  )
}

const VideoDescription = ({ title, description }) => {
  return (
    <div
      className='mt-2 mb-2 p-2 h-auto border border-solid border-gray-200 rounded-sm shadow-md'
    >
      <h2 className='p-1 mb-1 text-base font-bold break-all'>{title}</h2>
      <p className='p-1 text-justify text-sm'>{description}</p>
    </div>
  )
}


const VideoPlayer = ({ videoInfo }) => {
  return (
    <div className='w-full lg:w-2/3'>
      <div className='aspect-w-16 aspect-h-9'>
        <iframe
          src={`https://www.youtube.com/embed/${videoInfo?.id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <VideoDescription title={videoInfo?.title} description={videoInfo?.description} />
    </div>

  )
}

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
    <div className='container mx-auto'>
      <VideoSearch handleSearch={(text) => setKeyword(text)} />
      {isLoading && !data ? <p className='text-center'>Loading...</p> :
        <div className='flex flex-col lg:flex-row mt-4 w-full justify-between'>
          <VideoPlayer videoInfo={data?.currentPage[selected]} />
          <Sidebar videos={data?.currentPage} handleVideoSelect={handleVideoSelect} selected={selected} />
        </div>
      }
    </div >
  )
}
