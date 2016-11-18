function drawCanvas() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.beginPath();
    ctx.arc(95, 50, 40, 0, 2 * Math.PI);
    ctx.stroke();
}

function drawCanvasJS() {
    var chart = new CanvasJS.Chart("chartContainer", {
        theme: "theme2",//theme1
        title: {
            text: "Basic Column Chart - CanvasJS"
        },
        animationEnabled: false,   // change to true
        data: [
            {
                // Change type to "bar", "area", "spline", "pie",etc.
                type: "column",
                dataPoints: [
                    { label: "apple", y: 10 },
                    { label: "orange", y: 15 },
                    { label: "banana", y: 25 },
                    { label: "mango", y: 30 },
                    { label: "grape", y: 28 }
                ]
            }
        ]
    });
    chart.render();
}

function drawChartJS() {
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
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
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function GetRandomValues(labels, max) {
    var valuesMontsh = [];
    for (var i = 0; i < labels; i++) {
        valuesMontsh.push(Math.random() * max);
    }
    return valuesMontsh;
}

function GenerateConsumos(contextId) {
    var data = {
        labels: ["January", "February", "March", "April", "May", "June", "July"],
        datasets: [
            {
                label: "9573-DCM",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: GetRandomValues(7, 100),//[65, 59, 80, 81, 56, 55, 40],
                spanGaps: false,
            },
            {
                label: "9646-CRK",
                fill: false,
                lineTension: 0.1,
                backgroundColor: "rgba(75,192,12,0.4)",
                borderColor: "rgba(75,192,12,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,12,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,12,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: GetRandomValues(7, 100),//[65, 59, 80, 81, 56, 55, 40],
                spanGaps: false,
            }
        ]
    };
    var ctx = document.getElementById(contextId);
    var myLineChart = new Chart(ctx, {
        type: 'line',
        data: data,
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}

function GenerateLugaresFrecuentados(contextId) {
    var data = {

        labels: ["House", "Store", "Client", "Office", "Garage"],
        datasets: [
            {
                label: "Device 1309",
                backgroundColor: "rgba(179,181,198,0.2)",
                borderColor: "rgba(179,181,198,1)",
                pointBackgroundColor: "rgba(179,181,198,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(179,181,198,1)",
                data: GetRandomValues(5, 100)
            },
            {
                label: "Device 1312",
                backgroundColor: "rgba(255,99,132,0.2)",
                borderColor: "rgba(255,99,132,1)",
                pointBackgroundColor: "rgba(255,99,132,1)",
                pointBorderColor: "#fff",
                pointHoverBackgroundColor: "#fff",
                pointHoverBorderColor: "rgba(255,99,132,1)",
                data: GetRandomValues(5, 100)
            }
        ]
    };
    var ctx = document.getElementById(contextId);
    var myLineChart = new Chart(ctx, {
        type: 'radar',
        data: data,
        options: {
            scale: {
                reverse: true,
                ticks: {
                    beginAtZero: true
                }
            }
        }
    });
}

function GenerateAceleracionesFrenadas(contextId) {
    var data = {
        labels: [
            "Acelerar",
            "Frenar"
        ],
        datasets: [
            {
                data: GetRandomValues(2, 50),
                backgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ],
                hoverBackgroundColor: [
                    "#FF6384",
                    "#36A2EB",
                    "#FFCE56"
                ]
            }]
    };
    var ctx = document.getElementById(contextId);
    var myLineChart = new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            scale: {
                reverse: true,
                ticks: {
                    beginAtZero: true
                }
            }
        }
    });

}