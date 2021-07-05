/*
 * @Author: your name
 * @Date: 2021-07-01 16:00:19
 * @LastEditTime: 2021-07-01 17:17:34
 * @LastEditors: Please set LastEditors
 * @Description: 聚类
 * @FilePath: \learn-my-first-algorithm-book\m-6\1.js
 * 
 * 
 */

/**
 * 1、什么是聚类
 * 
 * 将相似的距分为一组
 * 
 * 关键：如何定义数据间的差距
 * 
 */

/**
 * 2、k-means算法
 * 
 * 它可以根据事先给定的簇的数量进行聚类
 * 
 * 随机选择几个点作为簇的中心点
 * 1、计算各个数据分别与哪个中心点距离最近
 * 2、将数据分到相应的簇中
 * 3、计算各个簇中数据的重心，将簇的中心移到这个位置
 * 重复1、2、3步骤直到中心点不会再发生变化，操作结束
 * 
 */