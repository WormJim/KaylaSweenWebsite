import React, { useState, useEffect } from 'react'
// import { ComposableMap, Geographies, Geography } from 'react-simple-maps'
// import { scaleQuantile } from 'd3-scale'

// const geoUrl = '../../data/MSCounties.json'

const CasesPerPop = (props) => {
  const [data, setData] = useState()

  useEffect(() => {
    fetch('https://ms-covid-tracker.herokuapp.com/api/v1/counties', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => setData(response))
      .then(() => console.log(data))
      .catch(err => console.log(err))
  }, [])
  return (
    <div></div>
  )
}

export default CasesPerPop