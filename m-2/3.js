/*
 * @Author: your name
 * @Date: 2021-07-02 15:46:25
 * @LastEditTime: 2021-07-05 09:14:40
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
    // 此循环确定插入到左边的位置
    for (let j = 0; j < i; j++) {
        if(ary[i]<=ary[j]){
            insertIndex=j;
            break;
        }       
    }
    // 此循环将插入位置的右边向右移动
    for (let k = i; k >insertIndex ; k--) {
        ary[k]=ary[k-1];
    }
    // 移动后插入到指定位置
    ary[insertIndex]=current;
    
    console.log(i+'、'+JSON.stringify(ary));
}