/*
 * @Author: your name
 * @Date: 2021-07-01 17:17:58
 * @LastEditTime: 2021-07-02 14:57:33
 * @LastEditors: Please set LastEditors
 * @Description: 其它算法
 * @FilePath: \learn-my-first-algorithm-book\m-7\1.js
 */

/**
 * 1、欧几里得算法(辗转相除法)
 * 
 * 用于计算两个数的最大公约数
 * 1、用大的数除以小的数，得到余数
 * 2、再用小的数作为被除数，余数作为除数，再相除，得到余数
 * 3、重复执行1、2步骤，知道余数为0，那最后一个除数即为最大公约数
 * 
 */

/**
 * 2、素性测试
 * 
 * 用于判断一个自然数是否为素数的测试
 * 素数即只能被1和其自身整除且大于1的自然数
 * 
 * 使用"费马测试"方法判断一个数为素数的可能性
 * p=素数
 * n<p
 * n^p mod p = n
 * 设定一个要判断是否为素数的p值,随机挑选几个n的值
 * 根据上述条件及公式运算，看几组测试是否都符合公式，如果符合则p值是素数
 * 
 */

/**
 * 3、网页排名（佩奇排名）
 * 
 * 利用网页之间的链接结构计算出网页价值的算法
 * 通过某一刻正在浏览这个网页的概率来计算
 * 链接形成环状时也能计算
 * 
 */

/**
 * 4、汉诺塔
 * 
 * 一次只能移动一个圆盘
 * 不能把大的圆盘放在小的圆盘上
 * 
 */