// if ($('select').length) {
//     $('select').selectize();
// } 



$(document).ready(function () {
    // debugger;
    var selectize = $('select').selectize({
        create: false,
        readOnly: true,
        onChange: function (value) {
            // 选项改变时保存到本地存储
            // debugger;
            defaultLang = value == 'english' ? 'china' : 'english';
            $("[i18n]").i18n({
                defaultLang: value,
            });
            localStorage.setItem("languageStoredKey", value);
            // localStorage.setItem('selectedOptions', JSON.stringify(value));
        },
        onDelete: function (values) {
            // 阻止删除操作
            return false;
        },
        onInitialize: function () {
            this.$control_input.prop("readonly", "readonly");
            this.$control_input.prop("disabled", true); 
        },
        onMouseDown: function (e) {
            e.preventDefault();
        }
    })[0].selectize;

    // 从本地存储中获取选中的值
    var selectedOptions = localStorage.getItem('languageStoredKey');
    if (selectedOptions) {
        // selectedOptions = JSON.parse(selectedOptions);
        selectize.setValue(selectedOptions);
    }else{
        selectedOptions = "china"
    }

    /*默认语言*/
    $("[i18n]").i18n({
        defaultLang: selectedOptions,
        filePath: "/i18n/",
        filePrefix: "i18n_",
        fileSuffix: "",
        forever: true,
        callback: function () {
            console.log("i18n has been completed.");
        }
    });

});


      

// function switchLang() {
//     debugger;
//     let languageStoredItem = localStorage.getItem(languageStoredKey);
//     defaultLang = languageStoredItem == 'english' ? 'china' : 'english';
//     $("[i18n]").i18n({
//         defaultLang: defaultLang,
//     });
//     localStorage.setItem(languageStoredKey, defaultLang);
// }


 


// var LANGUAGE_CODE = "en_US"; //标识语言

// function loadProperties(type) {
//     jQuery.i18n.properties({
//         name: 'set', // 资源文件名称
//         path: '/static/language/', // 资源文件所在目录路径
//         mode: 'map', // 模式：变量或 Map 
//         language: type, // 对应的语言
//         cache: false,
//         encoding: 'UTF-8',
//         callback: function () { // 回调方法    
//             $('#lang').html($.i18n.prop('string_lang'));
            
//             // 导航栏
//             $('#entrance').html($.i18n.prop('entrance'));
//             $('#Products_Services').html($.i18n.prop('Products_Services'));
//             $('#solution').html($.i18n.prop('solution'));
//             $('#lourqcom').html($.i18n.prop('lourqcom'));
//             $('#product_pricing').html($.i18n.prop('pricing'));
//             $('#news').html($.i18n.prop('news'));

//             // 首页
//             $('#slogan').html($.i18n.prop('slogan'));
//             $('#login').html($.i18n.prop('login'));
//             $('#slogan').html($.i18n.prop('slogan'));

//             // 产品与服务
//             $('#section_services').html($.i18n.prop('section_services'));
//             $('#wecando').html($.i18n.prop('wecando'));

//             $('#section_services_slogan').html($.i18n.prop('section_services_slogan'));
//             $('#store_occupancy').html($.i18n.prop('store_occupancy'));

//             $('#desc_store_occupancy').html($.i18n.prop('desc_store_occupancy'));
//             $('#training_course').html($.i18n.prop('training_course'));

//             $('#desc_training_course').html($.i18n.prop('desc_training_course'));
//             $('#Big_data_selection').html($.i18n.prop('Big_data_selection'));

//             $('#desc_Big_data_selection').html($.i18n.prop('desc_Big_data_selection'));
//             $('#desc_erp').html($.i18n.prop('desc_erp'));

//             $('#scm').html($.i18n.prop('scm'));
//             $('#desc_scm').html($.i18n.prop('desc_scm'));

//             $('#overseas_cloud_warehouse').html($.i18n.prop('overseas_cloud_warehouse'));
//             $('#desc_overseas_cloud_warehouse').html($.i18n.prop('desc_overseas_cloud_warehouse'));

//             // 解决方案
//             $('#section_solution').html($.i18n.prop('section_solution'));
//             $('#section_solution_slogan').html($.i18n.prop('section_solution_slogan'));
//             $('#section_solution_slogan_2').html($.i18n.prop('section_solution_slogan_2'));

//             $('#novice_seller').html($.i18n.prop('novice_seller'));
//             $('#desc_novice_seller').html($.i18n.prop('desc_novice_seller'));

//             $('#industrial_zone').html($.i18n.prop('industrial_zone'));
//             $('#desc_industrial_zone').html($.i18n.prop('desc_industrial_zone'));
            
//             $('#old_platform').html($.i18n.prop('old_platform'));
//             $('#desc_old_platform').html($.i18n.prop('desc_old_platform'));

//             $('#multi_platform').html($.i18n.prop('multi_platform'));
//             $('#desc_multi_platform').html($.i18n.prop('desc_multi_platform'));

//             $('#resident_merchant').html($.i18n.prop('resident_merchant'));
//             $('#open_store').html($.i18n.prop('open_store'));
//             $('#signing_success').html($.i18n.prop('signing_success'));
//             $('#platform_shipping').html($.i18n.prop('platform_shipping'));
//         }
//     });
// }

// function switchLang() {
//     LANGUAGE_CODE = LANGUAGE_CODE == 'zh_CN' ? 'en_US' : 'zh_CN';
//     loadProperties(LANGUAGE_CODE);
// }

// $(document).ready(function () {
//     LANGUAGE_CODE = jQuery.i18n.normaliseLanguageCode({}); //获取浏览器的语言     
//     loadProperties(LANGUAGE_CODE);
// })