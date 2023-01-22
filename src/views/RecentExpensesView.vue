<script>
import getDb from '../composable/getDb'

export default {
  setup() {
    const { expenses, error, thismonthsexpenses, thisweeksexpenses, lastmonthsexpenses,load } = getDb()
    load()

    return { expenses, thismonthsexpenses, thisweeksexpenses, lastmonthsexpenses, error }
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
          <tr v-for ="expense in expenses.slice(0,5)" :key="expense.id" >
            <th>{{ expense.name }}</th>
            <th>{{ expense.type }}</th>
            <th>{{ expense.dateString }}</th>
            <th>{{ expense.amount }}</th>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="row">
      <div class="col">
        <h3 class="textcenter">This Weeks Expenses: {{ thisweeksexpenses }}</h3>
        <h3 class="textcenter">This Months Expenses: {{ thismonthsexpenses }}</h3>
        <h3 class="textcenter">Last Months Expenses: {{ lastmonthsexpenses }}</h3>
      </div>
    </div>
    <div class="row">
      <div class="col-auto m-auto p-auto">
        <button id="button" type="button" class="btn">
          <RouterLink to="/AddExpenses">Add Another Expense</RouterLink>
        </button>
      </div>
      <div class="col-auto m-auto p-auto">
        <button id="button" type="button" class="btn">
          <RouterLink to="/FinancialStatement">Show Financial Report</RouterLink>
        </button>
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