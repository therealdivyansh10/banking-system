'use client'

import React from 'react'
import {Chart,ArcElement,Tooltip,Legend} from 'chart.js';
import {Doughnut} from 'react-chartjs-2'
Chart.register(ArcElement,Tooltip,Legend)


const DoughnutChart = ({ accounts }: DoughnutChartProps) => {

  const data = {

    labels: ['Bank 1','Bank 2','Bank 3'],
    datasets: [ 
      {
        label: "Banks",
        data: [1260,2400,4720],
        backgroundColor: ['#0747b6','#2265d8','#2f91fa']
      }
    ],
    hoverOffset:4,

  }
 
  return (
    <Doughnut 
      data={data}
      options= {{
        cutout: '60%',
        plugins: {
          legend: {
            display:false
          }
        }
      }} 
    />
  )
}

export default DoughnutChart
