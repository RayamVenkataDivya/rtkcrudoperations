import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetCountryDetailsByNameQuery } from '../../services/countriesApi';

function CountryDetails(){
    var x = useParams()
    // console.log(x)
    var {isLoading,data}=useGetCountryDetailsByNameQuery(x.cname);
    return (
        <div className='border border-2 border-dark p-2'>
            <h4>{x.cname} CountryDetails</h4>
            {
                isLoading && <h4>Loading...</h4>
            }
            {
                !isLoading && JSON.stringify(data)
            }
        </div>
    )
}
export default CountryDetails;