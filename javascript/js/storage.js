function StorageFn () {
  this.ls = window.localStorage;
  this.ss = window.sessionStorage;
}

    /*-----------------cookie---------------------*/
    /*设置cookie*/
StorageFn.prototype.setCookie = function(name, value, day) {
  var setting = arguments[0];
  if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object'){
      for (var i in setting) {
          var oDate = new Date();
          oDate.setDate(oDate.getDate() + day);
          document.cookie = i + '=' + setting[i] + ';expires=' + oDate;
      }
  }else{
      var oDate = new Date();
      oDate.setDate(oDate.getDate() + day);
      document.cookie = name + '=' + value + ';expires=' + oDate;
  }
}

    /*获取cookie*/
StorageFn.prototype.getCookie = function(name) {
  var arr = document.cookie.split('; ');
  for (var i = 0; i < arr.length; i++) {
      var arr2 = arr[i].split('=');
      if (arr2[0] == name) {
          return arr2[1];
      }
  }
  return '';
}

    /*删除cookie*/
StorageFn.prototype.removeCookie = function(name) {
  this.setCookie(name, 1, -1);
}


    /*-----------------localStorage---------------------*/
    /*设置localStorage*/
StorageFn.prototype.setLocal = function(key, val) {
  var setting = arguments[0];
  if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object'){
      for(var i in setting){
          this.ls.setItem(i, JSON.stringify(setting[i]))
      }
  }else{
      this.ls.setItem(key, JSON.stringify(val))
  }
}

    /*获取localStorage*/
StorageFn.prototype.getLocal = function(key) {
  if (key) return JSON.parse(this.ls.getItem(key))
  return null;
}

    /*移除localStorage*/
StorageFn.prototype.removeLocal = function(key) {
  this.ls.removeItem(key)
}

    /*移除所有localStorage*/
StorageFn.prototype.clearLocal = function() {
  this.ls.clear()
}


    /*-----------------sessionStorage---------------------*/
    /*设置sessionStorage*/
StorageFn.prototype.setSession = function(key, val) {
  var setting = arguments[0];
  if (Object.prototype.toString.call(setting).slice(8, -1) === 'Object'){
      for(var i in setting){
          this.ss.setItem(i, JSON.stringify(setting[i]))
      }
  }else{
      this.ss.setItem(key, JSON.stringify(val))
  }
}

    /*获取sessionStorage*/
StorageFn.prototype.getSession = function(key) {
  if (key) return JSON.parse(this.ss.getItem(key))
  return null;
}

    /*移除sessionStorage*/
StorageFn.prototype.removeSession = function(key) {
  this.ss.removeItem(key)
}

    /*移除所有sessionStorage*/
StorageFn.prototype.clearSession = function() {
  this.ss.clear()
}
