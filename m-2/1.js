/*
 * @Author: your name
 * @Date: 2021-06-29 14:25:52
 * @LastEditTime: 2021-07-02 15:46:14
 * @LastEditors: Please set LastEditors
 * @Description: 冒泡排序
 * @FilePath: \learn-my-first-algorithm-book\m-2\1.js
 * 
 * 时间复杂度：(n-1)+(n-2)+(n-3)+...+(n-(n-1))
 * 简化：O(n^2)
 * 
 * 思想：从序列右边开始比较相邻两个数字的大小，再根据结果交换两个数字的位置
 * 
 */
const ary=[5,9,3,2,8,4,7,6,1];

console.log('// 从头部到尾部比较,大的放后面————start');

// 第一层循环只是为了确定对比多少轮
for (let i = 0; i < ary.length-1; i++) {    // 思考应该对比多少轮，案例：8轮，通用：n-1轮

    // 第二次循环才是在本轮中进行两两对比
    for (let j = 0; j < ary.length-i-1; j++) {  // 每轮从第一个开始比较，直到对比到上一次停止的位置

        if(ary[j]>ary[j+1]){  // 如果前一个比后一个大，把大的放到后一个后面

            const temp=ary[j]; // 零时保存前一个，用于交换
            ary[j]=ary[j+1];
            ary[j+1]=temp;

        }

    }  

    console.log(i+'、'+JSON.stringify(ary));  
}

console.log('// 从尾部到头部比较,小的放前面————start');
const ary2=[9,5,3,1,2,8,4,7,6];

for (let i = 0; i < ary2.length-1; i++) { // 思考应该对比多少轮，案例：8轮，通用：n-1轮
    
    for (let j = ary2.length-1; j > i; j--) { // 每轮从最后一个开始比较，直到对比到上一次停止的位置
        
        if(ary2[j]<ary2[j-1]){  // 如果后一个小于前一个，把后一个放到前一个的位置
            const temp=ary2[j];
            ary2[j]=ary2[j-1];
            ary2[j-1]=temp;
        }
    }
    
    console.log(i+'、'+JSON.stringify(ary2));  
}
