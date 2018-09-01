/*作者：郑航
链接：https://www.zhihu.com/question/35787390/answer/64451137
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/
Function.prototype.apply = function(obj, arr) {
    obj = Object(obj) || window;
    obj._tem = this; //使该函数成为指定对象的一个方法
    var result;
    if (!arr) {
        result = obj._tem(); //若没有参数则直接在指定对象上调用该函数，改变this的值为指定对象
    } else {
        var args = [];
        for (var i = 0, len = arr.length; i < len; i ++) {
              args.push('arr[' + i + ']');
        } //若有参数，则拼凑出"arr[0],arr[1],arr[2]"这样的字符串
        result = eval('obj._tem(' + args + ')') //执行obj._tem(arr[0],arr[1],arr[2])
    }
    delete obj._tem;
    return result;
}
/*作者：冴羽
链接：https://www.zhihu.com/question/35787390/answer/148990207
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/
Function.prototype.call = function (context) {
    var context = context || window;
    context.fn = this;

    var args = [];
    for(var i = 1, len = arguments.length; i < len; i++) {
        args.push('arguments[' + i + ']');
    }

    var result = eval('context.fn(' + args +')');

    delete context.fn
    return result;
}

function ClassA(str, fn, obj, arr) {
    console.log(this.name);
    console.log(str);
    fn();
    console.log(obj);
    console.log(arr);
}

var obj = {
    name: 'name'
};

ClassA.call(obj, 'string', function(){
    var fnStr = 'this is a string in function';
    console.log(fnStr)
}, {
    color: 'red'
}, [1, 2, 3]);