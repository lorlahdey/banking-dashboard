import Chart from "react-apexcharts"

const DashboardChart = () => {

    const series= [{
        // name: "Income",
        data: [
        {
            x: "DEC 2",
            y: 0.9
        },
        {
            x: "DEC 3",
            y: 1.5
        },
        {
            x: "DEC 4",
            y: 2
        },
        {
            x: "DEC 5",
            y: 2.7
        },
        {
            x: "DEC 6",
            y: 2
        },
        {
            x: "DEC 7",
            y: 2.8
        },
        {
            x: "DEC 8",
            y: 3.2
        }
        ]
    }];  
  
    const options= {
        chart: {
            // id: "simple-bar",
            type: 'area',
            height: 350,
            zoom: {
                enabled: false
            },
            foreColor: '#A5B4CB',
            animations: {
                initialAnimation: {
                enabled: false
                }
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: 2,
            curve: 'smooth'
        },
        // colors: ["white"],
        theme: {
            mode: 'light', 
            palette: 'palette1', 
            monochrome: {
                enabled: false,
                color: '#255aee',
                shadeTo: 'light',
                shadeIntensity: 0.65
            },
        },
        fill: {
            type: 'gradient',
            colors: ['#F44336', '#E91E63', '#9C27B0'],
            gradient: {
                shade: 'dark',
                type: "vertical",
                shadeIntensity: 0.5,
                gradientToColors: '#5c26ff',
                inverseColors: true,
                opacityFrom: 1,
                opacityTo: 1,
                stops: [2, 18, 28, 100, 60, 150],
                colorStops: []
            }
        },
        title: {
            text: '',
            align: 'left'
        },
        subtitle: {
            text: '',
            align: 'left'
        },
        labels: 'Banking Chart',
        xaxis: {
            style:{ fontSize:50, color:'red'},
            // categories: ['DEC 2', 'DEC 3', 'DEC 4', 'DEC 5', 'DEC 6', 'DEC 7', 'DEC 8'],
        },
        yaxis: {
            style:{ fontSize:50, color:'red'},
            labels: {
                formatter: function (value) {
                    return value + "K";
                }
            },
        },
        tooltip: {
            x: {
                formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
                    return` <div class="arrow_box"> 
                                <img src="/images/dashboard/downward-arrow.svg" alt="arrow" />
                                Income
                            </div>`
                    // return '<div class="arrow_box">' +
                    //         "<span class='material-icons-outlined'>" + 'arrow_downward' + '</span>' +
                    //         'Income' +
                    //     '</div>'
                }
            },
            y: {
                formatter: function(value, { series, seriesIndex, dataPointIndex, w }) {
                    return "$ " + value.toFixed(3) 
                },
                style: {
                    fontSize: '40px',
                    fontFamily: undefined
                },          
            },
            marker: {
                show: false,
            },
        },
        legend: {
            horizontalAlign: 'left'
        }
    }

    return (
        <Chart options={options}  series={series} width="80%" />
    )
}

export default DashboardChart