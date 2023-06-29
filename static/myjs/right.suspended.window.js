$(function(){
    // 当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
    $(window).scroll(function () {
        if ($(window).scrollTop() > 100) {
            $(".go_top").fadeIn(500).addClass('item-active');
        } else {
            $(".go_top").fadeOut(500).removeClass('item-active');;
        }
    });
    // 当点击跳转链接后，回到页面顶部位置
    $(".go_top").click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    $('.float_tool_bar .collapse-expand-btn').click(function () {
        var num=$(this).attr('data-id');
        if(num == 1){
            $('.float_tool_bar .collapse-expand-active').hide().removeClass('item-active');
            $(this).attr('data-id',0);
            var languageValue = localStorage.getItem("languageStoredKey");
            if (languageValue == 'china'){
                $(this).find('.txt').html('展开');
            }else{
                $(this).find('.txt').html('Expand');
            }
        }else{
            $('.float_tool_bar .collapse-expand-active').show().addClass('item-active');
            $(this).attr('data-id',1);
            var languageValue = localStorage.getItem("languageStoredKey");
            if (languageValue == 'china'){
                $(this).find('.txt').html('收起');
            }else{
                $(this).find('.txt').html('Put away');
            }
        }

    })
    $('header .nav-main-box .nav-box .nav-list-box').hover(function () {
        var _height=$(this).find('.header-select').height();
        _height='-'+_height+'px';
        $('header .header-bg').css({'bottom':_height})
    },function () {
        $('header .header-bg').removeAttr('style');
    })

    $('.contact_us .weixin-btn').hover(function (){
        $('.contact_us .weixin-img').show();
    },function(){
        $('.contact_us .weixin-img').hide();
    });

    $(document).on('click','.commonLikeBox',function (){
        var _this=$(this);
        likeArticleCommon(_this);
    });
    $('.common-appointment-btn').click(function () {
        var _white_paper_html="";
        _white_paper_html+='<div class="white-paper-content">';
        _white_paper_html+='<div class="title">抢先体验</div>';
        _white_paper_html+='<div class="vc-title">即刻享用海帮跨境一站式服务，一步领先，步步领先</div>';
        _white_paper_html+='<div class="min-title">';
        _white_paper_html+='</div>';
        _white_paper_html+='<form id="white-paper-from" class="layui-form" action="">';
        _white_paper_html+='<input type="hidden" name="home_type" value="1" >';
        _white_paper_html+='<div class="layui-form-item" style="width: 100%">';
        _white_paper_html+='<label class="layui-form-label">联系人:</label>';
        _white_paper_html+='<div class="layui-input-block">';
        _white_paper_html+='<input type="text" name="customer_name" autocomplete="off" class="layui-input" placeholder="请输入您的称呼">';
        _white_paper_html+='</div>';
        _white_paper_html+='</div>';
        _white_paper_html+='<div class="layui-form-item" style="width: 100%">';
        _white_paper_html+='<label class="layui-form-label"><samp>*</samp>联系电话:</label>';
        _white_paper_html+='<div class="layui-input-block" style="display: flex">';
        _white_paper_html+='<input type="text" name="contact" autocomplete="off" class="layui-input" placeholder="请输入您的联系方式">';
        _white_paper_html+='</div>';
        _white_paper_html+='</div>';
        _white_paper_html+='<div class="layui-form-item" style="width: 100%">';
        _white_paper_html+='<label class="layui-form-label"><samp>*</samp>验证码:</label>';
        _white_paper_html+='<div class="layui-input-block" style="display: flex">';
        _white_paper_html+='<input type="text" name="img_verify" autocomplete="off" class="layui-input" placeholder="请输入验证码">';
        _white_paper_html+='<img id="imgCommonCode" src="http://www.h86.cn/web/seller/verify.html">';
        _white_paper_html+='</div>';
        _white_paper_html+='</div>';
        _white_paper_html+='<div class="layui-form-item" style="width: 100%">';
        _white_paper_html+='<label class="layui-form-label">公司名称:</label>';
        _white_paper_html+='<div class="layui-input-block">';
        _white_paper_html+='<input type="text" name="company_name" autocomplete="off" class="layui-input" placeholder="请输入您的公司名称">';
        _white_paper_html+='</div>';
        _white_paper_html+='</div>';
        _white_paper_html+='<div class="layui-form-item" style="width: 100%">';
        _white_paper_html+='<label class="layui-form-label">邮箱:</label>';
        _white_paper_html+='<div class="layui-input-block">';
        _white_paper_html+='<input type="text" name="email" autocomplete="off" class="layui-input" placeholder="请输入您的邮箱">';
        _white_paper_html+='</div>';
        _white_paper_html+='</div>';

        _white_paper_html+='<div class="layui-form-item" style="width: 100%">';
        _white_paper_html+='<label class="layui-form-label">产品&服务:</label>';
        _white_paper_html+='<div class="layui-input-block">';
        _white_paper_html+='<select name="system_id" lay-verify="required" lay-filter="system_id" id="system_id">';
        _white_paper_html+='<option value="招商入驻">招商入驻</option>';
        _white_paper_html+='<option value="运营赋能">运营赋能</option>';
        _white_paper_html+='<option value="海帮ERP">海帮ERP</option>';
        _white_paper_html+='<option value="极客选品">极客选品</option>';
        _white_paper_html+='<option value="海帮云仓">海帮云仓</option>';
        _white_paper_html+='<option value="其他">其他</option>';
        _white_paper_html+='</select>';
        _white_paper_html+='</div>';
        _white_paper_html+='</div>';
        _white_paper_html+='<div class="layui-form-item" style="width: 100%">';
        _white_paper_html+='<label class="layui-form-label">留言:</label>';
        _white_paper_html+='<div class="layui-input-block">';
        _white_paper_html+='<input type="text" name="message" autocomplete="off" class="layui-input" placeholder="请输入问题描述">';
        _white_paper_html+='</div>';
        _white_paper_html+='</div>';
        _white_paper_html+='<div class="layui-input-block">';
        _white_paper_html+='<button type="button" class="layui-btn layui-btn-normal white-paper-save-btn" lay-submit lay-filter="whitePaperSaveBtn">';
        _white_paper_html+='预约演示';
        _white_paper_html+='</button>';
        _white_paper_html+='</div>';
        _white_paper_html+='</form>';
        _white_paper_html+='</div>';
        layui.use(['form','layer'], function(){ //独立版的layer无需执行这一句
            var $ = layui.jquery;
            var layer = layui.layer; //独立版的layer无需执行这一句
            var form = layui.form;
            var whitePaperIndex = layer.open({
                type : 1,
                title : false,
                offset: '100px',
                area : [ '480px', '640px' ],
                content : _white_paper_html,
                skin: 'common-white-paper',
                shade: ['0','#fff'],
                closeBtn:0
            });
            $('.layui-layer-shade').click(function () {
                layer.close(whitePaperIndex);
            });
            $("#imgCommonCode").css({
                'width':'100px',
                'height':'40px',

            });

            $("#imgCommonCode").click(function (){
                $(this).attr('src',"http://www.h86.cn/web/seller/verify.html?v="+Math.random());
            })

            //监听提交
            // //过滤头部导航固定定位url
            // var url_name=window.location.pathname;
            // if((url_name.indexOf("/platform.html")!= -1)){
            //     $(".common-white-paper #system_id").val("1");
            // }else if((url_name.indexOf("/course.html")!= -1)){
            //     $(".common-white-paper #system_id").val("2");
            // }else if((url_name.indexOf("/geek.html")!= -1)){
            //     $(".common-white-paper #system_id").val("4");
            // }else if((url_name.indexOf("/soumaierp.html")!= -1)){
            //     $(".common-white-paper #system_id").val("3");
            // }else if((url_name.indexOf("/yuncang.html")!= -1)){
            //     $(".common-white-paper #system_id").val("5");
            // }else {
            //     $(".common-white-paper #system_id").val("3");
            // }


            form.on('submit(whitePaperSaveBtn)', function(data){
                // var customer_name = $('#white-paper-from [name="customer_name"]').val();
                // if (!customer_name) {
                //     layer.msg('请输入您的姓名', {"icon": 2});
                //     return false;
                // }
                var contact = $('#white-paper-from [name="contact"]').val();
                if (!contact) {
                    layer.msg('请输入您的联系电话', {"icon": 2});
                    return false;
                }
                if (!contact.match(/^(13[0-9]{9})|(18[0-9]{9})|(19[0-9]{9})|(16[0-9]{9})|(14[0-9]{9})|(17[0-9]{9})|(15[0-9]{9})$/)) {
                    layer.msg('手机号码填写不正确', {"icon": 2});
                    return false;
                }
                var img_verify = $('#white-paper-from [name="img_verify"]').val();
                if (!img_verify) {
                    layer.msg('请输入验证码', {"icon": 2});
                    return false;
                }
                $.ajax({
                    url: '/web/seller/tiyan.html',
                    type: "POST",
                    data   : data.field,
                    dataType: 'json',
                    error: function () {
                        layer.msg('网络错误！', {"icon": 2});
                    },
                    success: function (res) {
                        if(res.code==1){

                            layer.msg(res.msg, {"icon": 1});
                            setTimeout(function(){
                                layer.close(whitePaperIndex);
                            },3000);

                        }else{
                            layer.msg(res.msg, {"icon": 2});

                        }
                        return false;
                    }
                });
                return false;
            });
            form.render();

        });
    });

    // //处理点击刷新验证码
    // $(document).on('click','#imgCommonCode',function(){
    //     $.get("/sms/captcha?refresh", function (data) {
    //         $("#imgCommonCode").attr("src", data["url"]);
    //     }, "json");
    // })
    // //处理点击刷新验证码
    // $(document).on('click','#imgCommonCode2',function(){
    //     $.get("/sms/captcha2?refresh", function (data) {
    //         $("#imgCommonCode2").attr("src", data["url"]);
    //     }, "json");
    // })
    // //处理点击刷新验证码
    // $(document).on('click','#imgCommonCode3',function(){
    //     $.get("/sms/captcha3?refresh", function (data) {
    //         $("#imgCommonCode3").attr("src", data["url"]);
    //     }, "json");
    // })
})
