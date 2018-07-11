<template>
   <el-table :data="tableData" height="500" :stripe="true" :border="true">
     <el-table-column prop="account" label="用户名"></el-table-column>
     <el-table-column prop="name" label="名字"></el-table-column>
     <el-table-column prop="address" label="公司"></el-table-column>
     <el-table-column prop="date" label="日期"></el-table-column>
   </el-table>
</template>

<script>
export default {
  data() {
    const item = {
      account: 'xiaohu',
      name: '王小虎',
      address: '上海市长城设备有限公司',
      date:'2018-02-08'
    }
    return {
      tableData: Array(20).fill(item)
    }
  }
}
</script>
