!(function(obj) {
  // 获取元素

  var getId = function (id) {
    return document.getElementById(id) || document;
  }
  // 事件绑定
  var addEvent = function (el,event,callback) {
    // 非IE浏览器  IE>=8
    if (el.addEventListener) {
       el.addEventListener(event, callback, false);
    }
    // IE浏览器, IE<8
   if (el.attachEvent) {
       el.attachEvent('on' + event, callback);
   } else {
     el['on'+event] = callback;
   }
  }
  
// 删除绑定的事件
  var deleteEvent = function (el,event,callback) {

    // 非IE浏览器  IE>=8
    if (el.removeEventListener) {
       el.removeEventListener(event, callback, false);
    }
    // IE浏览器, IE<8
   if (el.detachEvent) {
       el.detachEvent('on' + event, callback);
   }else {
     el['on'+event] = null;
   }
  }

  // ajax调用
 var ajax = function (options) {
         options = options || {};
         options.type = (options.type || "GET").toUpperCase();
         options.dataType = options.dataType || "json";
         var params = formatParams(options.data);

         var xhr;
         //第一步
         if (window.ActiveXObject) {//返回true为ie浏览器内核,否则不是ie内核
             //为ie内核创建传输对象的方式
             xhr = new window.ActiveXObject("Microsoft.XMLHTTP");
         } else {
             //为非ie 内核浏览器创建传输对象的方式
             xhr = new XMLHttpRequest();
         }

         //接收 - 第三步
         xhr.onreadystatechange = function () {
             if (xhr.readyState == 4) {
                 var status = xhr.status;
                 if (status >= 200 && status < 300) {
                     options.success && options.success(xhr.responseText, xhr.responseXML);
                 } else {
                     options.error && options.error(status);
                 }
             }
         }

         //连接 和 发送 - 第二步
         if (options.type == "GET") {
             xhr.open("GET", options.url + "?" + params, true);
             xhr.send(null);
         } else if (options.type == "POST") {
             xhr.open("POST", options.url, true);
             //设置表单提交时的内容类型
             xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
             xhr.send(params);
         }
     }
     //格式化参数
     function formatParams(data) {
         var arr = [];
         for (var name in data) {
             arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
         }
         arr.push(("v=" + Math.random()).replace(".", ""));
         return arr.join("&");
     }

    //解析查询字符串，并返回包含所有参数的一个对象
   var getQueryStringArgs = function() {
        var qs = (location.search.length > 0 ? location.search.substring(1): ''),
          args = {},
          items = qs.length?qs.split('&'):[],
          name = null,
          value =null,
          arr = [];

          items.forEach(function(item,index) {
            arr= item.split('=');
            name = decodeURIComponent(arr[0]);
            value = decodeURIComponent(arr[1]);
            if (name.length) {
              args[name] = value;
            }
          });
          return args;
   }

obj.libs ={
  author: 'wmhello',
  version: '0.0.1',
  getId:getId,
  addEvent: addEvent,
  ajax: ajax,
  getQueryStringArgs: getQueryStringArgs
};
})(this)
