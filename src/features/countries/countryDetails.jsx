import React from 'react'
import { useParams } from 'react-router-dom';
import { useGetCountryDetaileByNameQuery } from '../../services/countriesApi';
function CountryDetails(){
    var x = useParams()
    // console.log(x)
    var {isLoading,data}= useGetCountryDetaileByNameQuery(x.cname)
    return(
        <div className='p-3 border border-2'>
            <h4>CountryDetails</h4>
            {
                isLoading && <h5>Loading....</h5>
            }
            {
                !isLoading && JSON.stringify(data)
            }
        </div>

    )
}
export default CountryDetails;