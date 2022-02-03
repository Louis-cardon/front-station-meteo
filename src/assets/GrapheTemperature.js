export let TempChartData;
TempChartData = {
    type: "line",
    data: {
        labels: ["01/01", "02/01", "03/01", "04/01", "05/01", "06/01", "07/01", "08/01"],
        datasets: [
            {
                label: "Température",
                data: [0, 0, 1, 2, 45, 47, 27, 14],
                backgroundColor: "rgba(54,73,93,.5)",
                borderColor: "#36495d",
                borderWidth: 3
            },
            {
                label: "Humidité",
                data: [40, 27, 16, 22, 39, 35, 34, 31],
                backgroundColor: "rgba(71, 183,132,.5)",
                borderColor: "#47b784",
                borderWidth: 3
            }
        ]
    },
    options: {
        responsive: true,
        lineTension: 1,
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                        padding: 25
                    }
                }
            ]
        }
    }
};
export default TempChartData;