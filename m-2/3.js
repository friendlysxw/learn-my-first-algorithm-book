/*
 * @Author: your name
 * @Date: 2021-07-02 15:46:25
 * @LastEditTime: 2021-07-02 17:47:09
 * @LastEditors: Please set LastEditors
 * @Description: 插入排序
 * @FilePath: \learn-my-first-algorithm-book\m-2\3.js
 * 
 * 思想：从右侧的未排序区域内取出一个数据，然后将它插入到已排序区域内合适的位置上
 */
const ary=[5,9,3,2,8,4,7,6,1];

// 第一层循环确定插入多少次到左边
for (let i = 1; i < ary.length; i++) {  // 思考应该插入多少次，每次从第几个插入到左边，案例：8次，通用：n-1次，第二项开始
    let insertIndex;
    let current=ary[i];
    // 第二层确定跟左边的哪些数据进行对比插入到左边
    for (let j = 0; j < i; j++) {
        if(ary[i]<=ary[j]){
            insertIndex=j;
            break;
        }       
    }
    for (let k = i; k >insertIndex ; k--) {
        ary[k]=ary[k-1];
    }
    ary[insertIndex]=current;
    console.log(i+'、'+JSON.stringify(ary));
}