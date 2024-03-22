import axios from 'axios'
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5'
import { searchByCountry } from '../../config';
import './style.css'
import Info from '../../components/Info';
const Details = () => {
    const { name } = useParams();
    const navigate = useNavigate()
    const [country, setCountry] = useState(null)
    console.log('searchByCountry', country);

    useEffect(() => {
        axios.get(searchByCountry(name)).then(({ data }) => setCountry(data[0]))
    }, [name])

    return (
        <div className='details'>
            <button className='details__button' onClick={() => navigate(-1)}>
                <IoArrowBack /> Back
            </button>
            {country && <Info navigate={navigate} {...country}/>}
        </div>
    );
}

export default Details;