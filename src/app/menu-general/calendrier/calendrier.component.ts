import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const isLeapYear = (year: number) => {
      return (
        (year % 4 === 0 && year % 100 !== 0 && year % 400 !== 0) ||
        (year % 100 === 0 && year % 400 === 0)
      );
    };

    const getFebDays = (year: number) => {
      return isLeapYear(year) ? 29 : 28;
    };

    const month_names = [
      'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre'
    ];

    let month_picker = document.querySelector('#month-picker');
    let dayTextFormate = document.querySelector('.day-text-formate');
    let timeFormate = document.querySelector('.time-formate');
    let dateFormate = document.querySelector('.date-formate');

    if (month_picker instanceof HTMLElement) {
      month_picker.onclick = () => {
        if (month_list) {
          month_list.classList.remove('hideonce');
          month_list.classList.remove('hide');
          month_list.classList.add('show');
        }
        if (dayTextFormate) {
          dayTextFormate.classList.remove('showtime');
          dayTextFormate.classList.add('hidetime');
        }
        if (timeFormate) {
          timeFormate.classList.remove('showtime');
          timeFormate.classList.add('hideTime');
        }
        if (dateFormate) {
          dateFormate.classList.remove('showtime');
          dateFormate.classList.add('hideTime');
        }
      };
    }

    const generateCalendar = (month: number, year: number) => {
      let calendar_days = document.querySelector('.calendar-days');
      if (calendar_days instanceof HTMLElement) {
        calendar_days.innerHTML = '';
        let calendar_header_year = document.querySelector('#year');
        if (calendar_header_year instanceof HTMLElement) {
          calendar_header_year.innerHTML = year.toString();
        }

        let days_of_month = [
          31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
        ];

        let currentDate = new Date();
        let first_day = new Date(year, month);

        if (month_picker instanceof HTMLElement) {
          month_picker.innerHTML = month_names[month];
        }

        for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
          let day = document.createElement('div');
          if (i >= first_day.getDay()) {
            day.innerHTML = (i - first_day.getDay() + 1).toString();
            if (i - first_day.getDay() + 1 === currentDate.getDate() &&
              year === currentDate.getFullYear() &&
              month === currentDate.getMonth()) {
              day.classList.add('current-date');
            }
          }
          if (calendar_days instanceof HTMLElement) {
            calendar_days.appendChild(day);
          }
        }
      }
    };

    let month_list = document.querySelector('.month-list');
    month_names.forEach((e, index) => {
      let month = document.createElement('div');
      month.innerHTML = `<div>${e}</div>`;
      if (month_list instanceof HTMLElement) {
        month_list.append(month);
        month.onclick = () => {
          currentMonth.value = index;
          generateCalendar(currentMonth.value, currentYear.value);
          if (month_list !== null) {
            month_list.classList.replace('show', 'hide');
        }
          if (dayTextFormate instanceof HTMLElement) {
            dayTextFormate.classList.remove('hideTime');
            dayTextFormate.classList.add('showtime');
          }
          
          if (timeFormate instanceof HTMLElement) {
            timeFormate.classList.remove('hideTime');
            timeFormate.classList.add('showtime');
          }
          
          if (dateFormate instanceof HTMLElement) {
            dateFormate.classList.remove('hideTime');
            dateFormate.classList.add('showtime');
          }
        };
      }
    });

    (function () {
      if (month_list instanceof HTMLElement) {
        month_list.classList.add('hideonce');
      }
    })();

    document.querySelector('#pre-year')?.addEventListener('click', () => {
      --currentYear.value;
      generateCalendar(currentMonth.value, currentYear.value);
    });

    document.querySelector('#next-year')?.addEventListener('click', () => {
      ++currentYear.value;
      generateCalendar(currentMonth.value, currentYear.value);
    });

    let currentDate = new Date();
    let currentMonth = { value: currentDate.getMonth() };
    let currentYear = { value: currentDate.getFullYear() };
    generateCalendar(currentMonth.value, currentYear.value);

    const todayShowTime = document.querySelector('.time-formate');
    const todayShowDate = document.querySelector('.date-formate');

    const currshowDate = new Date();
    const showCurrentDateOption: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    };
    const currentDateFormate = new Intl.DateTimeFormat('fr-FR', showCurrentDateOption).format(currshowDate).toUpperCase();


    if (todayShowDate instanceof HTMLElement) {
      todayShowDate.textContent = currentDateFormate;
    }

    setInterval(() => {
      const timer = new Date();
      const option: Intl.DateTimeFormatOptions = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      };
      const formateTimer = new Intl.DateTimeFormat('fr-FR', option).format(timer);
      let time = `${`${timer.getHours()}`.padStart(2, '0')}:${`${timer.getMinutes()}`.padStart(
        2, '0')}: ${`${timer.getSeconds()}`.padStart(2, '0')}`;
      if (todayShowTime instanceof HTMLElement) {
        todayShowTime.textContent = formateTimer;
      }
    }, 1000);
  }
}