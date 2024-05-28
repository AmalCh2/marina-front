import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-calendrier',
  templateUrl: './calendrier.component.html',
  styleUrls: ['./calendrier.component.css']
})
export class CalendrierComponent implements OnInit {
  @ViewChild('monthPicker', { static: true }) monthPicker: ElementRef | undefined;
  @ViewChild('calendarDays', { static: true }) calendarDays: ElementRef;
  @ViewChild('year', { static: true }) yearElement: ElementRef;
  @ViewChild('dayTextFormat', { static: true }) dayTextFormat: ElementRef;
  @ViewChild('timeFormat', { static: true }) timeFormat: ElementRef;
  @ViewChild('dateFormat', { static: true }) dateFormat: ElementRef;
  @ViewChild('calendar', { static: true }) calendar: ElementRef;

  currentMonth: number;
  currentYear: number;

  constructor() {
    const currentDate = new Date();
    this.currentMonth = currentDate.getMonth();
    this.currentYear = currentDate.getFullYear();
  }

  ngOnInit(): void {
    const isLeapYear = (year: number): boolean => {
      return (year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0);
    };

    const getFebDays = (year: number): number => {
      return isLeapYear(year) ? 29 : 28;
    };

    const month_names: string[] = [
      'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'
    ];

    const month_picker = document.querySelector('#month-picker');

    const dayTextFormate = document.querySelector('.day-text-formate');
    const timeFormate = document.querySelector('.time-formate');
    const dateFormate = document.querySelector('.date-formate');

    month_picker?.addEventListener('click', () => {
      // Handle click on month picker
    });

    const generateCalendar = (month: number, year: number): void => {
      const calendar_days = document.querySelector('.calendar-days');
      const calendar_header_year = document.querySelector('#year');
      const days_of_month = [
        31, getFebDays(year), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31
      ];

      const currentDate = new Date();

      if (month_picker) {
        month_picker.innerHTML = month_names[month];
      }
      if (calendar_header_year) {
        calendar_header_year.innerHTML = year.toString();
      }

      const first_day = new Date(year, month);

      if (calendar_days) {
        calendar_days.innerHTML = ''; // Clear previous days

        for (let i = 0; i <= days_of_month[month] + first_day.getDay() - 1; i++) {
          const day = document.createElement('div');

          if (i >= first_day.getDay()) {
            day.innerHTML = (i - first_day.getDay() + 1).toString();

            if (i - first_day.getDay() + 1 === currentDate.getDate() &&
              year === currentDate.getFullYear() &&
              month === currentDate.getMonth()) {
              day.classList.add('current-date');
            }
          }

          calendar_days.appendChild(day);
        }
      }
    };

    const month_list = document.querySelector('.month-list');
    month_names.forEach((e, index) => {
      const month = document.createElement('div');
      month.innerHTML = `<div>${e}</div>`;

      if (month_list) {
        month_list.appendChild(month);
        month.addEventListener('click', () => {
          this.currentMonth = index;
          generateCalendar(this.currentMonth, this.currentYear);
          if (month_list) {
            month_list.classList.replace('show', 'hide');
          }
          if (dayTextFormate) {
            dayTextFormate.classList.remove('hideTime');
            dayTextFormate.classList.add('showtime');
          }
          if (timeFormate) {
            timeFormate.classList.remove('hideTime');
            timeFormate.classList.add('showtime');
          }
          if (dateFormate) {
            dateFormate.classList.remove('hideTime');
            dateFormate.classList.add('showtime');
          }
        });
      }
    });

    (function () {
      if (month_list) {
        month_list.classList.add('hideonce');
      }
    })();

    document.querySelector('#pre-year')?.addEventListener('click', () => {
      --this.currentYear;
      generateCalendar(this.currentMonth, this.currentYear);
    });

    document.querySelector('#next-year')?.addEventListener('click', () => {
      ++this.currentYear;
      generateCalendar(this.currentMonth, this.currentYear);
    });

    const todayShowTime = document.querySelector('.time-formate');
    const todayShowDate = document.querySelector('.date-formate');

    const currshowDate = new Date();
    const showCurrentDateOption = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
    };
    const currentDateFormate = new Intl.DateTimeFormat('en-US', showCurrentDateOption).format(currshowDate);
    if (todayShowDate) {
      todayShowDate.textContent = currentDateFormate;
    }

    setInterval(() => {
      const timer = new Date();
      const option = {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
      };
      const formateTimer = new Intl.DateTimeFormat('en-us', option).format(timer);
      if (todayShowTime) {
        todayShowTime.textContent = formateTimer;
      }
    }, 1000);
  }
}
