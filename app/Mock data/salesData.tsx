
const graphColors = {
    blue :'rgb(59 130 246 / 0.7)',   // blue-500/70
    emerald :'rgb(16 185 129 / 0.7)',   // emerald-500/70
    orange :'rgb(234 88 12 / 0.7)',    // orange-600/70
};

const salesData = {
    daily: {
      labels: Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`),
      datasets: [
        {
          label: "Sales",
          data: Array.from({ length: 30 }, () =>
            Math.floor(Math.random() * 1000)
          ),
          backgroundColor: graphColors.blue,
          borderRadius: 15, // Makes bars rounded
          barPercentage: 0.9, // Controls width of bars (reduce space)
          categoryPercentage: 0.9,
          borderSkipped: false,  
        },
      ],
    },
    weekly: {
      labels: Array.from({ length: 12 }, (_, i) => `Week ${i + 1}`),
      datasets: [
        {
          label: "Sales",
          data: Array.from({ length: 12 }, () =>
            Math.floor(Math.random() * 7000)
          ),
          backgroundColor: graphColors.emerald,
          borderRadius: 15, // Makes bars rounded
          barPercentage: 0.9, // Controls width of bars (reduce space)
          categoryPercentage: 0.9,
          borderSkipped: false,  

        },
      ],
    },
    monthly: {
      labels: Array.from({ length: 12 }, (_, i) => ` 0${i + 1} - 25`),
      datasets: [
        {
          label: "Sales",
          data: Array.from({ length: 12 }, () =>
            Math.floor(Math.random() * 30000)
          ),
          backgroundColor: graphColors.orange,
          borderRadius: 15, // Makes bars rounded
          barPercentage: 0.9, // Controls width of bars (reduce space)
          categoryPercentage: 0.9,
          borderSkipped: false,  

        },
      ],
    },
  };

  export default salesData;