import React from "react"
import { useGetAllCountriesQuery } from "../../services/countriesApi";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

function Countries(){
    var {isLoading,data}=useGetAllCountriesQuery()
    // var x=useGetAllCountriesQuery();
    // console.log(x)
    return (
        <div className="mybox d-flex flex-wrap">
            <div className="w-50">
                <h2>Countries</h2>
                {
                    isLoading && <h2>Loading...</h2>
                }
                {
                    !isLoading && data.map((country)=>{
                        return <li>
                                <Link to={country.name.common}>{country.name.common}</Link>
                            </li>
                    })
                }
            </div>
            <div className="w-50">
                <Outlet/>
            </div>
           
        </div>
    )
}
export default Countries;