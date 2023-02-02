<script>
import getDb from "../composable/getDb";

export default {
  setup() {
    const {
      expenses,
      error,
      thisMonthsExpenses,
      thisWeeksExpenses,
      lastMonthsExpenses,
      load,
    } = getDb();
    load();

    return {
      expenses,
      thisMonthsExpenses,
      thisWeeksExpenses,
      lastMonthsExpenses,
      error,
    };
  },
};
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3 class="textcenter">This Weeks Expenses: {{ thisWeeksExpenses }}</h3>
        <h3 class="textcenter">
          This Months Expenses: {{ thisMonthsExpenses }}
        </h3>
        <h3 class="textcenter">
          Last Months Expenses: {{ lastMonthsExpenses }}
        </h3>
      </div>
    </div>
    <div class="row">
      <div class="col-auto m-auto p-auto">
        <button id="button" type="button" class="btn">
          <RouterLink to="/FinancialStatement"
            >Show Financial Report</RouterLink
          >
        </button>
      </div>
      <div class="col-auto m-auto p-auto">
        <button id="button" type="button" class="btn">
          <RouterLink to="/AddExpenses">Add Expenses</RouterLink>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scope>
body {
  min-height: 100vh;
  display: flex;
}

#button {
  border-radius: 10px;
  border-width: 3px;
  border-color: #394193;
  background-color: #6167a9;
  color: white;
  font-size: clamp(10px, 3vw, 20px);

  &:hover {
    border-color: #6167a9;
    background-color: #394193;
  }
}

a {
  text-decoration: none !important;
  color: white !important;
}
</style>
