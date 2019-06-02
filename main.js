const dayTitles = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];

function createThead(dayTitles) {
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    props.forEach(item => {
        const th = document.createElement('th');
        th.textContent = item;
        tr.appendChild(th);
    });
    thead.append(tr);
    return thead;
}

function creatуRow(dayOfMonth) {

}

function createCalendar(id, year, month) {
    const daysInMonth = new Date(year, month, 0).getDate();
    const dayOfWeek = new Date(year, month).getDay();
    const container = document.getElementById(`${id}`);
    const table = document.createElement('table');
    const thead = createThead(dayTitles);
    const tr = document.createElement('tr');
    const tbody = document.createElement('tbody');

    let dayOfMonth = 1;
    while(dayOfMonth<=daysInMonth){

        dayOfMonth++;
    }

    container.appendChild(table);
}



// function createCalendar(id, year, month) {
//     const daysInMonth = new Date(year, month, 0).getDate();
//     const dayOfWeek = new Date(year, month).getDay();
//     const parent = document.getElementById(`${id}`);
//     const table = document.createElement('table');
//     const tr = document.createElement('tr');
//
//     dayTitles.forEach(a => {
//         const th = document.createElement('th');
//         th.innerHTML = a;
//         tr.appendChild(th);
//     });
//     table.appendChild(tr);
//
//     let dayOfMonth = 1;
//     let isStartedWeek = false;
//     for (let i = 0; i <= 6; i++) {
//         const tr = document.createElement('tr');
//         for (let i = 0; i <= 6; i++) {
//
//             if (dayOfMonth <= daysInMonth) {
//                 const td = document.createElement('td');
//                 if (i === dayOfWeek || isStartedWeek) {
//                     td.innerHTML = dayOfMonth;
//                     isStartedWeek = true;
//                     dayOfMonth++;
//                 }
//
//                 tr.appendChild(td);
//
//             }
//
//             table.appendChild(tr);
//         }
//     }
//     parent.appendChild(table);
// }


createCalendar("cal", 2012, 10);