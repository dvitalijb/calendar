function createCalendar(id, year, month) {
    const daysInMonth = new Date(year, month, 0).getDate();
    const dayOfWeek = new Date(year, month).getDay();
    const parent = document.getElementById(`${id}`);
    const table = document.createElement('table');
    const dayTitles = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
    const tr = document.createElement('tr');

    dayTitles.forEach(a => {
        const th = document.createElement('th');
        th.innerHTML = a;
        tr.appendChild(th);
    });
    table.appendChild(tr);

    let dayOfMonth = 1;
    let isStartedWeek = false;
    for (let i = 0; i <= 6; i++) {
        const tr = document.createElement('tr');
        for (let i = 0; i <= 6; i++) {

            if (dayOfMonth <= daysInMonth) {
                const td = document.createElement('td');
                if (i === dayOfWeek || isStartedWeek) {
                    td.innerHTML = dayOfMonth;
                    isStartedWeek = true;
                    dayOfMonth++;
                }

                tr.appendChild(td);

            }

            table.appendChild(tr);
        }
    }
    parent.appendChild(table);
}


createCalendar("cal", 2012, 10);