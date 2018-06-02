new WOW().init();


//Chart
var ctx = document.getElementById("myChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["HTML5", "CSS3", "JavaScript", "ReactJS", "Node.js", "MongoDB"],
        datasets: [{
            label: 'Scale of 0-20',
            data: [19, 19, 15, 10, 13, 10],
            backgroundColor: [
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 206, 86, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});




