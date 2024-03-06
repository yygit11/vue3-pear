import { defineStore } from "pinia";
import {ref,computed} from 'vue'
import { useUserStore } from './user'
import {insertCartAPI,findNewCartListAPI,delCartAPI} from '@/apis/cart'

export const useCartStore = defineStore('cart',()=>{
  const userStore = useUserStore()
  const isLogin = computed(()=>userStore.userInfo.token)
    //1.定义state cartList
    const cartList = ref([])
    //获取最新购物车列表action
    const updateNewList = async() =>{
      const res = await findNewCartListAPI() //获取购物车列表
      cartList.value = res.result //覆盖本地的
    }
    //2.定义action addCart
    const addCart = async (goods) => {
      const {skuId,count} = goods
      if(isLogin.value){
        //登录之后的加入购物车逻辑
        await insertCartAPI({skuId,count}) //加入购物车
        updateNewList()
      }else{
        // 添加购物车操作
        // 已添加过 - count + 1
        // 没有添加过 - 直接push
        // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过
        const item = cartList.value.find((item) => goods.skuId === item.skuId)
        if (item) {
          // 找到了
          item.count++
        } else {
          // 没找到
          cartList.value.push(goods)
        }
      }
    }
    //删除购物车
    const delCart = async (skuId) => {
      if (isLogin.value){
        //调用删除接口
        await delCartAPI([skuId])
        updateNewList()
      }else{
        //思路：
        // 1.找到要删除项的下标值 splice
        // 2.使用数据的过滤方法 filter
        const idx = cartList.value.findIndex((item)=> skuId ===item.skuId)
        cartList.value.splice(idx,1)
      }
    }

    //清除购物车
    const clearCart = ()=>{
      cartList.value = []
    }


    //单选功能
    const singleCheck = (skuId,selected) =>{
      const item = cartList.value.find((item)=>item.skuId === skuId)
      item.selected = selected
    }
    //全选功能
    const allCheck = (selected)=>{
      cartList.value.forEach((item) => item.selected = selected)
    }
    
    //计算属性
    //1.总的数量
    const allCount = computed(()=>cartList.value.reduce((a,c)=>a+c.count,0))
    //2.总价
    const allPrice = computed(()=>cartList.value.reduce((a,c)=>a+c.count*c.price,0))
    //3.已选择数量
    const selectedCount = computed(()=>cartList.value.filter((item)=>item.selected).reduce((a,c)=>a+c.count,0))
    //4,已选择价钱
    const selectedPrice = computed(()=>cartList.value.filter((item)=>item.selected).reduce((a,c)=>a+c.count*c.price,0))

    //是否全选
    const isAll = computed(()=>cartList.value.every((item)=>item.selected))

    return {
        cartList,
        addCart,
        delCart,
        isAll,
        selectedCount,
        selectedPrice,
        clearCart,
        allCount,
        allPrice,
        singleCheck,
        allCheck,
        updateNewList
    }
}, {
  persist: true,
})