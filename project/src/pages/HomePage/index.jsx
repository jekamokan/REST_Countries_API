import axios from 'axios';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Controls from "../../components/Controls";
import List from "../../components/List";
import Card from "../../components/Card";
import { ALL_COUNTRIES } from '../../config';

const HomePage = ({countries ,setCountries}) => {
    const [filteredCountries, setFilteredCountries] = useState([])
    const handleSearch = (search, region) => {
        let data = [...countries]

        if(region){
            data = data.filter(c => c.region.includes(region))
        }
        if(search){
            data = data.filter(c => c.name.common.toLowerCase().includes(search.toLowerCase()))
        }
        setFilteredCountries(data)
    };
    
    const navigate = useNavigate();

    useEffect(() => {
        if(!countries.length) {
            axios.get(ALL_COUNTRIES)
                .then(({ data }) => {
                    setCountries(data);
                    setFilteredCountries(data); // Обновляем filteredCountries при получении новых данных
                })
        } else {
            // Если уже есть данные о странах, установим их для отображения
            setFilteredCountries(countries);
        }
    }, [countries, setCountries]); 

    return (
        <>
            <Controls onSearch={handleSearch}/>
            <List>
                {filteredCountries.map((c) => {
                    return <Card
                        onClick={() => navigate(`/country/${c.name.common}`)}
                        key={c.name.common}
                        img={c.flags.png}
                        name={c.name.common}
                        info={[
                            {
                                title: 'Population',
                                description: c.population.toLocaleString()
                            },
                            {
                                title: 'Region',
                                description: c.region
                            },
                            {
                                title: 'Capital',
                                description: c.capital
                            }
                        ]}
                    />;
                })}
            </List>
        </>
    )
}

export default HomePage;
