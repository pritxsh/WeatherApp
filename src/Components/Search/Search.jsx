import React, { useState } from 'react'
import "../Search/SearchStyle.css"
import { FaSearch } from "react-icons/fa";

const Search = ({search,setSearch,handleSearch}) => {

  return (
    <>
    <div className="searchcontainer">
        <input type="text" id='inputcity' placeholder='Enter City Name' value={search} autoComplete='false' onChange={(e)=>setSearch(e.target.value)}/>
        <button id='searchbtn' onClick={handleSearch}>
       <FaSearch size={20}/>
        </button>
    </div>
    </>
  )
}

export default Search