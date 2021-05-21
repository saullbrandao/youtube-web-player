const VideoDescription = ({ title, description }) => {
  return (
    <div
      className='mt-2 mb-2 p-2 h-auto border border-solid border-gray-200 dark:border-gray-700 rounded-sm shadow-md'
    >
      <h2 className='p-1 mb-1 text-base font-bold break-all'>{title}</h2>
      <p className='p-1 text-justify text-sm'>{description}</p>
    </div>
  )
}


export const VideoPlayer = ({ videoInfo }) => {
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