const dateHelper = {
  computed: {
    monthNames() {
      return [
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
        "December"
      ];
    }
  },
  methods: {
    getNth(day) {
      let selector;
      if (day <= 0) {
        selector = 4;
      } else if ((day > 3 && day < 21) || day % 10 > 3) {
        selector = 0;
      } else {
        selector = day % 10;
      }
      return day + ["th", "st", "nd", "rd", ""][selector];
    },
    getFormattedDate(isoDate) {
      const date = new Date(isoDate);
      const year = date.getFullYear();
      const month = this.monthNames[date.getMonth()];
      const day = this.getNth(date.getDate());
      return `${day} ${month} ${year}`;
    }
  }
};

export default dateHelper;
