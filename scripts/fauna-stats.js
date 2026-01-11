document.addEventListener("DOMContentLoaded", () => {

  const labels = ["Mamíferos", "Aves", "Reptiles", "Anfibios"];
  const values = [120000, 90000, 60000, 45000];
  const colors = ["#4caf50", "#ff8a00", "#4caf50", "#ff8a00"];

  // BARRAS
  new Chart(document.getElementById("faunaBarChart"), {
    type: "bar",
    data: {
      labels,
      datasets: [{
        data: values,
        backgroundColor: colors,
        borderRadius: 8
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            callback: v => v.toLocaleString()
          }
        }
      }
    }
  });

  // TORTA
  new Chart(document.getElementById("faunaPieChart"), {
    type: "doughnut",
    data: {
      labels,
      datasets: [{
        data: values,
        backgroundColor: colors,
        borderWidth: 0
      }]
    },
    options: {
      cutout: "65%",
      plugins: {
        legend: {
          position: "bottom"
        }
      }
    }
  });

});
