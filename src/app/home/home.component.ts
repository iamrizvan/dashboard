import { Component, OnInit } from "@angular/core";
import { Chart } from "chart.js";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  LineChart = [];
  PieChart = [];
  BarChart = [];
  constructor() {}

  ngOnInit() {
    // Line chart:
    this.LineChart = new Chart("lineChartHome", {
      type: "line",
      data: {
        labels: ["Development", "Staging", "Pre-Production", "Production"],
        datasets: [
          {
            label:
              "Service Provisioning || Environment",
            data: [1125, 1345, 1256, 1355],
            fill: true,
            lineTension: 0.2,
            borderColor: "green",
            borderWidth: 2
          }
        ]
      },
      options: {
        title: {
          text: "eLife Services",
          display: false
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });

    // Bar chart:
    this.BarChart = new Chart("barChartHome", {
      type: "bar",
      data: {
        labels: [
          "Pre-Configuration",
          "Prosioning",
          "Full Activation",
          "Patch",
          "Cessassion"
        ],
        datasets: [
          {
            label: "# Service Order Provisioned in one time",
            data: [1124, 1398, 1287, 1086, 942, 1191],
            backgroundColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderColor: [
              "rgba(255,0,0,1)",
              "rgba(0, 0, 255, 1)",
              "rgba(255, 255, 0, 1)",
              "rgba(0, 255, 255, 1)",
              "rgba(153, 0, 255, 1)",
              "rgba(255, 100, 0, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        title: {
          text: "eLife Services",
          display: true
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });

    // pie chart:
    this.PieChart = new Chart("pieChartHome", {
      type: "pie",
      data: {
        labels: [
          "",
          "Prosioning",
          "Full Activation",
          "Patch",
          "Cessassion"
        ],
        datasets: [
          {
            label: "#",
            data: [7, 3, 5, 2, 10],
            backgroundColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderColor: [
              "rgba(255,0,0,1)",
              "rgba(0, 0, 255, 1)",
              "rgba(255, 255, 0, 1)",
              "rgba(0, 255, 255, 1)",
              "rgba(153, 0, 255, 1)",
              "rgba(255, 100, 0, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        title: {
          text: "eLife Services",
          display: false
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: false
              }
            }
          ]
        }
      }
    });
  }
}
