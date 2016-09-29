/*排序算法重新实现，添加到构造函数Array的原型当中*/

//转换函数
Array.prototype.swap = function (i, j) {
    var tmp = this[i];
    this[i] = this[j];
    this[j] = this[i];
};

//冒泡算法
Array.prototype.bubbleSort = function () {
    for (var i = this.length-1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if(this[j] > this[j+1]) {
                this.swap(j, j+1);
            }
        };
    };  
};

//