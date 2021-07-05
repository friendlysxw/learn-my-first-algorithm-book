/*
 * @Author: your name
 * @Date: 2021-07-05 11:15:11
 * @LastEditTime: 2021-07-05 16:11:12
 * @LastEditors: Please set LastEditors
 * @Description: 归并排序
 * @FilePath: \learn-my-first-algorithm-book\m-2\5.js
 * 
 * 思想：把序列分成长度相等的两个子序列，当无法继续往下分时，就对所有子序列进行归并（归并：把两个排好序的字序列合并成一个有序序列）
 * 
 */

const aryFun=function(ary){
    const centerIndex=Math.floor(ary.length/2);
    
    // 把数组拆分子序列
    let aryLeft=ary.slice(0,centerIndex);
    let aryRight=ary.slice(centerIndex);

    // 只有子序列数量大于1时才继续拆分，否则停止拆分
    if(aryLeft.length>1){
        aryLeft=aryFun(aryLeft)
    }
    if(aryRight.length>1){
        aryRight=aryFun(aryRight)
    }

    // 拆分进行归并操作，把下层的排好序归并到上层
    for (let i = 0; i < ary.length; i++) {

        // 如果两个类别的数组都还有没拿出的数据
        if(aryLeft.length>0&&aryRight.length>0){
            if(aryLeft[0]<aryRight[0]){
                ary[i]=aryLeft[0];
                aryLeft=aryLeft.slice(1);
            }else{
                ary[i]=aryRight[0]
                aryRight=aryRight.slice(1);
            }
        // 如果只有左边的数组还有没拿出的数据
        }else if(aryLeft.length>0){
            ary[i]=aryLeft[0];
            aryLeft=aryLeft.slice(1);
        // 如果只有右边的数组还有没拿出的数据
        }else{
            ary[i]=aryRight[0];
            aryRight=aryRight.slice(1);
        }

    }
    return ary;
}

const ary=[5,9,3,2,8,4,7,6,1];
const newAry=aryFun(ary);
console.log(newAry);