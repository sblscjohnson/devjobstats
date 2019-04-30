import React, { useState, useEffect } from 'react'

const Survey = (props) => {
  const [ highestEd, setHighestEd ] = useState(null)

  const editSelect = (val) => {
    setHighestEd(val)
  }

  return (
    <div>
      {highestEd}
      <h2>Highest level of Traditional Education</h2>
      <select onChange={(e) => editSelect(e.target.value)} value={highestEd}>
        <option value={null}>--</option>
        <option value={1}>Lower than HS Diploma</option>
        <option value={2}>HS Diploma or GED</option>
        <option value={3}>Associate's Degree</option>
        <option value={4}>Bachelor's Degree</option>
        <option value={5}>Master's Degree</option>
        <option value={6}>Doctorate Degree</option>
      </select>
      <h2>If so, what did you study?</h2>
      <select>
        <option>I did not</option>
        <option>Business</option>
        <option>Computer science or related</option>
        <option>Engineering aside from CS</option>
        <option>Other science</option>
        <option>Humanities</option>
      </select>
    </div>
  )
}

export default Survey