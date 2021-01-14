// ==UserScript==
// @name         HEU【自动签到】
// @namespace    小试牛刀
// @version      0.1
// @description  HEU自动签到
// @author       Mr.Guan
// @match        https://www.hao123.com
// @match        https://cas.hrbeu.edu.cn/cas/login?service=http%3A%2F%2Fjkgc.hrbeu.edu.cn%2Finfoplus%2Fform%2FJSXNYQSBtest%2Fstart
// @match        http://jkgc.hrbeu.edu.cn/infoplus/form/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var _set = {
        username:2019040406,//学号，用户名
        password:11170614,//密码
    };
//do{
 //   var today = Date().toString();
  //  var p = today.split(' ',10);
 //   var pp = p[4].split(':',10);
 //   var num = parseInt(pp[0],2);
//}while(num != 8)
 var _input;
    var _name;
    var _key;
    if(window.location.href==="https://www.hao123.com/")
    {
        window.location.href = "https://cas.hrbeu.edu.cn/cas/login?service=http%3A%2F%2Fjkgc.hrbeu.edu.cn%2Finfoplus%2Fform%2FJSXNYQSBtest%2Fstart";
    }
    if(window.location.href ==="https://cas.hrbeu.edu.cn/cas/login?service=http%3A%2F%2Fjkgc.hrbeu.edu.cn%2Finfoplus%2Fform%2FJSXNYQSBtest%2Fstart" )
    {
        setTimeout(//5秒后触发
            function(){
                _input = document.getElementsByClassName("loginBtn");
                _name = document.getElementById("username");
                _key = document.getElementById("password");
                _name.value = _set.username;
                _key.value = _set.password;
                _input[0].click();
            }
            ,5000 );
    }
    if(window.location.href !="https://www.hao123.com/"&&window.location.href !="https://cas.hrbeu.edu.cn/cas/login?service=http%3A%2F%2Fjkgc.hrbeu.edu.cn%2Finfoplus%2Fform%2FJSXNYQSBtest%2Fstart/" )
    {
        setTimeout(//5秒后触发
            function(){
        var kick = document.getElementById("V1_CTRL82");
        kick.checked = true;
        var done = document.getElementsByClassName("command_button_content");
        done[0].click();
                setTimeout(function(){
                var ptr = document.getElementsByClassName("dialog_button default fr");
                    ptr[0].click();
                    setTimeout(function(){
                        var ptr = document.getElementsByClassName("dialog_button default fr");
                    ptr[0].click();
                        },2000);
                },2000);
                      }
            ,5000 );
    }
         //done.click();
})();
