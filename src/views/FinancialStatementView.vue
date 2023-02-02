<script setup>
import getDb from "../composable/getFinancialStatement";
import { Chart as ChartJS, ArcElement, Tooltip } from "chart.js";
import { Pie } from "vue-chartjs";
import { onMounted } from "vue";
import { ref } from "vue";

ChartJS.register(ArcElement, Tooltip);

const { expenses, month, week1, week2, week3, week4, week5, error, load } =
  getDb();

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const offset = ref(0);
const currentMonth = ref((new Date().getMonth() + offset.value) % 12);

var render = false;
onMounted(() => {
  load(offset.value);
  render = true;
});

const options = {
  responsive: true,
  maintainAspectRatio: true,
};

function changeMonth(x) {
  if (x == 0) {
    offset.value--;
    if (currentMonth.value == 0) currentMonth.value = 11;
    else currentMonth.value--;
  } else {
    offset.value++;
    if (currentMonth.value == 11) currentMonth.value = 0;
    else currentMonth.value++;
  }
  load(offset.value);
}
</script>

<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h2 class="textcenter">Financial Statement</h2>
      </div>
    </div>
    <div class="row d-none d-md-flex mb-5 paginator justify-content-center">
      <div class="col-auto">
        <button id="button" type="button" class="btn" @click="changeMonth(0)">
          &lt;&lt; Previous Month
        </button>
      </div>
      <div class="col-auto">
        <h5>Showing the Financial Report of {{ monthNames[currentMonth] }}</h5>
      </div>
      <div class="col-auto">
        <button id="button" type="button" class="btn" @click="changeMonth(1)">
          Next Month &#62;&#62;
        </button>
      </div>
    </div>
    <div class="row d-md-none">
      <div class="col textcenter paginator">
        <h5>Showing the Financial Report of {{ monthNames[currentMonth] }}</h5>
      </div>
    </div>
    <div class="row d-md-none d-flex justify-content-between mb-5">
      <div class="col-auto">
        <button id="button" type="button" class="btn" @click="changeMonth(0)">
          &lt;&lt; Previous Month
        </button>
      </div>
      <div class="col-auto">
        <button id="button" type="button" class="btn" @click="changeMonth(1)">
          Next Month &#62;&#62;
        </button>
      </div>
    </div>
    <div class="row">
      <div class="col-12 col-lg-6 table-wrapper">
        <table class="table table-striped border textcenter">
          <thead class="sticky-top bg-white">
            <tr class="Theader">
              <th scoped="col">Name</th>
              <th scoped="col">Type</th>
              <th scoped="col">Date</th>
              <th scoped="col">Amount</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="expense in expenses" :key="expense.id">
              <th class="maxWidth25">{{ expense.name }}</th>
              <th class="maxWidth25">{{ expense.type }}</th>
              <th class="maxWidth25">{{ expense.dateString }}</th>
              <th class="maxWidth25">{{ expense.amount }}</th>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="col-12 col-lg-6">
        <div class="row mx-auto mt-5">
          <div class="col-auto mx-auto">
            <Pie v-if="render" :data="month" :options="options" />
          </div>
        </div>
        <div class="row mx-auto mt-5 d-flex justify-content-around">
          <div class="col-3">
            <Pie v-if="render" :data="week1" :options="options" />
            <p class="textcenter notsoBold">Week1</p>
          </div>
          <div class="col-3">
            <Pie v-if="render" :data="week2" :options="options" />
            <p class="textcenter notsoBold">Week2</p>
          </div>
          <div class="col-3">
            <Pie v-if="render" :data="week3" :options="options" />
            <p class="textcenter notsoBold">Week3</p>
          </div>
        </div>
        <div class="row mx-auto mt-2 d-flex justify-content-center">
          <div class="col-3 me-5">
            <Pie v-if="render" :data="week4" :options="options" />
            <p class="textcenter notsoBold">Week4</p>
          </div>
          <div class="col-3">
            <Pie v-if="render" :data="week5" :options="options" />
            <p class="textcenter notsoBold">Week5</p>
          </div>
        </div>
      </div>
    </div>
    <div class="row d-flex justify-content-center mt-3">
      <div class="col-auto">
        <button id="button" type="button" class="btn textcenter">
          <a href="/">Back to Homepage</a>
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scope>
body {
  min-height: 15vh;
  display: block;
}

#button {
  border-radius: 10px;
  border-width: 3px;
  border-color: #394193;
  background-color: #6167a9;
  color: white;
  font-size: clamp(10px, 1.8vw, 15px);

  &:hover {
    border-color: #6167a9;
    background-color: #394193;
  }
}

a {
  text-decoration: none !important;
  color: white !important;
}

.paginator {
  margin-top: 0.5rem;
}

.maxWidth25 {
  max-width: 25vw;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.table-wrapper {
  max-height: 75vh;
  overflow: auto;
  display: inline-block;
}

.table-striped > tbody > tr:nth-child(odd) > td,
.table-striped > tbody > tr:nth-child(odd) > th {
  background-color: #e4e6fb;
}

.Theader {
  background-color: #6167a9;
  color: #ffffff;
  border-width: 2px !important;
  border-color: black !important;
}

.table {
  border-width: 2px !important;
  border-color: black !important;

  th {
    border-left-width: 2px !important;
    border-color: black !important;
  }
}

.notsoBold {
  font-weight: 550;
}
</style>
