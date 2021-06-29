import React from 'react'

const SearchTable = ({ placeName, country }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <td>#</td>
            <td>Place Name</td>
            <td>Country</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{placeName}</td>
            <td>{country}</td>
          </tr>
        </tbody>
      </table>
    </>
  )
}

export default SearchTable
