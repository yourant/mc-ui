<template>
  <el-row :gutter="0" class="mc-date-range-picker">
    <el-col :span="11" class="p-0">
      <el-date-picker
        v-model="startTimeInComp"
        type="date"
        placeholder="开始日期"
        style="width: 100%;"
        value-format="yyyy-MM-dd"
        :picker-options="{disabledDate: (time) => disableDate(time, endTimeInComp)}"
      />
    </el-col>
    <el-col :span="2" style="text-align:center;line-height:2;">-</el-col>
    <el-col :span="11">
      <el-date-picker
        v-model="endTimeInComp"
        type="date"
        placeholder="结束日期"
        style="width: 100%;"
        value-format="yyyy-MM-dd"
        :picker-options="{disabledDate: (time) => disableDate(startTimeLimit(startTimeInComp), time)}"
      />
    </el-col>
  </el-row>
</template>
<script>
export default {
  name: 'McDateRangePicker',
  props: {
    startTime: {
      type: String,
      default: '',
      required: true
    },
    endTime: {
      type: String,
      default: '',
      required: true
    },
    // 最大时间选择跨度， 默认2个月, 设置成0则标识不需要限制
    maxDateRange: {
      type: Number,
      default: 61
    }
  },
  data () {
    return {
      startTimeInComp: '',
      endTimeInComp: ''
    }
  },
  watch: {
    startTime (newVal) {
      if (newVal !== this.startTimeInComp) {
        this.startTimeInComp = newVal
      }
    },
    startTimeInComp (newVal) {
      if (this.startTime !== newVal) {
        this.$emit('startTimeChange', newVal)
      }
    },
    endTime (newVal) {
      if (newVal !== this.endTimeInComp) {
        this.endTimeInComp = newVal
      }
    },
    endTimeInComp (newVal) {
      if (newVal !== this.endTime) {
        this.$emit('endTimeChange', newVal)
      }
    }
  },
  mounted () {
    if (this.startTime) {
      this.startTimeInComp = this.startTime
    }
    if (this.endTime) {
      this.endTimeInComp = this.endTime
    }
  },
  methods: {
    startTimeLimit (startTime) {
      if (startTime) {
        // 如果选了开始时间，限制结束时间需要减去一天，因为可以选择同一天
        return new Date(startTime).getTime() - 24 * 60 * 60 * 1000
      }
      return startTime
    },
    disableDate (startTime, endTime) {
      if (!endTime || !startTime) {
        return false
      }
      const startTimestamp = new Date(startTime).getTime()
      const endTimeStamp = new Date(endTime).getTime()
      if (startTimestamp > endTimeStamp) {
        return true
      }
      if (!this.maxDateRange) return false
      const maxTimeRange = this.maxDateRange * 24 * 60 * 60 * 1000
      return !(endTimeStamp - startTimestamp < maxTimeRange)
    }
  }
}
</script>
<style>
.mc-date-range-picker input {
  padding-right: 10px !important;
}
.mc-date-range-picker .el-input__suffix-inner {
  background: white;
}
</style>
