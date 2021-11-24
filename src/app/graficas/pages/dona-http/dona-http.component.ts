import { Component, OnInit } from '@angular/core';
import { ChartType } from 'chart.js';
import { Color, Label, MultiDataSet } from 'ng2-charts';
import { GraficasService } from '../../services/graficas.service';

@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  // Doughnut
  public doughnutChartLabels: Label[] = [
    // 'Download Sales', 'In-Store Sales', 'Mail-Order Sales'
  ];
  public doughnutChartData: MultiDataSet = [
    // [350, 450, 100],
    // [50, 150, 120],
    // [250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';

  public colors: Color[] = [
    {
      backgroundColor: [
        '#78C6FF',
        '#7DE3B2',
        '#C8FA95',
        '#E3D07D',
        '#FBBC8A',
      ]
    }
  ];

  constructor(private graficasService: GraficasService) { }

  ngOnInit(): void {
    this.graficasService.getUsuariosRedesSocialesDonaData().subscribe(
      ({ labels, values }) => {
        // console.log(data);
        // const labels = Object.keys(data);
        // const values = Object.values(data);
        this.doughnutChartLabels = labels;
        this.doughnutChartData.push(values);
      }
    )
  }

}
