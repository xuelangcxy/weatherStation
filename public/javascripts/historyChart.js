//历史数据图
require.config({
    paths: {
        //echarts: 'http://echarts.baidu.com/build/dist'
        echarts: 'dist'
    }
});

// 使用
require(
    [
        'echarts',
        'echarts/chart/bar',
        'echarts/chart/line' // 使用柱状图就加载bar模块，按需加载
    ],
    function(ec) {
        // 基于准备好的dom，初始化echarts图表
        var historyChart = ec.init(document.getElementById('historyChart'));

        option = {
            backgroundColor: 'rgb(151,150,184)',
            title: {
                show: true,
                text: '北京 最近24小时空气质量指数(AQI)趋势',
                x: 'center',
                textStyle: {
                    fontSize: 22,
                },
            },
            tooltip: {
                trigger: 'axis'
            },
            toolbox: {
                show: true,
                feature: {
                    mark: {
                        show: false
                    },
                    dataView: {
                        show: true,
                        readOnly: false
                    },
                    magicType: {
                        show: true,
                        type: ['line', 'bar']
                    },
                    restore: {
                        show: false
                    },
                    saveAsImage: {
                        show: true
                    }
                }
            },
            /*grid: {
                x: 80,
                y: 60,
            },*/
            calculable: true,
            legend: {
                data: ['pm 2.5浓度'],
                x: 'left',
                textStyle: {
                    fontSize: 20,
                }
            },
            xAxis: [{
                type: 'category',
                /*show: true,*/
                name: '检测时间',
                nameLocation: 'end',
                nameTextStyle: {
                    fontSize: 18,
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgb(63,136,187)',
                        type: 'solid',
                        width: '3',
                    },
                },
                axisLabel: {
                    textStyle: {
                        fontSize: 15,
                    },
                },
                axisTick: {
                    show:true,
                },
                splitLine: {
                    show: false,
                },
                boundaryGap: false,
                /*data: ['0:00', '2:00', '4:00', '6:00', '8:00', '10:00', '12:00', '14:00', '16:00', '18:00', '20:00', '22:00']*/
                data: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00',]
            }],
            yAxis: [{
                type: 'value',
                name: '浓度 (μg/m³)',
                nameLocation: 'left',
                nameTextStyle: {
                    rotate: 90,
                    fontSize: 20,
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgb(63,136,187)',
                        type: 'solid',
                        width: '3',
                    },
                },
                axisLabel: {
                    formatter: '{value}',
                    textStyle: {
                        fontSize: 15,
                    },
                },
                axisTick: {
                    show:true,
                },
                /*splitLine: {
                    show: false,
                },*/
            }],
            series: [

                {
                    name: 'pm 2.5浓度',
                    type: 'line',
                    /*smooth: true,*/
                    //data: [24, 136, 79, 32, 256, 125, 335, 68, 189, 200, 64, 233]
                    data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,]
                },
            ]
        };

        historyChart.setOption(option, true);

        clearInterval(timeTicket);
        var timeTicket = setInterval(function() {
            for (var i = 0; i < 24; i++) {
                option.series[0].data[i] = (Math.random() * 500).toFixed(0) - 0;
            };
            historyChart.setOption(option, true);
        }, 2000)

    }
);