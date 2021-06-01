import { Component, OnInit , ViewChild} from '@angular/core';
import {Chart} from 'node_modules/chart.js'; 
import { AfterViewInit, ElementRef } from '@angular/core';
import { PointElement,PieController, Title,ArcElement} from 'chart.js';

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
      Chart.register(PointElement, PieController,ArcElement, Title);

    let html = this.elementRef.nativeElement.querySelector(`#myChart`);
      var myChart = new Chart(html, {
        type: 'pie',
        data: {
          labels: [
            'Red',
            'Blue',
            'purple',
            'orange',
          ],
          datasets: [{
            label: 'My First Dataset',
            data: [150,50, 150, 50],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(153, 102, 255, 1)',
               'rgba(255, 159, 64, 1)'
            ],
            hoverOffset: 4
          }]
        },
      });
    }
  
  }