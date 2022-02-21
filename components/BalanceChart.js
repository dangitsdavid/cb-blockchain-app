import styled from 'styled-components'
import { Line } from 'react-chartjs-2'
import Chart from 'chart.js/auto'

const data = {
  labels: [
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sept',
    'Oct',
    'Nov',
  ],
  datasets: [
    {
      fill: false,
      lineTension: 0.1,
      backgroundColor: '#3773f5',
      borderColor: '#3773f5',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: '#3773f5',
      pointBackgroundColor: '#3773f5',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: '#3773f5',
      pointHoverBorderColor: '#3773f5',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [65500, 59123, 80992, 81529, 56163, 72224, 45923, 67001, 55525, 42505],
    }
  ],
}

const options = {
  plugins: {
    legend: {
      display: false,
    }
  }
}

const BalanceChart = () => {
  return (
    <Wrapper>
      <Line data={data} options={options} width={400} height={150} />
    </Wrapper>
  )
}

export default BalanceChart

const Wrapper = styled.div`
`