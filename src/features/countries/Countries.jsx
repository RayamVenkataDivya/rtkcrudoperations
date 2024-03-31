import React from 'react'
import { useGetAllCountriesQuery } from '../../services/countriesApi';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
function Countries(){
    var {isLoading,data} = useGetAllCountriesQuery()
    // console.log(x)
    return(
        <div className="p-3 m-2 d-flex flex-wrap">
            <div className='w-50'>
                <h3>Countries</h3>
                {
                    isLoading && <h3>Loading....</h3>
                }
                {
                    !isLoading && data.map((country)=>{
                        return <li>
                                <Link to={country.name.common}>{country.name.common}</Link>
                            </li>
                    })
                }
            </div>
            <div className='w-50'>
                <Outlet></Outlet>
             </div>
            
        </div>
    )
}
export default Countries;