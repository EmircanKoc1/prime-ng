import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/chart';

@Component({
  selector: 'app-chart-sample',
  standalone: true,
  imports: [ChartModule],
  templateUrl: './chart-sample.component.html',
  styleUrl: './chart-sample.component.scss'
})
export class ChartSampleComponent
  implements OnInit {
  pieData: any;
  pieOptions: any;
  doughnutData: any;
  doughnutOptions: any;
  barData: any;
  barOptions: any;
  
  ngOnInit() {
    // this.loadPie();
    // this.loadDoughnut();
    this.loadBar();
  }

  loadPie() {
    // const documentStyle = getComputedStyle(document.documentElement);
    // const textColor = documentStyle.getPropertyValue('--text-color');

    const textColor = "black"

    this.pieData = {
      labels: ['Turkey', 'USA', 'London'],
      datasets: [
        {
          data: [540, 325, 702],
          backgroundColor: [
            "pink",
            "blue",
            "purple"

            // documentStyle.getPropertyValue('--blue-500'),
            // documentStyle.getPropertyValue('--yellow-500'),
            // documentStyle.getPropertyValue('--green-500')
          ],
          hoverBackgroundColor: [
            "gray"
            // documentStyle.getPropertyValue('--blue-400'),
            // documentStyle.getPropertyValue('--yellow-400'),
            // documentStyle.getPropertyValue('--green-400')
          ]
        }
      ]
    };

    this.pieOptions = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    };
  }

  loadDoughnut(): void {
    this.doughnutData = {
      labels: ['A', 'B', 'C', "D", "F"],
      datasets: [
        {
          data: [300, 50, 100, 200, 22],
          backgroundColor: [
            "red",
            "purple",
            "orange",
            "pink",
            "blue"
          ],
          hoverBackgroundColor: [
            "black"
          ]
        }
      ]
    };


    this.doughnutOptions = {
      cutout: '60%',
      plugins: {
        legend: {
          labels: {
            color: "red"
          }
        }
      }
    };
  }

  loadBar() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = "black";
    const textColorSecondary = "black";
    const surfaceBorder ="blue";

    this.barData = {
        labels: ['January', 'February', 'March', 'April', 'May', 'June',  ],
        datasets: [
           
            {
                type: 'bar',
                label: 'Completed Orders',
                backgroundColor: "purple",
                data: [21, 84, 24, 75, 37, 65, 34]
            },
            {
                type: 'bar',
                label: 'Orders',
                backgroundColor: "pink",
                data: [41, 52, 24, 74, 23, 21, 32]
            }
        ]
    };

    this.barOptions = {
        maintainAspectRatio: false,
        aspectRatio: 0.6,
        plugins: {
            tooltip: {
                mode: 'index',
                intersect: false
            },
            legend: {
                labels: {
                    color: textColor
                }
            }
        },
        scales: {
            x: {
                stacked: true,
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            },
            y: {
                stacked: true,
                ticks: {
                    color: textColorSecondary
                },
                grid: {
                    color: surfaceBorder,
                    drawBorder: false
                }
            }
        }
    };



  }


}
