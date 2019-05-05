import React from 'react'
import YesNoBox from './../YesNoBox/YesNoBox'

class Survey extends React.Component {
  state = {
    highestEd: '',
    yesNo: false
  }

  editSelect = (name, val) => {
    this.setState({
      [name]: val
    })
  }

  toggleYesNo = () => {
    this.setState({
      yesNo: true
    })
  }

  render() {
    document.title = 'Survey'

    let { highestEd, yesNo } = this.state
    return (
      <div className='content'>
        {(!yesNo)
        && <YesNoBox toggleYesNo={this.toggleYesNo} />
        }
        { highestEd }
        <h2>This is a brief survey about your FIRST dev job and some of the details around it.</h2>
        <h2>This is to help out bootcamp and college grads, or just anyone trying to get into the industry.</h2>
        <h2>Highest level of Traditional Education</h2>
        <select onChange={(e) => this.editSelect('highestEd', e.target.value)} value={ highestEd }>
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
          <option>None</option>
          <option>Software or related</option>
          <option>Other STEM field</option>
          <option>Completely unrelated</option>
        </select>
        <h2>What kind of company did you join?</h2>
        <select>
          <option>--</option>
          <option>Started a company</option>
          <option>Very early-stage</option>
          <option>Small business</option>
          <option>Growth-stage startup</option>
          <option>Mid-sized business</option>
          <option>Large business</option>
          <option>Huge corporation</option>
        </select>
        <h2>What percentage of languages or technologies on the job posting did you know when applying?</h2>
        <select>
          <option>0%</option>
          <option>0-25%</option>
          <option>26-50%</option>
          <option>51-75%</option>
          <option>76-100%</option>
        </select>
        <h2>What percentage of languages or technologies on the job posting did you use regularly on the job?</h2>
        <select>
          <option>0%</option>
          <option>0-25%</option>
          <option>26-50%</option>
          <option>51-75%</option>
          <option>76-100%</option>
        </select>
        <h2>How did you get your first job?</h2>
        <select>
          <option>Online, went through whole process</option>
          <option>Messaged someone at the company on LinkedIn</option>
          <option>Messaged someone at the company in a Slack or Discord</option>
          <option>Met someone at a meetup</option>
          <option>Knew someone in the company</option>
        </select>
      </div>
    )
  }
}

export default Survey