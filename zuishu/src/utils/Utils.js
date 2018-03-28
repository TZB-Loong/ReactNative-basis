//创建一些公共函数来准备调用
const xurlform = function(params) {
    return Object.keys(params) .map(key=>encodeURIComponent(key)+'='+encodeURIComponent(params[key])) .join('&');
};

const stopEventPropagate = function(event){
    event = event || window.event;  //用于IE  
    if(event.preventDefault) event.preventDefault();  //标准技术  
    if(event.returnValue) event.returnValue = false;  //IE  
    return false;
}

const url2params = function(urlstr){
    var u = decodeURIComponent(urlstr);
    var args = {};
    var item = null;
    urlstr.split("&").map(itm => {
        item = itm.split('=');
        args[item[0]?item[0]:''] = item[1] ? decodeURIComponent(item[1] ): "";
    });
    delete args[''];
    return args;
};

const isfalse = function(param) {
    let r = ['',undefined,null,false,0,].indexOf(param)>=0;
    if (r === false ) {
        if(param.length === 0){  
            // if (typeof param=='function'){ 
            //     r = false;
            // }
            // else if  ( param.length === 0 ){
            r = true;
        } else if (param.construtor){
            r = Object.keys(param).length === 0  ;
        } else if (typeof param == 'object'){
            r = Object.keys(param).length === 0  ;
        }
    }
    return r;
};

const checkChain = function(){
    var chn;
    for(var i = 0;i<arguments.length;i++){
        chn = arguments[i];
        if (typeof chn == 'function'){
            chn = chn();
        }
        if (!isfalse(chn)){
            return chn;
        }
    }
    return '';
}




module.exports = {
    xurlform,
    url2params,
    isfalse,
    checkChain,
    stopEventPropagate,
   
}
