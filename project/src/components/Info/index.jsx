import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './style.css'
import { filterByCode } from '../../config';

const Info = (props) => {
    const {
        name,
        nativeName,
        flags,
        capital,
        population,
        region,
        subregion,
        tld = [],
        currencies = [],
        languages = [],
        borders = [],
        navigate
    } = props;

    const [neighbors, setNeighbors] = useState([]);

    useEffect(() => {
        if(borders && borders.length > 0){
            axios.get(filterByCode(borders)).then(({data}) => setNeighbors(data.map(c => c.name.common)))

        }
    }, [borders])

    const defaultCurrency = Object.keys(currencies)[0];
    const oldNativeName = Object.values(name.nativeName)[0]
    // Получение значения по этому ключу
    const currencyName = currencies[defaultCurrency]?.name;
    const languagesArr = Object.values(languages);
    console.log('oldNativeName', oldNativeName)


    return (
        <section className='info'>
            <img className='info__img' src={flags.png} alt={name} />
            <div>
                <h1 className='info__title'>{name.common}</h1>
                <div className='info__group'>
                    <ul className='info__list'>
                        <li className='info__list-item'><b>Native Name:</b> {oldNativeName.official} </li>
                        <li className='info__list-item'><b>Population:</b> {population} </li>
                        <li className='info__list-item'><b>Region:</b> {region} </li>
                        <li className='info__list-item'><b>Sub Region:</b> {subregion} </li>
                        <li className='info__list-item'><b>Capital:</b> {capital} </li>
                    </ul>
                    <ul className='info__list'>
                        <li className='info__list-item'><b>Top Level Domain: </b>{tld.map((d) => <span key={d}>{d}</span>)}</li>
                        <li className='info__list-item'><b>Currency: </b><span>{currencyName} </span></li>
                        <li className='info__list-item'><b>Language: </b>{languagesArr.map((l, index) => <span key={index}>{l} </span>)}</li>
                    </ul>
                </div>
                <div className='info__meta'>
                    <b>Border Coutries</b>
                    {!borders.length ? (
                        <span>There is no border countries</span>
                    ) : (
                        <div className='info__meta-group'>
                            {neighbors.map(b => (<span className='info__meta-card' key={b} onClick={() => navigate(`/country/${b}`)}>{b}</span>))}
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

export default Info