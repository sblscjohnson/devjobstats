import React from 'react'
var DoughnutChart = require("react-chartjs").Doughnut;

class Doughnut extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {
          value: 3,
          color: "#F7464A",
          highlight: "#FF5A5E",
          label: "Red"
        },
        {
          value: 32,
          color: "#46BFBD",
          highlight: "#5AD3D1",
          label: "Green"
        },
        {
          value: 3,
          color: "#FDB45C",
          highlight: "#FFC870",
          label: "Yellow"
        },
        {
          value: 5,
          color: "#949FB1",
          highlight: "#A8B3C5",
          label: "Grey"
        },
        {
          value: 32,
          color: "#4D5360",
          highlight: "#616774",
          label: "Dark Grey"
        }
      ]
    }
  }
  

  render() {
    return (
      <DoughnutChart data={this.state.data} />
    )
  }
};

export default Doughnut