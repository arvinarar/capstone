import { ref } from "vue"

const getDb = () => {
    const expenses = ref([])
    const week1 = ref([])
    const week2 = ref([])
    const week3 = ref([])
    const week4 = ref([])
    const week5 = ref([])
    const error = ref(null)

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/expenses')
        if(!data.ok) {
          throw Error('no data fetched')
        }
        expenses.value = await data.json()
        expenses.value.sort((a,b) => new Date(b.date) - new Date(a.date))

        var curr = new Date();
        curr.setHours(0,0,0,0)
        var firstdayofMonth = new Date(curr.getFullYear(), curr.getMonth(), 1)
        var lastdayofMonth = new Date(curr.getFullYear(), curr.getMonth() + 1, 0)
        lastdayofMonth.setHours(23,59,59,999)
        var lastDay = lastdayofMonth.getDate()

        //Get Week 1
        var firstDayOfWeek = firstdayofMonth
        var first = firstDayOfWeek.getDate()
        var last = first + (6 - firstDayOfWeek.getDay())
        var lastDayOfWeek = new Date(firstDayOfWeek)
        lastDayOfWeek.setDate(last)
        lastDayOfWeek.setHours(23,59,59,999)

        week1.value = expenses.value.filter(expense => 
          (new Date(expense.date) >= firstDayOfWeek) && 
          (new Date(expense.date) <= lastDayOfWeek))
        
        //Get Week 2
        first = last + 1
        last = first + 6
        firstDayOfWeek.setDate(first)
        lastDayOfWeek = new Date(firstDayOfWeek)
        lastDayOfWeek.setDate(last)
        lastDayOfWeek.setHours(23,59,59,999)

        week2.value = expenses.value.filter(expense => 
          (new Date(expense.date) >= firstDayOfWeek) && 
          (new Date(expense.date) <= lastDayOfWeek))

        //Get Week 3
        first = last + 1
        last = first + 6
        firstDayOfWeek.setDate(first)
        lastDayOfWeek = new Date(firstDayOfWeek)
        lastDayOfWeek.setDate(last)
        lastDayOfWeek.setHours(23,59,59,999)
        
        week3.value = expenses.value.filter(expense => 
          (new Date(expense.date) >= firstDayOfWeek) && 
          (new Date(expense.date) <= lastDayOfWeek))

        //Get Week 4
        first = last + 1
        last = first + 6
        firstDayOfWeek.setDate(first)
        lastDayOfWeek = new Date(firstDayOfWeek)
        lastDayOfWeek.setDate(last)
        lastDayOfWeek.setHours(23,59,59,999)
        
        week4.value = expenses.value.filter(expense => 
          (new Date(expense.date) >= firstDayOfWeek) && 
          (new Date(expense.date) <= lastDayOfWeek))

        //Get Week 5 
        first = last + 1
        last = first + 6
        firstDayOfWeek.setDate(first)
        if(firstDayOfWeek.getDate() <= lastDay) {
          lastDayOfWeek = new Date(firstDayOfWeek)
          if(last >= lastDay) 
            lastDayOfWeek.setDate(lastDay)
          else 
            lastDayOfWeek.setDate(last)
          lastDayOfWeek.setHours(23,59,59,999)

          week5.value = expenses.value.filter(expense => 
            (new Date(expense.date) >= firstDayOfWeek) && 
            (new Date(expense.date) <= lastDayOfWeek))
        }
      }
      catch (err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    return { expenses, week1, week2, week3, week4, week5, error, load }
}

export default getDb