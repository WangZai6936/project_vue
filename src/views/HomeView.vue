<template>
  <div class="diver">
    <el-card class="box-card" shadow="always">
      <template #header>
        <div class="card-header">
          <span>排班日期</span>
          <el-button class="primary" plain>重新上传表格 </el-button>
        </div>
      </template>
      <div class="sub-card">
        <el-main v-if="dayTime"> 下次白班时间：{{dayTime}}  &nbsp; {{dayWeek}}</el-main>
        <el-main v-if="nightTime">下次晚班时间：{{nightTime}}   &nbsp; {{nightWeek}}</el-main>
        <el-main v-if="allDayTime">下次白加晚时间：{{allDayTime}}  &nbsp; {{allDayWeek}}</el-main>
        <el-main v-if="restTime">下次休息时间：{{restTime}}   &nbsp; {{restWeek}}</el-main></div>
      <template #footer>
        <el-popover
          placement="top-start"
          title="排班"
          :width="600"
          trigger="hover">
          <el-calendar v-model="value" class="custom-calendar"/>
          <template #reference>
          <el-button >查看具体排班信息</el-button>
        </template>
      </el-popover>
      </template>
    </el-card>
<!--    <div class="calendar-class">-->
<!--      <el-calendar v-model="value" />-->
<!--    </div> -->
  </div>

</template>
<script>
import request from "@/utils/request";
export default {
  name: 'HomeView',
  components: {
    // HelloWorld
  },
  data() {
    return {
      allDayTime: '',
      allDayWeek: '',
      dayWeek: '',
      dayTime: '',
      nightTime: '',
      nightWeek: '',
      restTime: '',
      restWeek: '',
      value: new Date()
    }
  },
  methods: {
    testRequest() {
      request.get('/api/init').then(res => {
        if (res.code == '200') {
          this.dayTime = res.object.dayTime
          this.dayWeek = res.object.dayWeek
          this.nightTime = res.object.nightTime
          this.nightWeek = res.object.nightWeek
          this.restTime = res.object.restTime
          this.restWeek = res.object.restWeek
          this.allDayTime = res.object.allDayTime
          this.allDayWeek = res.object.allDayWeek
        }
      })
    }
  },
  created() {
    this.testRequest()
  }
}
</script>
<style>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
.diver {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
}
.sub-card {
  align-items: center;
  text-align: center;
}
.calendar-class{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 700px;
  height: 500px;
}
.custom-calendar {
  height: 530px; /* 你可以根据需要调整高度 */
}
</style>