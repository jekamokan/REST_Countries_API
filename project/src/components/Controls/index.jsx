import { useEffect, useState } from 'react'
import Search from '../Search'
import CustomSelect from '../CustomSelect'
import './style.css'

const options = [
  { value: 'Africa', label: 'Africa' },
  { value: 'America', label: 'America' },
  { value: 'Asia', label: 'Asia' },
  { value: 'Europe', label: 'Europe' },
  { value: 'Oceania', label: 'Oceania' }
]

const Controls = ({onSearch}) => {
  const [search, setSearch] = useState('');
  const [region, setRegion] = useState('');
console.log(search)
  useEffect(()=>{
    const regionValue = region?.value || '';
    onSearch(search, regionValue)
    //eslint-disable-next-line
  },[search,region])
  return (
    <div className='wrapper'>
      <Search search={search} setSearch={setSearch} />
      <CustomSelect 
      options={options}
      region={region}
      setRegion={setRegion}  />
    </div>
  )
}

export default Controls