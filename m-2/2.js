/*
 * @Author: your name
 * @Date: 2021-06-29 15:53:32
 * @LastEditTime: 2021-07-02 15:48:23
 * @LastEditors: Please set LastEditors
 * @Description: 选择排序
 * @FilePath: \learn-my-first-algorithm-book\m-2\2.js
 * 
 * 思想：从待排序的数据中寻找最小值，将其与序列最左边的数字进行交换
 * 
 */

const ary=[5,9,3,2,8,4,7,6,1];

// 第一层循环确定要寻找多少次最小值
for (let i = 0; i < ary.length-1; i++) {  // 思考应该对比多少轮，案例：8轮，通用：n-1轮
    // 先定义存储最小值
    let minValue=ary[i];
    let minIndex=i;
    // 第二层循环是在剩下的数据中找最小值
    for (let j = i; j < ary.length; j++) {  // 第几次寻找最小值就从第几个开始寻找
        if(ary[j]<minValue){
            minValue=ary[j];
            minIndex=j;
        }
    }
    // 如果最小值不在剩下数据的首位数据不同，就把最小值和剩下数据的首位调换位置
    if(minValue!=ary[i]){
        const temp=ary[i];
        ary[i]=minValue;
        ary[minIndex]=temp;
    }
    console.log(i+'、'+JSON.stringify(ary));
}