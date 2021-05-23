export const SearchBar = ({ handleSearch }) => {
  const handleKeyPress = event => {
    if (event.key === 'Enter' && event.target.value) {
      handleSearch(event.target.value)
    }
  }
  return (
    <input
      type='text'
      placeholder='Search'
      className='outline-none flex-1 border-solid border-2 rounded-sm border-gray-200 focus:border-gray-400 dark:border-gray-700 dark:bg-gray-900 p-1'
      onKeyPress={handleKeyPress}
    />
  )
}