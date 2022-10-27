import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
)
export default function Chart({details}) {
    console.log(details)
    const colors = {
        fire : '#F77E21',
        water : '#43919B',
        grass : '#019267',
        normal : '#D8D9CF',
        psychic : 'pink',
        fairy : 'pink',
        poison : '#C689C6',
        bug : '#749F82',
        ground : '#9F8772',
        electric : '#FFC23C',
        ice :'skyblue',
        fighting : 'grey',
        flying : 'purple',
        rock : 'brown',
        ghost : '#726A95',
        dark : '#2C3333',
        dragon : '#DD5353',
        steel : 'silver'
    
      }
      const color = colors[details.types[0].type.name]
const options = {
    scales: {
        x: {
            ticks: {
              font: {
                size:17
              }
            }
          },
        y: {
            ticks: {
                font: {
                  size: 15
                }
              }
        }
        
    },
    indexAxis : 'x',
    elements : {
        bar : {
           borderWidth : 1.5, 
        },
    },
    responsive : true,
    plugins : {
    
        title : {
            display : true,
            text : 'Stats',
        }
    },
}
const labels = details.stats.map((it) => it.stat.name)
const data = {
    labels,
    datasets : [
        {
            label : 'PokePoints',
            data : details.stats.map((it) => it.base_stat),
            borderColor:'black',
            backgroundColor:`${color}`,
            barThickness :60,

        }
    ],
};
  return (
    <div className='chart'>
      <Bar data = {data} options = {options} />
    </div>
  )
}
