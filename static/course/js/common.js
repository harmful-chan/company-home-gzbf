

//免费表单的发送短信的方法
function getCommonPhoneCode(){
    layui.use(['form','layedit','layer'], function () {
        var $ = layui.jquery,form = layui.form,layer = layui.layer;

        var phone = $("#commonPhone").val();
        if (phone == '') {
            layer.msg('请输入手机号码',{icon:0});
            $(".type_phone").focus();
            return false;
        }
        if (!phone.match(/^(13[0-9]{9})|(18[0-9]{9})|(19[0-9]{9})|(16[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/)) {
            layer.msg('手机号码填写不正确',{icon:0});
            return false;
        }

        $('.btn-code').attr('disabled', 'disabled');
        var i = 59;
        var flag = setInterval(function() {
            $('.btn-code').text("重新发送(" + i + "s)");
            if (i-- == 0) {
                clearInterval(flag);
                $('.btn-code').removeAttr('disabled').text("获取验证码");
            }
        }, 1000);
        $.ajax({
            url : "{:url('web/seller/sendMsg')}",
            type : "POST",
            data : {phone : phone},
            dataType : "json",
            success : function(res) {
                if (res.code == 1) {
                    layer.msg(res.msg,{icon:1});
                } else {
                    layer.msg(res.msg,{icon:0});
                    clearInterval(flag);
                    $('.btn-code').removeAttr('disabled').text("获取验证码");
                }
            },
            error : function() {
                layer.msg('网络错误！',{icon:0});
            }
        });
    });

}
//预约功能区号





function mobileCommonPrefix(_type = 0){
    $.ajax({
        type: "POST",
        url: 'http://www.sellerwell.com/mobile-prefix',
        data:{'type':_type},
        dataType: "json",
        success: function (res) {
            var _optionForeignCountryHtml="";
            // if(_type == 1){
            //     _optionForeignCountryHtml="";
            // }
            if(res.result){
                $.each(res.result, function(k,v) {
                    _optionForeignCountryHtml+='<option value="'+v.mobile_prefix+'">+ '+v.mobile_prefix+'</option>';
                });
            }
            $('.mobile_prefix-select').html(_optionForeignCountryHtml);
            layui.form.render('select');
        },
        error: function (res) {


        }
    });
}
//访问第一条记录
function CommonReferrer(){
    var referrer_url=document.referrer;
    if(!referrer_url){
        referrer_url=window.location.href;
    }
    $.ajax({
        type: "POST",
        async: false,
        url: 'http://www.sellerwell.com/home/referrer',
        data:{'url':referrer_url},
        dataType: "json",
        success: function (res) {
            //console.log(res)
        },
        error: function (res) {
        }
    });
}
// 进行分页
function toCommonPage(paginator) {
    layui.use('laypage', function () {
        let laypage = layui.laypage;
        // 调用分页
        laypage.render({
            // 分页容器的id
            elem: 'page',// *必选参数
            // 数据总数，从服务端得到
            // 每页显示的条数。laypage将会借助 count 和 limit 计算出分页数。
            //limit:limit,
            // 起始页
            //curr:Pager,
            // 连续出现的页码个数
            //groups:5,
            // 自定义每页条数的选择项
            // limits: [10, 25, 50, 100],
            curr : paginator.page || 1,
            count : paginator.count,
            limit : paginator.pageSize || 1,
            // 自定义首页、尾页、上一页、下一页文本
            first: '首页',
            last: '尾页',
            prev: '<em><</em>',
            next: '<em>></em>',
            // 自定义主题 #F7F8F8
            theme: "#2469F0",
            // 自定义排版
            layout: [ 'prev', 'page', 'next'],
            // 渲染数据
            jump: function (obj, first) {
                // data包含了当前分页的所有参数

                // 首次不执行
                if (!first) {
                    getCommonList(obj.curr);
                }
            }
        });
    })
}

//自动文字输入-banner
function bannerAutomaticTyping(str="即刻体验一站式跨境服务") {
    var str_title=str;
    var myDiv = $('.section-appointment-box .h4-title');
    var contentArr = str.split("");
    var content = "";
    var index = 0;
    var ID = setInterval(function () {
        content += contentArr[index];
        myDiv.html( content + " <span style='font-weight: normal;'>|</span>");
        index++;
        if(index === contentArr.length){
            myDiv.html(content);
            clearInterval(ID);
            setTimeout(function () {
                myDiv.html('');
                bannerAutomaticTyping(str_title);
            },1000)
        }
    },100);
}


