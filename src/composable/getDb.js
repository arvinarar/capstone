import { ref } from "vue"

const getDb = () => {
    const thismonthsexpenses = ref(0)
    const thisweeksexpenses = ref(0)
    const lastmonthsexpenses = ref(0)
    const expenses = ref([])
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/expenses')
        if(!data.ok) {
          throw Error('no data fetched')
        }
        expenses.value = await data.json()
        expenses.value.sort((a,b) => new Date(b.date) - new Date(a.date))

        //Get this week
        var curr = new Date();
        curr.setHours(0,0,0,0)
        var first = curr.getDate() - curr.getDay();
        var last = first + 6;

        var firstday = new Date(curr.setDate(first))
        var lastday = new Date(curr.setDate(last))
        lastday.setHours(23,59,59,999)

        const thisweek = expenses.value.filter(expense => 
          (new Date(expense.date) >= firstday) && 
          (new Date(expense.date) <= lastday))

        thisweeksexpenses.value = thisweek.reduce((accummulator, object) => {
          return accummulator + object.amount
        }, 0)
        //-- --//

        //Get this month
        firstday = new Date(curr.getFullYear(), curr.getMonth(), 1)
        lastday = new Date(curr.getFullYear(), curr.getMonth() + 1, 0)
        lastday.setHours(23,59,59,999)
        
        const thismonth = expenses.value.filter(expense => 
          (new Date(expense.date) >= firstday) && 
          (new Date(expense.date) <= lastday))

        thismonthsexpenses.value = thismonth.reduce((accummulator, object) => {
          return accummulator + object.amount
        }, 0)
        //-- --//

        //Get last month
        firstday = new Date(curr.getFullYear(), curr.getMonth() -1, 1)
        lastday = new Date(curr.getFullYear(), curr.getMonth(), 0)
        lastday.setHours(23,59,59,999)

        const lastmonth = expenses.value.filter(expense => 
          (new Date(expense.date) >= firstday) && 
          (new Date(expense.date) <= lastday))

        lastmonthsexpenses.value = lastmonth.reduce((accummulator, object) => {
          return accummulator + object.amount
        }, 0)
        //-- --//
      }
      catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    return { expenses, error, thismonthsexpenses, thisweeksexpenses, lastmonthsexpenses, load }
}

export default getDb