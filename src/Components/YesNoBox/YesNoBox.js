import React from 'react'
import { Link } from 'react-router-dom'

const YesNoBox = (props) => {
  let {toggleYesNo} = props

  return (
    <div>
      Have you filled out the survey previously?
      <Link to='Results'>Yes</Link>
      <p onClick={toggleYesNo}>No</p>
    </div>
  )
}

export default YesNoBox