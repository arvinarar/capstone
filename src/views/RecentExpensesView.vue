<script>
import { ref } from "vue"
export default {
  setup() {
    let thisWeeksExpenses = 200;
    let thisMonthsExpenses = 1235;
    let lastMonthsExpenses = 1152;

    const expenses = ref([]);
    expenses.value.push({"id": 0, "name": "Bopis", "type": "Food", "date": "1/16/2022", "amount": 20});
    expenses.value.push({ "id": 1, "name": "Manyok", "type": "Food", "date": "1/16/2022", "amount": 40});

    return { thisWeeksExpenses, thisMonthsExpenses, lastMonthsExpenses, expenses }
  }
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3 class="header textcenter">Recent Expenses</h3>
      </div>
    </div>
    <div class="row">
      <table class="table table-striped border">
        <thead>
          <tr>
            <th scoped="col">Name</th>
            <th scoped="col">Type</th>
            <th scoped="col">Date</th>
            <th scoped="col">Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for ="expense in expenses" :key="expense.id" >
            <th>{{ expense.name }}</th>
            <th>{{ expense.type }}</th>
            <th>{{ expense.name }}</th>
            <th>{{ expense.amount }}</th>
          </tr>
          <!-- <tr>
            <td>Manyok</td>
            <td>Food</td>
            <td>11/5/23</td>
            <td>40</td>
          </tr> -->
        </tbody>
      </table>
    </div>
    <div class="row">
      <div class="col">
        <h3 class="textcenter">This Weeks Expenses: {{ thisWeeksExpenses }}</h3>
        <h3 class="textcenter">This Months Expenses: {{ thisMonthsExpenses }}</h3>
        <h3 class="textcenter">Last Weeks Expenses: {{ lastMonthsExpenses }}</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-auto m-auto p-auto">
        <button id="button" type="button" class="btn">
          <RouterLink to="/AddExpenses">Add Another Expense</RouterLink>
        </button>
      </div>
      <div class="col-auto m-auto p-auto">
        <button id="button" type="button" class="btn">Show Financial Report</button>
      </div>
      
      
    </div>
  </div>
</template>

<style lang="scss" scope>

  #button {
    border-radius: 10px;
    border-width: 3px;
    border-color: #394193;
    background-color: #6167A9;
    color: white;
    font-size: clamp(10px, 3vw, 20px);

    &:hover {
      border-color: #6167A9;
      background-color: #394193;
    }
  }

  a {
    text-decoration: none !important;
    color: white !important;
  }
</style>