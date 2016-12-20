/*排序算法重新实现，添加到构造函数Array的原型当中*/

//转换函数
Array.prototype.swap = function (i, j) {
    var tmp = this[i];
    this[i] = this[j];
    this[j] = tmp;
};

//冒泡算法
Array.prototype.bubbleSort = function () {
    for (var i = this.length-1; i > 0; i--) {
        for (var j = 0; j < i; j++) {
            if(this[j] > this[j+1]) {
                this.swap(j, j+1);
            }
        }
    } 
};

//选择排序
Array.prototype.selectionSort = function () {
    for (var i = 0; i < this.length; i++) {
        var index = i;
        for (var j = i+1; j < this.length; j++) {
            if(this[j] < this[index]){
                index = j;
            }
        }
        this.swap(i, index);
    }
};

//插入排序
Array.prototype.insertionSort = function () {
    for (var i = 1; i < this.length; i++) {
        var j = i, value = this[i];
        while(j > 0 && value < this[j-1]){
            this[j] = this[j-1];
            j--;
        }
        this[j] = value;
    }
};

//希尔排序
Array.prototype.shellSort = function () {
    for (var step = parseInt(this.length)/2; step > 0; step--) {
        for(var i = 0; i < step; i++) {
            for (var j = step+i; j < this.length; j += step) {
                var k = j, value = this[k];
                while(k >= step && value < this[k-step]){
                    this[k] = this[k-step];
                    k -= step;
                }
                this[k] = value;
            }
        }
    }
};

//归并排序
var mergeSort = function (arr) {
    var n = parseInt(arr.length/2);
    if(n < 1){
        return arr;
    }else{
        var arr1 = mergeSort(arr.slice(0, n));
        var arr2 = mergeSort(arr.slice(n));
    }
    var a = [];
    var i = 0, j = 0;
    while(i<arr1.length && j<arr2.length){
        if(arr1[i]<arr2[j]){
            a.push(arr1[i]);
            i++;
        }else{
            a.push(arr2[j]);
            j++;
        }
    }
    a = a.concat(arr1.slice(i));
    a = a.concat(arr2.slice(j));
    return a;
}

//快速排序
arr = [3,8,7,4,1,9,0,2,5,6];
var b = mergeSort(arr);
//arr.shellSort();
console.log(b);