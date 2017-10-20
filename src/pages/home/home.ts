import {Component} from '@angular/core';
import {LoginPage} from './../login/login';
import { App } from 'ionic-angular';

@Component({selector: 'page-home', templateUrl: 'home.html'})
export class HomePage {

  iniTab : string = "dashboard";
  loginRoot : any = LoginPage;
  options : Object;
  pieOptions : Object;
  constructor(public appCtrl: App) {
    this.pieOptions = {
      chart: {
        type: 'pie'
      },
      title: {
        verticalAlign: 'middle',
        floating: true,
        text: '$23,200.62',
        y: -20
      },
      colors: [
        '#44C2A1', '#23A481', '#79CCB8'
      ],
      yAxis: {
        title: {
          text: ''
        }
      },
      plotOptions: {
        pie: {
          shadow: false
        }
      },
      tooltip: {
        formatter: function () {
          return '<b>' + this.point.name + '</b>: ' + this.y + ' %';
        }
      },
      series: [
        {
          name: 'Browsers',
          data: [
            [
              "Brokerage Non-Retirement", 6
            ],
            [
              "SAM - Retirement", 4
            ],
            ["MWP - Retirement", 7]
          ],
          size: '100%',
          innerSize: '60%',
          showInLegend: true,
          dataLabels: {
            enabled: false
          }
        }
      ]
    };
    this.options = {
      chart: {
        type: 'spline'
      },
      title: {
        text: ''
      },
      subtitle: {
        text: '1D 5D 1M YTD Custom'
      },
      xAxis: {
        type: 'datetime'
      },
      yAxis: [
        {
          title: {
            text: ''
          },
          tickInterval: 5,
          tickmarkPlacement: 'on',
          gridLineWidth: 1,
          minorGridLineWidth: 1,
          alternateGridColor: null,
          plotBands: [
            { // Light air
              from: 0.3,
              to: 1.5,
              color: 'rgba(0, 0, 0, 0)',
              label: {
                text: '',
                style: {
                  color: '#606060'
                }
              }
            }, { // Light breeze
              from: 1.5,
              to: 3.3,
              color: 'rgba(0, 0, 0, 0)',
              label: {
                text: '',
                style: {
                  color: '#606060'
                }
              }
            }, { // Gentle breeze
              from: 3.3,
              to: 5.5,
              color: 'rgba(0, 0, 0, 0)',
              label: {
                text: '',
                style: {
                  color: '#606060'
                }
              }
            }, { // Moderate breeze
              from: 5.5,
              to: 8,
              color: 'rgba(0, 0, 0, 0)',
              label: {
                text: '',
                style: {
                  color: '#606060'
                }
              }
            }, { // Fresh breeze
              from: 8,
              to: 11,
              color: 'rgba(0, 0, 0, 0)',
              label: {
                text: '',
                style: {
                  color: '#606060'
                }
              }
            }, { // Strong breeze
              from: 11,
              to: 14,
              color: 'rgba(0, 0, 0, 0)',
              label: {
                text: '',
                style: {
                  color: '#606060'
                }
              }
            }, { // High wind
              from: 14,
              to: 15,
              color: 'rgba(0, 0, 0, 0)',
              label: {
                text: '',
                style: {
                  color: '#606060'
                }
              }
            }
          ]
        }
      ],
      tooltip: {
        valueSuffix: '$'
      },
      plotOptions: {
        spline: {
          lineWidth: 2,
          states: {
            hover: {
              lineWidth: 2
            }
          },
          marker: {
            enabled: true
          },
          pointInterval: 3600000, // one hour
          pointStart: Date.UTC(2015, 4, 31, 0, 0, 0)
        }
      },
      series: [
        {
          name: '',
          color: '#44C2A1',
          data: [
            3.2,
            8.8,
            7.2,
            9.8,
            11.6,
            12.3,
            13.5,
            10.9,
            13.9,
            9.6,
            8.6,
            11.2,
            14,
            13.6,
            8.5,
            8.2,
            7.5,
            8.5,
            9,
            9.1,
            9.7,
            9,
            8.7,
            7.3,
            9.3,
            8.1,
            7.7,
            12.1,
            12.6,
            10.1,
            9.8,
            8.6,
            12.2,
            9,
            10.9,
            11.5,
            11.6,
            11.1,
            12,
            12.3,
            10.7,
            9.4,
            9.8,
            9.6,
            9.8,
            9.5,
            8.5,
            7.4,
            7.6
          ]

        }, {
          name: '',
          color: '#23A481',
          data: [
            2.2,
            3.8,
            3.6,
            1.9,
            2.8,
            3.2,
            2.2,
            4.0,
            3.0,
            5.1,
            3.6,
            3.7,
            2.8,
            3.6,
            0.2,
            2.0,
            3.1,
            3.3,
            4.3,
            2.0,
            0.1,
            3.0,
            2.0,
            3.0,
            5.2,
            4.1,
            4.0,
            3.3,
            5.0,
            6.1,
            7.2,
            8.1,
            7.3,
            6.3,
            5,
            3.1,
            3.1,
            2.5,
            3.5,
            2.9,
            2.1,
            3,
            2.3,
            1.9,
            1.2,
            0.7,
            1.3,
            0.4,
            6.3
          ]
        }
      ],
      navigation: {
        menuItemStyle: {
          fontSize: '10px'
        }
      }

    }
  };

  logout() {
    this.appCtrl.getRootNav().setRoot(LoginPage, {}, {
      animate:true,
      animation:'transition',
      duration:500,
      direction:'back'})
    }
  }
   
