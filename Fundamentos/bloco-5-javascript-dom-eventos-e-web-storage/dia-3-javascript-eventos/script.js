function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  function createDaysOfTheMes() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    const ulDays = document.querySelector('#days');

    for(let index=0; index<dezDaysList.length; index+=1){
        const daysOfArray = dezDaysList[index];

        const day = document.createElement('li');
        day.innerText = daysOfArray;
        day.className = 'day'
        let holiday = [24,25, 31]
        for(let index=0; index<holiday.length; index+=1){
            let dayHoliday = holiday[index]
            if(daysOfArray== dayHoliday){
                day.className += ' holiday'
            }
        }
        let friday =[4, 11, 18, 25]
        for(let index=0; index<friday.length; index+=1){
            let dayFriday = friday[index]
            if(daysOfArray==dayFriday){
                day.className += ' friday'
            }
        }

        ulDays.appendChild(day);
        };
    };
    
  createDaysOfTheMes()