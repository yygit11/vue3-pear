//封装分类相关代码
import { getCategoryAPI } from '@/apis/category';
import { onMounted, ref } from 'vue';
import { useRoute,onBeforeRouteUpdate} from 'vue-router'
export function useCategory(){
    //获取f分类数据
    const categoryData = ref({})
    const route = useRoute()
    const getCategory = async(id = route.params.id)=>{
        const res = await getCategoryAPI(id)
        categoryData.value = res.result
    }
    onMounted(()=>getCategory())

    //目标：路由参数变化的时候，分类数据接口可以重新发送
    onBeforeRouteUpdate((to)=>{ 
    // console.log(route.params.id);//滞后
    // console.log(to.params.id);//最新
    getCategory(to.params.id)
    })
    return {
        categoryData
    }
}