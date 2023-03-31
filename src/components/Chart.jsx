import Chart from "react-apexcharts"

const DashboardChart = () => {

    const series= [{
        name: "Income",
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
            y: 2.6
        },
        {
            x: "DEC 6",
            y: 2
        },
        {
            x: "DEC 7",
            y: 2.9
        },
        {
            x: "DEC 8",
            y: 3.3
        }
        ]
    }];  
  
    const options= {
        chart: {
            id: "simple-bar",
            fontFamily: 'Gilroy-SemiBold, sans-serif',
            zoom: {
                enabled: false
            },
            foreColor: '#A5B4CB',
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            show: true,
            width: 2,
            curve: 'smooth'
        },
        colors: ["#0177FB"],
        fill: {
            type: 'gradient',
            colors: ['#E0ECFC', '#fff' ],
            gradient: {
                shade: 'light',
                type: "vertical",
                inverseColors: false,
                opacityFrom: 0,
                opacityTo: 1,
                stops: [2, 18, 28, 100, 60, 180, 250, 550],
            }
        },
        xaxis: {
            labels: {
                style:{ 
                    fontFamily: 'Gilroy-SemiBold',
                    fontSize: "9px",
                    lineHeight: "9px",
                },
            },
            axisTicks: {
                show: false
            }
        },
        yaxis: {
            labels: {
                style:{  
                    fontFamily: 'Gilroy-SemiBold',
                    fontSize: "10px",
                    lineHeight: "9px",
                },
                formatter: function (value) {
                    return value + "K";
                }
            },
        },
        tooltip: {
            custom: function({series, seriesIndex, dataPointIndex, w}) {
                return `<div class="toolTip-box">
                            <div class="toolTip-titleBar">
                                <img src="/images/dashboard/downward-arrow.svg" alt="arrow" />
                                <span class="ms-2">Income</span>
                            </div>
                            <span class="toolTip-value">$ ${(series[seriesIndex][dataPointIndex]).toFixed(3)} </span> 
                        </div>`
            }, 
            marker: {
                show: false,
            },
        },
        legend: {
            horizontalAlign: 'left'
        },
        grid: {
            strokeDashArray: 6,
            borderColor: '#EFF2F7',
            position: "back",
            row: {
                opacity: 0.3
            }, 
        }
    }

    return (
        <Chart options={options}  series={series}  type="area"
            width="100%"
            height= "188"
            className="mx-auto chart"
        />
    )
}

export default DashboardChart