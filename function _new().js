function _new ( construct ) {
	var obj = new Object();
	obj.__proto__ = construct.prototype;
	/*var args = new Array();
	for (var i = 1,len = arguments.length; i < len; i++) {
		args.push(arguments[i]);
	}*/
	construct.apply( obj, arguments);
	return obj;
}

function Person ( name, age) {
	this.name = name;
	this.age = age;
}
Person.prototype.callName = function(){
	alert(this.name);
};

var person = _new(Person)("Steven", 22);
alert(person.callName());