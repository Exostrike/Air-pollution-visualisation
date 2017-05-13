$(function () {
    localStorage.setItem("barcountry", "UK");
    localStorage.setItem("buttontext2", "Raw Data");
    country="UK";
    format="trans";
    prepcountry(country, format);  
});

function prepcountry(country, format){
    
    linklocation=null;
if (format==="trans"){linklocation='http://localhost:8081/country/'+country;}
else {linklocation='http://localhost:8081/rawdata/'+country;};

    
    
    $.getJSON(linklocation, function (data){
    console.log(data);
    chart1(data, country, format);
    });
    
};

function chart1(country, name, format) { 

titltext=null;
if (format==="trans"){titltext='Thousand tonnes of air polution/Motorisation rate, '+ name +', 1999-2014';} else {titltext='Thousand tonnes of air polution in '+ name +', 1999-2014';};

Highcharts.chart('container', {

    title: {
        text:titltext,
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
barmenu(format);
};

function barmenu(format){
    $('#menu1').empty();
    var countries =
            ["AT","BE","BG","CH","CY","CZ","DE","DK","EE","EL","ES","FI","FR","HR","HU","IE","IT","LI","LT","LU","LV","NL","NO","PL","PT","RO","SE","SI","SK","TR","UK"];
    $('#menu1').append('<h4>Country selected</h4>');
    var this_select_content = '<select id="countryselect">';
    for(var i=0; i <countries.length; i++){
        this_select_content += '<option value="' + countries[i] + '">' + countries[i] + '</option>';
        }
    this_select_content +='</select>';
    $("#menu1").append(this_select_content);
    document.getElementById("countryselect").value = ""+"UK"+"";
    document.getElementById("countryselect").value = ""+localStorage.getItem("barcountry")+"";
    $('#menu1').append(" ");
    $('#menu1').append('<button type="button" onclick="changecountry()">Change Country');
    $('#menu1').append(" ");
    $('#menu1').append("<button type='button' id='dataformat2' onclick='changetype()'>"+localStorage.getItem("buttontext2"));
    
}

function changecountry() {
    var countryselect = document.getElementById("countryselect");
    var country = countryselect.options[countryselect.selectedIndex].value;
    localStorage.setItem("barcountry", countryselect.options[countryselect.selectedIndex].value);
    prepcountry(country, format);
};

function changetype(){
    if (format==="trans") {document.getElementById("dataformat2").innerHTML="Tranformed Data", format="raw";} 
    else {document.getElementById("dataformat2").innerHTML="Raw Data", format="trans";};
    localStorage.setItem("buttontext2", document.getElementById("dataformat2").innerHTML);
    prepcountry(document.getElementById("countryselect").value, format);   
}
