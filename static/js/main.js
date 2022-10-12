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
    alert(username,pwd);
    $.ajax({
            url:"/login",
            type:"post",
            data:{"username":username,"pwd":pwd},
            success:function(datas){
                if (datas=="ok"){
                    var url = window.location.href.split('/');
                    var url1 = url[0]+"//"+url[1]+url[2];
                    alert(url1);
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



clear_data()
update_time()
setInterval(update_time,1000)