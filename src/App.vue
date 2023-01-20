<script>
import { RouterLink, RouterView } from 'vue-router'
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
  <RouterView />
</template>

<style scoped>
</style>
