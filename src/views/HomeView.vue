<script>
export default {
  name: 'HomeView',
  setup() {
    let thisWeeksExpenses = 200;
    let thisMonthsExpenses = 1235;
    let lastMonthsExpenses = 1152;

    return { thisWeeksExpenses, thisMonthsExpenses, lastMonthsExpenses }
  }
}
</script>

<template>
  <div class="container border">
    <div class="row">
      <div class="col">
        <h3 class="textcenter">This Weeks Expenses: {{ thisWeeksExpenses }}</h3>
        <h3 class="textcenter">This Months Expenses: {{ thisMonthsExpenses }}</h3>
        <h3 class="textcenter">Last Weeks Expenses: {{ lastMonthsExpenses }}</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-auto m-auto">
        <button id="button" type="button" class="btn">Show Financial Report</button>
      </div>
      <div class="col-auto m-auto">
        <button id="button" type="button" class="btn">Add Expenses</button>
      </div>
      
      
    </div>
  </div>
</template>

<style lang="scss" scope>
  .textcenter {
    text-align: center;
  }

  #button {
    border-radius: 10px;
    border-width: 3px;
    border-color: #394193;
    background-color: #6167A9;
    color: white;

    &:hover {
      border-color: #6167A9;
      background-color: #394193;
    }
  }
</style>