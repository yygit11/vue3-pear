<script>
  export default {
    data() {
        return {
            fileList: [{name: 'pear_b1.csv'}],
            fileList2: [{name: 'pear_b1.jpg', url: ''}],
            tableData: [{
                name: 'b1',
                spectrum_predict_type: 'health',
                image_predict_type: 'disease',
                fusion_predict_type:'disease',
                date: '2024-02-26',
            }]
        };
    },
    methods: {
      handleChange(file, fileList) {
        this.fileList = fileList.slice(-3);
      }
    }
  }
</script>
<template>
    <div class="pearPage1-bg"></div>
    <div class="container">
        <div class="pearPage1-main">
            <div class="main_tip">
                <el-alert title="提示：" type="info">
                    上传光谱和图像需要对应，光谱数据支持.csv文件格式，图像数据支持.png和.jpeg的格式。
                </el-alert>
            </div>
            <div class="data-upload">
                <el-row :gutter="50">
                    <el-col :span="12">
                        <div class="grid-content bg-purple-light">
                            <div style="padding: 20px;">
                                <el-upload
                                    class="upload-demo"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :on-change="handleChange"
                                    :file-list="fileList">
                                    <el-button size="small" type="primary">点击上传光谱文件</el-button>
                                    <div slot="tip" class="el-upload__tip" style="padding-left:5px ;">只支持csv文件，且不超过5mb</div>
                                </el-upload>
                            </div>
                            <div style="padding:0px 20px 10px">
                                <div class="spectrum-detail"></div>
                            </div>
                        </div>
                    </el-col>
                    <el-col :span="12">
                        <div class="grid-content bg-purple">
                            <div style="padding: 20px;">
                                <el-upload
                                    class="upload-demo"
                                    action="https://jsonplaceholder.typicode.com/posts/"
                                    :on-change="handleChange"
                                    :file-list="fileList2">
                                    <el-button size="small" type="primary">点击上传图片</el-button>
                                    <div slot="tip" class="el-upload__tip" style="padding-left:5px ;">只支持jpg/png文件，且不超过5mb</div>
                                </el-upload>
                            </div>
                            <div style="padding:0px 20px 10px;">
                                <div class="image-detail"></div>
                            </div>
                        </div>
                    </el-col>
                </el-row>

                <el-row>
                    <el-col :span="24">
                        <div class="grid-content bg-purple-dark" style="padding: 20px;">
                            <div style="padding-left: 160px; padding-bottom: 8px;">
                                <el-button type="primary" class="predict-button-style">开始预测</el-button>
                            </div>
                            <div class="predict-main">
                                <el-alert title="提示:  运行结果需要等待..." type="info" style="margin: auto; width: 400px;"></el-alert>                                
                                <el-divider></el-divider>
                                <div class="predict_result">预测结果：
                                    <el-table :data="tableData" border style="width: 100%">
                                        <el-table-column prop="name" label="name" width="80"></el-table-column>
                                        <el-table-column prop="spectrum_predict_type" label="spectrum_predict" width="180"></el-table-column>
                                        <el-table-column prop="image_predict_type" label="image_predict" width="180"></el-table-column>
                                        <el-table-column prop="fusion_predict_type" label="fusion_predict" width="180"></el-table-column>
                                        <el-table-column prop="date" label="date" width="180"></el-table-column>
                                    </el-table>
                                </div>
                            </div>
                        </div>
                    </el-col>
                </el-row>
            </div>

        </div>
    </div>

</template>

<style scoped lang='scss'>
    .pearPage1-main {
        height: 800px;
        border-radius:25px;
        box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1), 0 2px 12px 0 rgba(0, 0, 0, 0.1);
        margin-top: -140px;
        background-color: whitesmoke;

        .main_tip{
            margin: auto;
            width: 50%;
            padding: 20px;
        }

        .data-upload{
            margin: auto;
            padding:10px 40px 10px;
        }
        .spectrum-detail{
            margin-left: 20px;
            height: 200px;
            width: 260px;
            background: url('@/assets/images/b_spectrum.png') no-repeat center / cover;
        }
        .image-detail{
            margin-left: 20px;
            height: 200px;
            width: 200px;
            background: url('@/assets/images/b_image.JPG') no-repeat center / cover;
        }

        .predict-main{
            margin: auto;
            height: 250px;
            width: 800px;
            border-radius:20px;
            background-color:aliceblue;
            box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1), 0 2px 12px 0 rgba(0, 0, 0, 0.1);

        }
        .predict_result{
            padding: 5px 40px 0;
        }

        .predict-button-style{
            width: 120px;
            border-radius:10px;
        }

    }
    .pearPage1-bg {
        background: url('@/assets/images/home-bg.png') no-repeat center / cover;
        height: 400px;
        position: relative;
    }

    .el-row {
        margin-bottom: 20px;
        &:last-child {
        margin-bottom: 0;
        }
    }
    .el-col {
        border-radius: 4px;
    }
    .bg-purple {
        background: #d3dce6;
    }
    .bg-purple-light {
        background: #e5e9f2;
    }
    .bg-purple-dark {
        background: #99a9bf;
    }
    .grid-content {
        border-radius: 4px;
        min-height: 36px;
    }
    .row-bg {
        padding: 10px 0;
        background-color: #f9fafc;
    }
</style>