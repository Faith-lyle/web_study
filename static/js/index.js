
(function ($) {
    "use strict";

    
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().length != 8) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);

$(".login100-form-btn").click(function(){
    var username = $("input[name='email']").val().trim();
    var pwd = $("input[name='pass']").val().trim();
    $.ajax({
        url:"/login",
        type:"post",
        data:{"username":username,"pwd":pwd},
        success:function(datas){
            if (datas=="ok"){
              var url = window.location.href;
                window.location.href=`${url}/main?username=${username}&pwd=${pwd}`;
            }
            else{
                alert("密码错误！");
            }
        },
        error:function(xhr,type,errorThrown){

        }
    })
})