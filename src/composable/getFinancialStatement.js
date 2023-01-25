import { ref } from "vue";
import { reactive } from "vue";

const getDb = () => {
  const expenses = ref([]);
  const month = ref([0, 0, 0, 0, 0]);
  const week1 = ref([0, 0, 0, 0, 0]);
  const week2 = ref([0, 0, 0, 0, 0]);
  const week3 = ref([0, 0, 0, 0, 0]);
  const week4 = ref([0, 0, 0, 0, 0]);
  const week5 = ref([0, 0, 0, 0, 0]);
  const error = ref(null);
  const test = ref();

  const load = async () => {
    try {
      let data = await fetch("http://localhost:3000/expenses");
      if (!data.ok) {
        throw Error("no data fetched");
      }
      expenses.value = await data.json();
      expenses.value.sort((a, b) => new Date(b.date) - new Date(a.date));

      var curr = new Date();
      curr.setHours(0, 0, 0, 0);
      var firstdayofMonth = new Date(curr.getFullYear(), curr.getMonth(), 1);
      var lastdayofMonth = new Date(curr.getFullYear(), curr.getMonth() + 1, 0);
      lastdayofMonth.setHours(23, 59, 59, 999);
      var lastDay = lastdayofMonth.getDate();

      //Get Week 1
      var firstDayOfWeek = firstdayofMonth;
      var first = firstDayOfWeek.getDate();
      var last = first + (6 - firstDayOfWeek.getDay());
      var lastDayOfWeek = new Date(firstDayOfWeek);
      lastDayOfWeek.setDate(last);
      lastDayOfWeek.setHours(23, 59, 59, 999);

      //Get Week 2
      first = last + 1;
      last = first + 6;
      firstDayOfWeek.setDate(first);
      lastDayOfWeek = new Date(firstDayOfWeek);
      lastDayOfWeek.setDate(last);
      lastDayOfWeek.setHours(23, 59, 59, 999);

      week2.value = expenses.value.filter(
        (expense) =>
          new Date(expense.date) >= firstDayOfWeek &&
          new Date(expense.date) <= lastDayOfWeek
      );

      //Get Week 3
      first = last + 1;
      last = first + 6;
      firstDayOfWeek.setDate(first);
      lastDayOfWeek = new Date(firstDayOfWeek);
      lastDayOfWeek.setDate(last);
      lastDayOfWeek.setHours(23, 59, 59, 999);

      week3.value = expenses.value.filter(
        (expense) =>
          new Date(expense.date) >= firstDayOfWeek &&
          new Date(expense.date) <= lastDayOfWeek
      );

      //Get Week 4
      first = last + 1;
      last = first + 6;
      firstDayOfWeek.setDate(first);
      lastDayOfWeek = new Date(firstDayOfWeek);
      lastDayOfWeek.setDate(last);
      lastDayOfWeek.setHours(23, 59, 59, 999);

      var week = expenses.value.filter(
        (expense) =>
          new Date(expense.date) >= firstDayOfWeek &&
          new Date(expense.date) <= lastDayOfWeek
      );

      var rentBillFiltered = week.filter(
        (expense) => expense.type == "Rent/Bills"
      );
      var rentBills = rentBillFiltered.reduce((accummulator, object) => {
        return accummulator + object.amount;
      }, 0);

      var foodFiltered = week.filter((expense) => expense.type == "Food");
      var food = foodFiltered.reduce((accummulator, object) => {
        return accummulator + object.amount;
      }, 0);
      var fareFiltered = week.filter(
        (expense) => expense.type == "Commute Fare"
      );
      var fare = fareFiltered.reduce((accummulator, object) => {
        return accummulator + object.amount;
      }, 0);
      var schoolFiltered = week.filter((expense) => expense.type == "School");
      var school = schoolFiltered.reduce((accummulator, object) => {
        return accummulator + object.amount;
      }, 0);
      var miscFiltered = week.filter((expense) => expense.type == "Misc.");
      var misc = miscFiltered.reduce((accummulator, object) => {
        return accummulator + object.amount;
      }, 0);

      week4.value = [rentBills, food, fare, school, misc];
      console.log(week4.value);

      //Get Week 5
      first = last + 1;
      last = first + 6;
      firstDayOfWeek.setDate(first);
      if (firstDayOfWeek.getDate() <= lastDay) {
        lastDayOfWeek = new Date(firstDayOfWeek);
        if (last >= lastDay) lastDayOfWeek.setDate(lastDay);
        else lastDayOfWeek.setDate(last);
        lastDayOfWeek.setHours(23, 59, 59, 999);

        week5.value = expenses.value.filter(
          (expense) =>
            new Date(expense.date) >= firstDayOfWeek &&
            new Date(expense.date) <= lastDayOfWeek
        );
      }
      test.value = 69;
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return {
    expenses,
    week1,
    week2,
    week3,
    week4,
    week5,
    error,
    test,
    load,
  };
};

export default getDb;
