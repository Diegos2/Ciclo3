google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(grafica);

function cargaData(){
    var data = google.visualization.arrayToDataTable([
        ['IMC', 'Porcentaje'],
        ['Delgado', 12.5],
        ['Normal', 38.3],
        ['Sobrepeso', 25.4],
        ['Obesidad', 23.8]
      ]);
      return data;
}

function grafica(){
    var data = cargaData();

    var opciones = {
      pieHole: 0.4,
    };

    var chart = new google.visualization.PieChart(document.getElementById('grafico'));
    chart.draw(data, opciones);

}
