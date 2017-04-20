import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html'
})

export class HomeComponent implements OnInit {
    salesStatChartOptions: any; // Sales Statistics Chart Options
    salesStatChartData: any; // Sales Statistics Chart Data

    constructor() {
        this.salesStatChartOptions = {
            series: {
                shadowSize: 0,
                curvedLines: {
                    apply: true,
                    active: true,
                    monotonicFit: true
                },
                points: {
                    show: false
                }
            },
            grid: {
                borderWidth: 1,
                borderColor: '#edf9fc',
                show: true,
                hoverable: true,
                clickable: true
            },
            xaxis: {
                tickColor: '#edf9fc',
                tickDecimals: 0,
                font: {
                    lineHeight: 13,
                    style: 'normal',
                    color: '#cccccc',
                    size: 11
                }
            },
            yaxis: {
                tickColor: '#edf9fc',
                font: {
                    lineHeight: 13,
                    style: 'normal',
                    color: '#cccccc',
                    size: 11,
                },
                min: +5
            },
            legend: {
                show: false
            }
        };

        this.salesStatChartData = [
            {
                label: 'line1',
                lines: {
                    show: true,
                    lineWidth: 0,
                    fill: 1,
                    fillColor: {
                        colors: ['rgba(246,246,246,0.1)', '#f6f6f6']
                    }
                },
                data: [[10, 90], [20, 40], [30, 80], [40, 20], [50, 90], [60, 20], [70, 60]],

            },
            {
                label: 'line2',
                lines: {
                    show: true,
                    lineWidth: 0.1,
                    fill: 1,
                    fillColor: {
                        colors: ['rgba(0,188,212,0.001)', '#00BCD4']
                    }
                },
                data: [[10, 80], [20, 30], [30, 70], [40, 10], [50, 80], [60, 10], [70, 50]]
            }
        ];
    }

    ngOnInit() {

    }

}
