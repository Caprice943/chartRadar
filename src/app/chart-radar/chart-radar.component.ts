import { Component, OnInit } from '@angular/core';
import { ChartData,ChartType, ChartOptions} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-chart-radar',
  templateUrl: './chart-radar.component.html',
  styleUrls: ['./chart-radar.component.css'],
})
export class ChartRadarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  public chartRadarPlugin = [ChartDataLabels];

  public chartRadarOptions: ChartOptions = {
    responsive: true,
    elements: {
      point: {
        radius: 5,
        pointStyle: 'circle',
      },
      line : {
        fill : true,
        tension : 0.2
      }
    },
    plugins: {
      datalabels: {
        font: {
          size: 18,
          weight: 'bolder',
        },
        borderRadius: 15,
        color: 'black',
        //display : 'auto',
        backgroundColor: 'white',
        borderColor : this.getBorderColor,
        align: function (context) {
          const a = context.datasetIndex;
          if (a == 0) {
            return 'top';
          } else if (a == 1) {
            return 'bottom';
          } else {
            return 'start';
          }
        },
        //offset: 5,
        /*
      anchor : function(context){
        const p = context.datasetIndex;
        if (p == 0 ){
          return 'center';
        } else if (p == 1) {
          return 'end';
        } else {
          return 'start'
        }

      }
      */
      },
      tooltip: {
        //enabled : false,
        //position : 'nearest',
      },
    },
    interaction: {
      //mode : 'index',
      //intersect: false
    },
  };

  public chartRadarLabels: string[] = [
    'Eating',
    'Sleeping',
    'Washing',
    'Training',
    'Leaving',
  ];

  public chartRadarData: ChartData<'radar'> = {
    labels: this.chartRadarLabels,
    datasets: [
      {
        data: [5, 15, 25, 35, 25],
        label: 'Routine',
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgb(255, 99, 132)',
        pointBackgroundColor: 'rgb(255, 99, 132)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(255, 99, 132)',
      },
      {
        data: [2, 5, 15, 25, 26],
        label: 'Exception',
        backgroundColor: 'rgba(54, 162, 235, 0.2)',
        borderColor: 'rgb(54, 162, 235)',
        pointBackgroundColor: 'rgb(54, 162, 235)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgb(54, 162, 235)',
      },
    ],
  };

  public chartRadarType: ChartType = 'radar';

  getBorderColor(): any {
    return (context: any) => {
      const value = context.dataset.backgroundColor;
      return value;
    };
  }
}
