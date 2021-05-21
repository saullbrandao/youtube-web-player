import Image from "next/image"

export const Sidebar = ({ videos, handleVideoSelect, selected }) => {
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
            className={`container mb-1 flex items-center justify-evenly border border-solid border-gray-200 dark:border-gray-700 shadow-md ${isSelected && 'bg-blue-400 text-white'}`}
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