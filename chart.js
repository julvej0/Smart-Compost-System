let firstChart = document.getElementById('firstChart').getContext('2d');
let secondChart = document.getElementById('secondChart').getContext('2d');
let thirdChart = document.getElementById('thirdChart').getContext('2d');
let fourthChart = document.getElementById('fourthChart').getContext('2d');


let barChart = new Chart(firstChart, {
    type: 'bar',
    data: {
        labels: ['1', '2', '3', '4', '5', '6'],
        datasets:[{
            label: '',
            data: [
                25,
                18,
                33,
                28,
                26,
                21
            ],
            // backgroundColor: 'green'
            backgroundColor: [
                "red",
                "blue",
                "green",
            ],
            borderWidth: 1,
            borderColor: 'black'
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Moisture',
            },
            legend: {
                display:false
            }

        }
    }
});

let pieChart = new Chart(secondChart, {
    type: 'line', //bar, horizontalBar, pie, line, donut, radar, polarArea
    data: {
        labels:['1', '2', '3', '4', '5', '6'],
        datasets:[{
            label: 'population',
            data: [
                1,
                2,
                3,
                4,
                5,
                6
            ],
            // backgroundColor: 'green'
            backgroundColor: [
                "red",
                "blue",
                "green",
            ],
            borderWidth: 1,
            borderColor: 'black'
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Temperature',
            },
            legend: {
                display:false
            }

        }
    }
});

let lineChart = new Chart(thirdChart, {
    type: 'line', //bar, horizontalBar, pie, line, donut, radar, polarArea
    data: {
        labels:['1', '2', '3', '4', '5', '6'],
        datasets:[{
            label: 'population',
            data: [
                27,
                25,
                30,
                33,
                35,
                28
            ],
            // backgroundColor: 'green'
            backgroundColor: [
                "red",
                "blue",
                "green",
            ],
            borderWidth: 1,
            borderColor: 'black'
        }]
    },
    options: {
        plugins: {
            title: {
                display: true,
                text: 'Oxygen',
            },
            legend: {
                display:false
            }

        }
    }
});

let donutChart = new Chart(fourthChart, {
    type: 'bar', //bar, horizontalBar, pie, line, donut, radar, polarArea
    data: {
        labels:['1', '2', '3', '4', '5', '6'],
        datasets:[{
            label: 'population',
            data: [
                1,
                2,
                3,
                4,
                5,
                6
            ],
            // backgroundColor: 'green'
            backgroundColor: [
                "red",
                "blue",
                "green",
            ],
            borderWidth: 1,
            borderColor: 'black',
        }]
    },
    options: {plugins: {
        title: {
            display: true,
            text: 'Timer',
        },
        legend: {
            display:false
        }

    }}
});


function addData(chart, label, data) {
    chart.data.labels.push(label);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(data);
    });
    chart.update();
}

function removeData(chart) {
    chart.data.labels.shift();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.shift();
    });
    chart.update();
}



for (let i = 1; i <= 17; i++) {
    let x = Math.floor((Math.random() * (35 - 15 + 1)) + 15);
    setTimeout(function() {
        removeData(barChart)
        addData(barChart, i+6, x)
    }, 3000*i);

}



