import { Component, OnInit } from '@angular/core';
import { ChartData,ChartType, ChartOptions} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-chart-radar',
  templateUrl: './chart-radar.component.html',
  styleUrls: ['./chart-radar.component.css']
})
export class ChartRadarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
   
  }
  public chartRadarPlugin = [ChartDataLabels];

  public chartRadarOptions : ChartOptions = {responsive : true , 
  elements :{
    point :{
      radius: 10,
      pointStyle: 'circle'
    },
    
  },
  plugins : {
    datalabels : {
      font : {
        size : 18,
        weight : 'bolder'
      },
      borderRadius: 15,
      color : 'black',
      //display : 'auto',
      //anchor : 'center',
      align : 'right',
      offset: 15,
      anchor : function(context){
        
        const p = context.datasetIndex;
        if (p == 0 ){
          return 'end';
        } else {
          return 'start';
        }

      }
    },
    tooltip: {
      //enabled : false,
      //position : 'nearest',
    }
  }, 
  interaction: {
    //mode : 'index',
    //intersect: false
  },
  

 
 
};

  public chartRadarLabels : string[] = ['Eating', 'Sleeping', 'Washing', 'Training', 'Leaving'];

  public chartRadarData : ChartData<'radar'> = {
    labels : this.chartRadarLabels,
    datasets : [
      { data : [5, 15, 25, 35,25], label : 'Routine'},
      { data : [2, 5 , 15, 25, 26], label : 'Exception'}
    ]
  }

  public chartRadarType : ChartType = 'radar';

  public anchorData(context: { dataset: { data: { [x: string]: any; }; }; dataIndex: string | number; }){
      var value = context.dataset.data[context.dataIndex];
      return console.log(value);
  }
  


}
