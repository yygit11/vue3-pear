<script>
export default {
    data() {
        return {
            tableData: [
                {
                    id:5,
                    name: 'b2',
                    spectrum_predict_type: 'disease',
                    image_predict_type: 'disease',
                    fusion_predict_type:'disease',
                    date: '2024-02-26',
                },
                {
                    id:4,
                    name: 'h2',
                    spectrum_predict_type: 'health',
                    image_predict_type: 'health',
                    fusion_predict_type:'health',
                    date: '2024-02-25',
                },
                {
                    id:3,
                    name: 'h1',
                    spectrum_predict_type: 'health',
                    image_predict_type: 'health',
                    fusion_predict_type:'health',
                    date: '2024-02-25',
                },
                {
                    id:2,
                    name: 'b1',
                    spectrum_predict_type: 'health',
                    image_predict_type: 'disease',
                    fusion_predict_type:'disease',
                    date: '2024-02-26',
                },
                {
                    id:1,
                    name: 'b1',
                    spectrum_predict_type: 'health',
                    image_predict_type: 'disease',
                    fusion_predict_type:'disease',
                    date: '2024-02-26',
                },
                // {
                //     id:10,
                //     name: 'b8',
                //     spectrum_predict_type: 'disease',
                //     image_predict_type: 'disease',
                //     fusion_predict_type:'disease',
                //     date: '2024-02-25',
                // },
                // {
                //     id:9,
                //     name: 'b7',
                //     spectrum_predict_type: 'disease',
                //     image_predict_type: 'disease',
                //     fusion_predict_type:'disease',
                //     date: '2024-02-25',
                // },
                // {
                //     id:8,
                //     name: 'b6',
                //     spectrum_predict_type: 'disease',
                //     image_predict_type: 'disease',
                //     fusion_predict_type:'disease',
                //     date: '2024-02-25',
                // },
                // {
                //     id:7,
                //     name: 'b5',
                //     spectrum_predict_type: 'health',
                //     image_predict_type: 'disease',
                //     fusion_predict_type:'disease',
                //     date: '2024-02-25',
                // },
                // {
                //     id:6,
                //     name: 'b4',
                //     spectrum_predict_type: 'disease',
                //     image_predict_type: 'disease',
                //     fusion_predict_type:'disease',
                //     date: '2024-02-25',
                // }
            ]
        };
    }
  }
</script>
<template>
    <div class="pearPage1-bg"></div>
    <div class="container">
        <div class="pearPage1-main">
            <div class="main_tip">
                <el-alert title="提升：默认按时间排序" type="info"></el-alert>

            </div>
            <div class="history-main">
                <div class="all-history">全部记录：
                    <el-table :data="tableData" stripe style="width: 100%">
                        <el-table-column prop="id" label="id" width="60"></el-table-column>
                        <el-table-column prop="name" label="name" width="80"></el-table-column>
                        <el-table-column prop="spectrum_predict_type" label="spectrum_predict" width="160"></el-table-column>
                        <el-table-column prop="image_predict_type" label="image_predict" width="160"></el-table-column>
                        <el-table-column prop="fusion_predict_type" label="fusion_predict" width="160"></el-table-column>
                        <el-table-column prop="date" label="date" width="160"></el-table-column>
                    </el-table>
                </div>
                <div class="pagination-main">
                    <el-pagination background layout="prev, pager, next" :total="12" />
                </div>
            </div>


        </div>
    </div>

</template>
<style scoped lang="scss">
    .pearPage1-bg {
        background: url('@/assets/images/home-bg.png') no-repeat center / cover;
        height: 400px;
        position: relative;
    }
    .pearPage1-main {
        height: 750px;
        border-radius:25px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1), 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        margin-top: -140px;
        background-color: whitesmoke;

        .main_tip{
            margin: auto;
            width: 50%;
            padding: 20px;
        }
        .all-history{
            padding: 40px;
        }
        .history-main{
            margin: auto;
            // height: 250px;
            width: 900px;
            border-radius:20px;
            background-color:aliceblue;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1), 0 2px 12px 0 rgba(0, 0, 0, 0.1);

        }
        .pagination-main{
            padding: 0px 40px 40px;
        }
    }

</style>