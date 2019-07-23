import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Label } from 'ng2-charts';
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
    // We use these empty structures as placeholders for dynamic theming.
    scales: { xAxes: [{}], yAxes: [{}] },
    plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
      }
    }
  };
  //public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartLabels: Label[] = [];
  
  public barChartType: ChartType = 'bar';
  public barChartLegend = true;
  public barChartPlugins = [pluginDataLabels];

  public barChartData: ChartDataSets[] = [];

  constructor(private CrimeService: crimeService) {
    this.callgets();
  }

  callgets() {
    this.CrimeService.getyear().subscribe(res => {
      let valor: any;
      valor = res;
      let data:Array<number>=[]; 
      valor.forEach(element => {
        data.push(element.total);
     
      this.barChartLabels.push(element._id);
      });
      this.barChartData = [ { data: data, label:  "Crimen por año"},]
      this.showinfo = true;
    });
  }


  ngOnInit() {
  }

}