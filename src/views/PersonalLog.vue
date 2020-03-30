<template>
    <v-container style="height: 100%">
        <!--<v-layout style="min-height: 10%;">-->
            <!--<v-row>-->
                <!--<v-col cols="12">-->
                    <!--<h2>Personal Log</h2>-->
                    <!--<hr style="width: 40%" size="4">-->
                <!--</v-col>-->
            <!--</v-row>-->
        <!--</v-layout>-->
        <v-layout>
            <v-row style="width: 100%" justify="space-around">
                <v-col cols="12" md="9">
                  <v-sheet height="600">
                    <v-calendar
                      ref="calendar"
                      v-model="start"
                      :type="type"
                      :start="start"
                      :end="end"
                      :min-weeks="minWeeks"
                      :max-days="maxDays"
                      :now="now"
                      :dark="dark"
                      :weekdays="weekdays"
                      :first-interval="intervals.first"
                      :interval-minutes="intervals.minutes"
                      :interval-count="intervals.count"
                      :interval-height="intervals.height"
                      :interval-style="intervalStyle"
                      :show-interval-label="showIntervalLabel"
                      :short-intervals="shortIntervals"
                      :short-months="shortMonths"
                      :short-weekdays="shortWeekdays"
                      :color="color"
                      :events="events"
                      :event-overlap-mode="mode"
                      :event-overlap-threshold="45"
                      :event-color="getEventColor"
                      @click:date="routeToEntry"></v-calendar>
                  </v-sheet>
                </v-col>
            </v-row>
        </v-layout>
        <v-layout>
            <v-row style="width: 100%" justify="space-around">
                <v-col cols="6">
                    <v-btn style="width:90%; margin-left:5%; margin-right:5%;" large outlined to="/">Back</v-btn>
                </v-col>
            </v-row>
        </v-layout>
    </v-container>
</template>

<script>
  const weekdaysDefault = [0, 1, 2, 3, 4, 5, 6]
  const intervalsDefault = {
    first: 0,
    minutes: 60,
    count: 24,
    height: 48,
  }
  const stylings = {
    default () {
      return undefined
    },
    workday (interval) {
      const inactive = interval.weekday === 0 ||
        interval.weekday === 6 ||
        interval.hour < 9 ||
        interval.hour >= 17
      const startOfHour = interval.minute === 0
      const dark = this.dark
      const mid = dark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'
      return {
        backgroundColor: inactive ? (dark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.05)') : undefined,
        borderTop: startOfHour ? undefined : '1px dashed ' + mid,
      }
    },
    past (interval) {
      return {
        backgroundColor: interval.past ? (this.dark ? 'rgba(0,0,0,0.4)' : 'rgba(0,0,0,0.05)') : undefined,
      }
    },
  }
  export default {
    data: () => ({
      events: [
          {
              name: '1 Log entry',
              start: '2020-01-01'
          }
      ],
      dark: false,
      startMenu: false,
      start: '2020-01-12',
      endMenu: false,
      end: '2020-01-27',
      nowMenu: false,
      minWeeks: 1,
      now: null,
      colors: ['blue', 'indigo', 'deep-purple', 'cyan', 'green', 'orange', 'grey darken-1'],
      names: ['Meeting', 'Holiday', 'PTO', 'Travel', 'Event', 'Birthday', 'Conference', 'Party'],
      type: 'month',
      typeOptions: [
        { text: 'Day', value: 'day' },
        { text: '4 Day', value: '4day' },
        { text: 'Week', value: 'week' },
        { text: 'Month', value: 'month' },
        { text: 'Custom Daily', value: 'custom-daily' },
        { text: 'Custom Weekly', value: 'custom-weekly' },
      ],
      mode: 'stack',
      modeOptions: [
        { text: 'Stack', value: 'stack' },
        { text: 'Column', value: 'column' },
      ],
      weekdays: weekdaysDefault,
      weekdaysOptions: [
        { text: 'Sunday - Saturday', value: weekdaysDefault },
        { text: 'Mon, Wed, Fri', value: [1, 3, 5] },
        { text: 'Mon - Fri', value: [1, 2, 3, 4, 5] },
        { text: 'Mon - Sun', value: [1, 2, 3, 4, 5, 6, 0] },
      ],
      intervals: intervalsDefault,
      intervalsOptions: [
        { text: 'Default', value: intervalsDefault },
        { text: 'Workday', value: { first: 16, minutes: 30, count: 20, height: 48 } },
      ],
      maxDays: 7,
      maxDaysOptions: [
        { text: '7 days', value: 7 },
        { text: '5 days', value: 5 },
        { text: '4 days', value: 4 },
        { text: '3 days', value: 3 },
      ],
      styleInterval: 'default',
      styleIntervalOptions: [
        { text: 'Default', value: 'default' },
        { text: 'Workday', value: 'workday' },
        { text: 'Past', value: 'past' },
      ],
      color: 'primary',
      colorOptions: [
        { text: 'Primary', value: 'primary' },
        { text: 'Secondary', value: 'secondary' },
        { text: 'Accent', value: 'accent' },
        { text: 'Red', value: 'red' },
        { text: 'Pink', value: 'pink' },
        { text: 'Purple', value: 'purple' },
        { text: 'Deep Purple', value: 'deep-purple' },
        { text: 'Indigo', value: 'indigo' },
        { text: 'Blue', value: 'blue' },
        { text: 'Light Blue', value: 'light-blue' },
        { text: 'Cyan', value: 'cyan' },
        { text: 'Teal', value: 'teal' },
        { text: 'Green', value: 'green' },
        { text: 'Light Green', value: 'light-green' },
        { text: 'Lime', value: 'lime' },
        { text: 'Yellow', value: 'yellow' },
        { text: 'Amber', value: 'amber' },
        { text: 'Orange', value: 'orange' },
        { text: 'Deep Orange', value: 'deep-orange' },
        { text: 'Brown', value: 'brown' },
        { text: 'Blue Gray', value: 'blue-gray' },
        { text: 'Gray', value: 'gray' },
        { text: 'Black', value: 'black' },
      ],
      shortIntervals: true,
      shortMonths: true,
      shortWeekdays: true,
    }),
    computed: {
      intervalStyle () {
        return stylings[this.styleInterval].bind(this)
      },
      hasIntervals () {
        return this.type in {
          week: 1, day: 1, '4day': 1, 'custom-daily': 1,
        }
      },
      hasEnd () {
        return this.type in {
          'custom-weekly': 1, 'custom-daily': 1,
        }
      },
    },
    methods: {
        viewDay ({ date }) {
          this.start = date
            this.type = 'day'
        },
        getEventColor (event) {
            return event.color
        },
        showIntervalLabel (interval) {
            return interval.minute === 0
        },
        formatDate (a, withTime) {
            return withTime
            ? `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()} ${a.getHours()}:${a.getMinutes()}`
            : `${a.getFullYear()}-${a.getMonth() + 1}-${a.getDate()}`
        },
        routeToEntry () {
            this.$router.push('/PersonalEntry')
            return
        }
    }
  }
</script>

<style scoped>

</style>
