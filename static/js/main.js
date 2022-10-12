var hsgChart = echarts.init(document.getElementById('housing_summary'));
var capChart = echarts.init(document.getElementById('cap_summary'));
var idoChart = echarts.init(document.getElementById('ido_summary'));
hsg_option = {
  title:{
    text:"HSG 良率趋势图",
    left:"center",
    top:"top",
    textStyle: {
      fontSize: 30,
      color: "white"
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  legend: {
    data: ['Fail QTY', 'Yield'],
    bottom: "0%",
    left: "34%",
    textStyle: {
      color: "rgba(255, 255, 255, 1)"
    }
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'QTY',
      min: 0,
      max: 30,
      interval: 10,
      axisLabel: {
        formatter: '{value}'
      }
    },
    {
      type: 'value',
      name: 'Yield',
      min: 85,
      max: 100,
      interval: 5,
      axisLabel: {
        formatter: '{value} %'
      }
    }
  ],
  series: [
    {
      name: 'Fail QTY',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value;
        }
      },
      itemStyle: {
      color: "rgba(255, 17, 0, 1)"
      },
      data: [
        2, 5, 9, 26, 7, 17, 15.6, 12, 8, 8, 6, 3
      ]
    },
    {
      name: 'Yield',
      type: 'line',
      yAxisIndex: 1,
      lineStyle: {
      color: "rgba(94, 255, 0, 1)"
      },
      tooltip: {
        valueFormatter: function (value) {
          return value + ' %';
        }
      },
      data: [92.7, 92.2, 93.3, 94.5, 96.3, 90.2, 92.3, 93.4, 93.0, 96.5, 92.0, 96.2]
    }
  ]
};
cap_option = {
  title:{
    text:"CAP 良率趋势图",
    left:"center",
    top:"top",
    textStyle: {
      fontSize: 30,
      color: "white"
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  legend: {
    data: ['Fail QTY', 'Yield'],
    bottom: "0%",
    left: "34%",
    textStyle: {
      color: "rgba(255, 255, 255, 1)"
    }
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'QTY',
      min: 0,
      max: 30,
      interval: 10,
      axisLabel: {
        formatter: '{value}'
      }
    },
    {
      type: 'value',
      name: 'Yield',
      min: 85,
      max: 100,
      interval: 5,
      axisLabel: {
        formatter: '{value} %'
      }
    }
  ],
  series: [
    {
      name: 'Fail QTY',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value;
        }
      },
      itemStyle: {
      color: "rgba(255, 17, 0, 1)"
      },
      data: [
        2, 5, 9, 26, 7, 17, 15, 12]
    },
    {
      name: 'Yield',
      type: 'line',
      yAxisIndex: 1,
      lineStyle: {
      color: "rgba(94, 255, 0, 1)"
      },
      tooltip: {
        valueFormatter: function (value) {
          return value + ' %';
        }
      },
      data: [92.7, 92.2, 93.3, 94.5, 96.3, 90.2, 92.3]
    }
  ]
};
ido_option = {
  title:{
    text:"IDO 良率趋势图",
    left:"center",
    top:"top",
    textStyle: {
      fontSize: 30,
      color: "white"
    }
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999'
      }
    }
  },
  legend: {
    data: ['Fail QTY', 'Yield'],
    bottom: "0%",
    left: "34%",
    textStyle: {
      color: "rgba(255, 255, 255, 1)"
    }
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisPointer: {
        type: 'shadow'
      }
    }
  ],
  yAxis: [
    {
      type: 'value',
      name: 'QTY',
      min: 0,
      max: 30,
      interval: 10,
      axisLabel: {
        formatter: '{value}'
      }
    },
    {
      type: 'value',
      name: 'Yield',
      min: 85,
      max: 100,
      interval: 5,
      axisLabel: {
        formatter: '{value} %'
      }
    }
  ],
  series: [
    {
      name: 'Fail QTY',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value;
        }
      },
      itemStyle: {
      color: "rgba(255, 17, 0, 1)"
      },
      data: [
        2, 5, 9, 26, 7, 17, 15.6, 12, 8, 8, 6, 3
      ]
    },
    {
      name: 'Yield',
      type: 'line',
      yAxisIndex: 1,
      lineStyle: {
      color: "rgba(94, 255, 0, 1)"
      },
      tooltip: {
        valueFormatter: function (value) {
          return value + ' %';
        }
      },
      data: [92.7, 92.2, 93.3, 94.5, 96.3, 90.2, 92.3, 93.4, 93.0, 96.5, 92.0, 96.2]
    }
  ]
};
function setCookie(cname,cvalue,exs){
    var d = new Date();
    d.setTime(d.getTime()+(exs*60*1000));
    var expires = "expires="+d.toGMTString();
    document.cookie = cname+"="+cvalue+";"+expires;
}

function getCookie(cname){
    var name = cname+"=";
    var ca = document.cookie.split(';')
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name)==0) {
            return c.substring(name.length,c.length);
        }
    }
    return "";
}

function clear_data(){
	var url = window.location.href;
    var da = url.split('?')[1].split("&");
    for (var i = 0; i < da.length; i++) {
        data = da[i].split("=");
        setCookie(data[0],data[1],300);
    }
	if (url.indexOf("?") != -1){
		url = url.replace(/(\?|#)[^'"]*/,'')
		window.history.pushState({},0,url);
	}
}
function update_time(){
    $.ajax({
        url:"/time",
        timeout:10000,
        success:function(datas){
        	$(".layui-footer").html(datas);
        },
        error:function(xhr,type,errorThrown){

        }
    })
}
function on_click(){
    var username = getCookie("username");
    var pwd = getCookie("pwd");
    $.ajax({
            url:"/login",
            type:"post",
            data:{"username":username,"pwd":pwd},
            success:function(datas){
                if (datas=="ok"){
                  var url = window.location.href.split('/');
                  var url1 = url[0]+"//"+url[1]+url[2];
                  window.location.href=`${url1}/main?username=${username}&pwd=${pwd}`;
                }
                else{
                    alert("密码错误！");
                }
            },
            error:function(xhr,type,errorThrown){
            }
        })
}

function get_cap_summary_data(){
    $.ajax({    
      url:"/capSummary",
      timeout:10000,
      success:function(datas){
        cap_option.series[0].data=datas["qty"];
        cap_option.series[1].data=datas["yield"];
        capChart.setOption(cap_option);
      },
      error:function(xhr,type,errorThrown){

      }
  })
}

hsgChart.setOption(hsg_option);
capChart.setOption(cap_option);
idoChart.setOption(ido_option);
clear_data()
update_time()
setInterval(update_time,1000)
setInterval(get_cap_summary_data,2000)