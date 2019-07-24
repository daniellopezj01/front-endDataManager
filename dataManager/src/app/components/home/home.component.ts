import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label, SingleDataSet } from 'ng2-charts';
import { crimeService } from 'src/app/services/crimeService';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  datayear: any;
  labelyear: any;
  showinfo: boolean;
  public barChartOptions: ChartOptions = {
    responsive: true,
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };

  //YEARRRR
  public barChartLabelsYear: Label[] = [];
  public barChartType: ChartType = 'line';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];
  public barChartDataYear: ChartDataSets[] = [];


  public pieChartOptions: ChartOptions = {
    responsive: true,
    legend: {
      position: 'top',
    },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  public pieChartLabels: Label[] = [];
  public pieChartData: number[] = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [pluginDataLabels];
  public pieChartColors = [
    {
      backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
    },
  ];


  public pieChartLabels2: Label[] = [ 'Trafico','Crimen'];
  public pieChartData2: number[] = [];
  public pieChartType2: ChartType = 'pie';
  public pieChartLegend2 = true;
  public pieChartPlugins2 = [pluginDataLabels];


  public polarAreaChartLabels: Label[] = [];
  public polarAreaChartData: SingleDataSet = [];
  public polarAreaLegend = true;

  public polarAreaChartType: ChartType = 'polarArea';

  constructor(private CrimeService: crimeService) {
    this.callgets();
  }


  callgets() {
    this.CrimeService.getyear().subscribe(res => {
      let valor: any;
      valor = res;
      let data: Array<number> = [];
      valor.forEach(element => {
        data.push(element.total);
        this.barChartLabelsYear.push(element._id);
      });
      this.barChartDataYear = [{ data: data, label: "Crimen por año" },]
      this.loadcirculOfensive()
    });
  }


  loadcirculOfensive() {
    this.CrimeService.getCategory().subscribe(res => {
      let valor: any;
      valor = res;
      let data: Array<number> = [];
      valor.forEach(element => {
        data.push(element.total);
        this.pieChartLabels.push(element._id);
      });
      this.pieChartData = data
      this.graphic3();

    })
  }

  graphic3() {
    this.CrimeService.getdistrict().subscribe(res => {
      let valor: any;
      valor = res;
      let data: Array<number> = [];
      valor.forEach(element => {
        data.push(element.total);
        this.polarAreaChartLabels.push("distrito " + element._id);
      });
      this.polarAreaChartData = data
      this.graphic4();

    })
  }

  graphic4() {
    this.CrimeService.getcrimeOrTrafic().subscribe(res => {
      let data: Array<number> = [];
      data.push(res[0].IS_TRAFFIC);
      data.push(res[0].IS_CRIME);
      this.pieChartData2 = data
    })
    this.showinfo = true;
  }

  public randomize(): void {
    this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
  }

  ngOnInit() {
  }

}