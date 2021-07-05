/*
 * @Author: your name
 * @Date: 2021-07-05 11:15:47
 * @LastEditTime: 2021-07-05 16:16:34
 * @LastEditors: Please set LastEditors
 * @Description: 快速排序
 * @FilePath: \learn-my-first-algorithm-book\m-2\6.js
 * 
 * 思想：随机寻找基准值，将剩下的数分为比基准值小的和比基准值大的两个类别，再对这两个类别重复执行此操作
 * 
 */

const aryFun=function(ary){
    // 设定一个基准值
    const centerIndex=Math.floor(ary.length/2);
    const roundNum=ary[centerIndex];
    // 将剩下的数据分为比基准值小的和比基准值大的
    let aryMins=[];
    let aryMaxs=[];
    for (let i = 0; i < ary.length; i++) {
        if(i!=centerIndex){
            if(ary[i]>roundNum){
                aryMaxs.push(ary[i])
            }else if(ary[i]<roundNum){
                aryMins.push(ary[i])
            }
        }
    }
    if(aryMins.length>1){
        aryMins=aryFun(aryMins);
    }
    if(aryMaxs.length>1){
        aryMaxs=aryFun(aryMaxs);
    }
    // 按顺序合并小的，基准值，大的
    aryMins.push(roundNum);
    for (let i = 0; i < aryMaxs.length; i++) {
        aryMins.push(aryMaxs[i]);
    }
    return aryMins;
}

const ary=[5,9,3,2,8,4,7,6,1];
const newAry=aryFun(ary);
console.log(newAry);