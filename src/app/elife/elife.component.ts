import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
import { ELifeModel } from './elife.model';

@Component({
  selector: 'app-elife',
  templateUrl: './elife.component.html',
  styleUrls: ['./elife.component.scss']
})
export class ElifeComponent implements OnInit {

    elifeModel: ELifeModel[] = [
        new ELifeModel(1,"Success","Total Service Orders",1323),
        new ELifeModel(1,"Success","Instant Provisioned",1125),
        new ELifeModel(1,"Success","Modified Service Order",175),
        new ELifeModel(1,"Success","Failed Service Order",23),
    ]
  constructor() { }

  tot = 'Total Service Orders';
  completed = 'Instant Provisioned';
  modified = 'Modified Service Order';
  failed = 'Failed Service Order';

  LineChart=[];
  BarChart=[];
  PieChart=[];

  ngOnInit() {
     // Line chart:
this.LineChart = new Chart('lineChartELife', {
  type: 'line',
data: {
 labels: ["Pre-Cnfg", "Prosioning", "Full Actn", "Patch", "Cessassion"],
 datasets: [{
     label: 'Percentage of Service Order for projects provisioned through E2ESO',
     data: [95,83,91,61,79],
     fill:true,
     lineTension:0.2,
     borderColor:"green",
     borderWidth: 2
 }]
}, 
options: {
 title:{
     text:"eLife Services",
     display:true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero:true
         }
     }]
 }
}
});

// Bar chart:
this.BarChart = new Chart('barChartELife', {
  type: 'bar',
data: {
 labels: ["Pre-Configuration", "Prosioning", "Full Activation", "Patch", "Cessassion"],
 datasets: [{
     label: '# Service Order Provisioned in one time',
     data: [1124,1398 , 1287, 1086, 942, 1191],
     backgroundColor: [
         'rgba(255, 99, 132, 0.2)',
         'rgba(54, 162, 235, 0.2)',
         'rgba(255, 206, 86, 0.2)',
         'rgba(75, 192, 192, 0.2)',
         'rgba(153, 102, 255, 0.2)',
         'rgba(255, 159, 64, 0.2)'
     ],
     borderColor: [
         'rgba(255,99,132,1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 86, 1)',
         'rgba(75, 192, 192, 1)',
         'rgba(153, 102, 255, 1)',
         'rgba(255, 159, 64, 1)'
     ],
     borderWidth: 1
 }]
}, 
options: {
 title:{
     text:"eLife Services",
     display:true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero:true
         }
     }]
 }
}
});

// pie chart:
this.PieChart = new Chart('pieChartELife', {
  type: 'pie',
data: {
 labels: ["Pre-Configuration", "Prosioning", "Full Activation", "Patch", "Cessassion"],
 datasets: [{
     label: '#',
     data: [7 , 3, 5, 2, 10],
     backgroundColor: [
         'rgba(255, 0, 132, 0.2)',
         'rgba(54, 162, 235, 0.2)',
         'rgba(0,100,0, 0.2)',
         'rgba(255,255,0, 0.2)',
         'rgba(0,139,139, 0.2)',
     ],
     borderColor: [
         'rgba(255,99,132,1)',
         'rgba(54, 162, 235, 1)',
         'rgba(255, 206, 86, 1)',
         'rgba(75, 192, 192, 1)',
         'rgba(153, 102, 255, 1)',
         'rgba(255, 159, 64, 1)'
     ],
     borderWidth: 1
 }]
}, 
options: {
 title:{
     text:"eLife Services",
     display:true
 },
 scales: {
     yAxes: [{
         ticks: {
             beginAtZero:true
         }
     }]
 }
}
});

      }
}
