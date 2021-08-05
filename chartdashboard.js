var options = {
    chart: {
        height: 345,
        type: "area",
    },
    tooltip: {
        theme: 'dark'
    },
    dataLabels: {
        enabled: false
    },
    series: [{
            name: "Penghasilan",
            data: [45, 52, 38, 45, 30, 32, 40]
        },
        {
            name: "Pengeluaran",
            data: [35, 42, 28, 55, 19, 23, 20]
        }
    ],
    fill: {
        type: "gradient",
        gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            stops: [0, 90, 100]
        }
    },
    colors: ["#28a745", "#d39e00"],
    xaxis: {
        categories: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "Mei",
            "Jun",
            "Jul"
        ]
    },
    legend: {
        horizontalAlign: 'left',
    }
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();