export const SearchBar = ({ handleSearch }) => {
  const handleKeyPress = event => {
    if (event.key === 'Enter' && event.target.value) {
      handleSearch(event.target.value)
    }
  }
  return (
    <div
      className='container border-solid border border-gray-200 dark:border-gray-700 rounded-sm flex flex-col p-2 mt-2 shadow-md'
    >
      <label>Video Search</label>
      <input
        type='text'
        className='mt-2 outline-none border-solid border-2 rounded-sm border-gray-200 focus:border-gray-400 dark:border-gray-700 dark:bg-gray-900 p-1'
        onKeyPress={handleKeyPress}
      />
    </div>
  )
}