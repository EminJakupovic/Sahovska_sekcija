const monthNames = ["Januar", "Februar", "Mart", "April", "Maj", "Juni", "Juli", "August", "Septembar", "Oktobar", "Novembar", "Decembar"];
        const weekdays = ["Pon", "Uto", "Sri", "Čet", "Pet", "Sub", "Ned"];
        let currentDate = new Date();

        function renderCalendar() {
            const monthYear = document.getElementById("month-year");
            const calendarDays = document.getElementById("calendar-days");
            const month = currentDate.getMonth();
            const year = currentDate.getFullYear();

            monthYear.innerText = `${monthNames[month]} ${year}`;
            calendarDays.innerHTML = "";

            const firstDayOfMonth = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();

            // Prazna polja za dan u sedmici
            for (let i = 0; i < (firstDayOfMonth + 6) % 7; i++) {
                calendarDays.innerHTML += `<div class="day"></div>`;
            }

            // Dani u mjesecu
            for (let day = 1; day <= daysInMonth; day++) {
                const isToday = day === currentDate.getDate() && month === new Date().getMonth() && year === new Date().getFullYear();
                calendarDays.innerHTML += `<div class="day ${isToday ? "today" : ""}">${day}</div>`;
            }
        }

        function prevMonth() {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar();
        }

        function nextMonth() {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar();
        }

        renderCalendar();





        function toggleCalendar() {
            const calendar = document.querySelector(".calendar");
            const button = document.querySelector(".button .lable");
        
            if (calendar.style.display === "none" || calendar.style.display === "") {
                calendar.style.display = "block";
                button.textContent = "Close Kalendar";
                renderCalendar();
            } else {
                calendar.style.display = "none";
                button.textContent = "View Kalendar";
            }
        }
        
        // Inicijalno sakrij kalendar
        document.querySelector(".calendar").style.display = "none";
        renderCalendar();

        














        function renderCalendar() {
            const monthYear = document.getElementById("month-year");
            const calendarDays = document.getElementById("calendar-days");
            const month = currentDate.getMonth();
            const year = currentDate.getFullYear();
        
            monthYear.innerText = `${monthNames[month]} ${year}`;
            calendarDays.innerHTML = "";
        
            const firstDayOfMonth = new Date(year, month, 1).getDay();
            const daysInMonth = new Date(year, month + 1, 0).getDate();
        
            // Dodavanje praznih dana za poravnanje
            for (let i = 0; i < (firstDayOfMonth + 6) % 7; i++) {
                calendarDays.innerHTML += `<div class="day"></div>`;
            }
        
            for (let day = 1; day <= daysInMonth; day++) {
                const date = new Date(year, month, day);
                const isTuesday = date.getDay() === 2; // 2 predstavlja utorak
                const isToday = day === currentDate.getDate() && month === new Date().getMonth() && year === new Date().getFullYear();
        
                // Obeležavanje utoraka i dodavanje događaja
                calendarDays.innerHTML += `<div class="day ${isToday ? "today" : ""} ${isTuesday ? "tuesday" : ""}" 
                    onclick="${isTuesday ? 'showEvent(\"Šahovska sekcija\")' : 'selectDay(event)'}">
                    ${day}
                </div>`;
            }
        }
        
        // Funkcija za prikazivanje događaja
        function showEvent(eventMessage) {
            alert(eventMessage);
        }
          