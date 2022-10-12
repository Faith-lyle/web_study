var yield_chart = echarts.init(document.getElementById('c2'));
yield_option = {
  series: [
    {
      type: 'gauge',
      startAngle: 180,
      endAngle: 0,
      center: ['50%', '75%'],
      radius: '90%',
      min: 0,
      max: 1,
      splitNumber: 8,
      axisLine: {
        lineStyle: {
          width: 6,
          color: [
            [0.25, '#FF6E76'],
            [0.5, '#FDDD60'],
            [0.75, '#58D9F9'],
            [1, '#7CFFB2']
          ]
        }
      },
      pointer: {
        icon: 'path://M12.8,0.7l12,40.1H0.7L12.8,0.7z',
        length: '12%',
        width: 20,
        offsetCenter: [0, '-60%'],
        itemStyle: {
          color: 'auto'
        }
      },
      axisTick: {
        length: 12,
        lineStyle: {
          color: 'auto',
          width: 2
        }
      },
      splitLine: {
        length: 20,
        lineStyle: {
          color: 'auto',
          width: 5
        }
      },
      axisLabel: {
        color: 'red',
        fontSize: 20,
        distance: -100,
        rotate: 'tangential',
        formatter: function (value) {
          if (value === 0.875) {
            return 'Perfect';
          } else if (value === 0.625) {
            return 'Grade B';
          } else if (value === 0.375) {
            return 'Grade C';
          } else if (value === 0.125) {
            return 'Grade D';
          }
          return '';
        }
      },
      title: {
        offsetCenter: [0, '-10%'],
        fontSize: 20
      },
      detail: {
        fontSize: 30,
        offsetCenter: [0, '-35%'],
        valueAnimation: true,
        formatter: function (value) {
          return Math.round(value * 100)+"%";
        },
        color: 'auto'
      },
      data: [
        {
          value: 0.7,
          name: 'Yield'
        }
      ]
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

function get_data(){
    var username = getCookie("username");
    var pwd = getCookie("pwd");
    if (username!= ""| pwd != "") {
        $(".username").text(username);
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


yield_chart.setOption(yield_option);
get_data()
update_time()
setInterval(update_time,1000)