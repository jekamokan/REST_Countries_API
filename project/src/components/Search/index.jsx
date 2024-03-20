import {IoSearch} from 'react-icons/io5'
import './style.css'

const Search = ({search, setSearch}) => {
  return (
    <label className='label'>
        <IoSearch/>
        <input className='label-input' type="search" placeholder='Search for a country...' onChange={(e) => setSearch(e.target.value)} value={search} />
    </label>
  )
}

export default Search