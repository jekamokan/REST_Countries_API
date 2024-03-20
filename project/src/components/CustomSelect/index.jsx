import './style.css'

import Select from 'react-select';



const CustomSelect = ({options, region, setRegion}) => {

    const customStyles = {
        control: (provided) => ({
          ...provided,
          border: 'none',
          borderRadius: 5,
          padding: '10px',
          backgroundColor: 'var(--colors-ui-base)',
          boxShadow: 'var(--shadow)',
          width: '200px',
          fontFamily: 'var(--family)'
        }),
        option: (provided, state) => ({
          ...provided,
          cursor: 'pointer',
          color: 'var(--colors-text)',
          backgroundColor: state.isSelected ? 'var(--colors-bg)' : 'var(--colors-ui-base)',
          boxShadow: 'var(--shadow)',
          paddingLeft: '20px'
         }),
       };

  return (
    <>
      <Select
        styles={customStyles}
        className="basic-single"
        classNamePrefix="select"
        defaultValue='Filtered by Region'
        name="region"
        options={options}
        placeholder="Filter by Region"
        isClearable 
        value={region}
        isSearchable={false}
        onChange={setRegion}
      />
    </>
  );
};
export default CustomSelect