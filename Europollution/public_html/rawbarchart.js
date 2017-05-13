$(function () {
    localStorage.setItem("barcountry2", "UK");
    country="UK";
    prepcountry(country);  
});

function prepcountry(country){
    $.getJSON('http://localhost:8081/rawdata/'+country, function (data){
    console.log(data);
    chart1(data, country);
    });
    
};

function chart1(country, name) { 

$('#container5').empty();
Highcharts.chart('container5', {

    title: {
        text: 'Thousand tonnes of air polution in '+ name +', 1999-2014',
        style: {
            "fontSize": "15px"
        }
    },

    yAxis: {
        type: 'logarithmic',
        title: {
            text: 'Tonnes/Number of cars per person'
        }
    },
    legend: {
        layout: 'vertical',
        align: 'right',
        verticalAlign: 'middle'
    },

    plotOptions: {
        series: {
            pointStart: 1999, lineWidth:1},
    },
    
    tooltip: {
        borderColor: 'black'
    },

    series: country

});
barmenu();
};

function barmenu(){
    $('#menu4').empty();
    var countries =
            ["AT","BE","BG","CH","CY","CZ","DE","DK","EE","EL","ES","FI","FR","HR","HU","IE","IS","IT","LI","LT","LU","LV","NL","NO","PL","PT","RO","SE","SI","SK","TR","UK"]
    $('#menu4').append('<h4>Country selected</h4>');
    var this_select_content = '<select id="countryselect2">';
    for(var i=0; i <countries.length; i++){
        this_select_content += '<option value="' + countries[i] + '">' + countries[i] + '</option>';
        }
    this_select_content +='</select>';
    $("#menu4").append(this_select_content);
    document.getElementById("countryselect2").value = ""+"UK"+"";
    document.getElementById("countryselect2").value = ""+localStorage.getItem("barcountry2")+"";
    $('#menu4').append(" ");
    $('#menu4').append('<button type="button" onclick="changecountry()">Change Country'); 
    
}

function changecountry() {
    var countryselect = document.getElementById("countryselect2");
    var country = countryselect.options[countryselect.selectedIndex].value;
    localStorage.setItem("barcountry2", countryselect.options[countryselect.selectedIndex].value);
    prepcountry(country);
};
