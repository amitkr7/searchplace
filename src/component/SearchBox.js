import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SearchTable from './SearchTable'

const SearchBox = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchPlace, setSearchPlace] = useState([])

  useEffect(() => {
    const data = getData(searchTerm)
    setSearchPlace(data)
  }, [searchTerm])

  const getData = (searchTerm) => {
    var options = {
      method: 'GET',
      url: process.env.APIURL,
      params: { query: `${searchTerm}` },
      headers: {
        'x-rapidapi-key': process.env.RAPIDAPIKEY,
        'x-rapidapi-host':
          'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com',
      },
    }

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data)
        return response.data
      })
      .catch(function (error) {
        console.error(error)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  const handleChange = (e) => {
    setSearchTerm(e.target.value)
    console.log(e.target.value)
  }

  return (
    <>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type='text'
          className='search-box'
          onChange={(e) => handleChange(e)}
        />
      </form>
      {searchPlace
        ? searchPlace.map((place, placeIdx) => (
            <SearchTable
              key={placeIdx}
              placeName={place.PlaceName}
              country={place.CountryName}
            />
          ))
        : ''}
    </>
  )
}

export default SearchBox
