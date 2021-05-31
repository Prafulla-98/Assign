import { Component, OnInit , ViewChild} from '@angular/core';
import {Chart} from 'node_modules/chart.js'; 
import { AfterViewInit, ElementRef } from '@angular/core';
import { LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, BarController, BarElement } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss']
})
export class ChartComponent implements AfterViewInit {
 public canvas: any;
 public ctx:any;
 
  constructor(private elementRef: ElementRef){}
  
  
   ngAfterViewInit() {
      Chart.register(LineController, LineElement, PointElement, LinearScale, Title, CategoryScale, BarController, BarElement);

    let html = this.elementRef.nativeElement.querySelector(`#myChart`);
      var myChart = new Chart(html, {
        type: 'bar',
        data: {
          labels: ['Red', 'Blue', 'black', 'Green', 'Purple', 'violet'],
          datasets: [{
            label: '# of Votes',
            data: [30, 20, 10, 12, 25, 8],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(0, 0, 0, 0.5)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(142, 68, 173, 0.5)'
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(0, 0, 0, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(142, 68, 173, 1)'
            ],
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    }
  
  }