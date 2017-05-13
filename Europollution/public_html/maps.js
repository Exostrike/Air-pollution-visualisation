$(function () {
    localStorage.setItem("mapyear", 2014);
    localStorage.setItem("mappolt", "PM10");
    localStorage.setItem("buttontext", "Raw Data");
    year =2014;
    polttype="PM10";
    format="trans";
    prepData(year, polttype, format);
    $( document ).tooltip();
});

function euromap(year, data, polttype, format) {
    
    captext = null;
     if (format==="trans"){captext ='Thousand of Tonnes of '+polttype+'/Motorisation Rate in Europe in '+year;}
    else {captext ='Thousand of Tonnes of '+polttype+' in Europe in '+year;} 
    
    colour_axis=null;
    if (format==="trans"){colour_axis =[
                    [0, '#40FF00'],
                    [0.3, '#40FF00'],
                    [0.6, '#FFFF00'],
                    [0.8, '#FF8000'],
                    [0.9, '#FF0000']
                ];}
    else {colour_axis =[
                    [0, '#40FF00'],
                    [0.5, '#40FF00'],
                    [0.7, '#FFFF00'],
                    [0.8, '#FF8000'],
                    [0.9, '#FF0000']
                ];} 
    
    $('#container3').empty();
    $('#container3').highcharts('Map', {
        
        

        
        
        title: {
            text:captext,
        style: {
            "fontSize": "15px"
        }
        },

        subtitle: {
            text: 'Source map: <a href="https://code.highcharts.com/mapdata/custom/european-union.js">European Union</a>'
        },

        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        colorAxis: {
            stops: colour_axis,
        type:'logarithmic',
        startOnTick: false,
        endOnTick: false,
        labels: {
            format: '{value}'
        }
    },
        
        series: [
            {
            mapData: Highcharts.maps['custom/european-union'],
            name: polttype+' in '+year,
            data: data.map(function(el) { 
            if (format==="trans"){el.value = el.value;}
            else {el.value = el[year];} 
            return el;
            }),
            joinBy: 'hc-key',
            states: {
                hover: {
                    color: '#a4edba'
                }
            },
            dataLabels: {
                enabled: true,
                color: '#FFFFFF',
                format: '{point.name}'
            },
            tooltip: {
                pointFormat: '{point.name}: {point.value}'
            },
            
            
        }],
    
    tooltip: {
        borderColor: 'black'
    },
    
    });
    makeMenu2(1999, 2014);
};

function prepData(year, polttype, format){
    
    linklocation=null;
    if (format==="trans"){linklocation='http://localhost:8081/'+polttype+"/"+year;}
    else {linklocation='http://localhost:8081/raw/'+polttype;};
    
    $.getJSON(linklocation, function (data){
    console.log(data);
    euromap(year, data, polttype, format);
    });
};

function makeMenu2(start, finish, format){
var startTag = '<input type="radio" name="selectyear"';
var endTag = '</input>';
var polttypes = ["PM10", "PM2_5", "NH3", "NMVOC", "NOX", "SOX"];
var tooltips = ["Sum of hazardous liquid and solid particles in the air", "Sum of hazardous liquid and solid particles in the air", "Ammonia", "Non-methane volatile organic compounds are a collection of organic compound that react in a similiar manner", "Result of reactions between Nitrogen and Oxygen during combustion", "Emitted when fuels containing sulphur are consumed"];
var poltbutton = '<input type="radio" name="selectpolttype"';
$('#menu2').empty();
$('#menu2').append('<h4>Year to display</h4>');

var this_select_content = '<select id="dateselect">';
//This section produces the select list of dates. 
for(var i=start; i <=finish; i++){
    this_select_content += '<option value="' + i + '">' + i + '</option>';
}
this_select_content +='</select>';
$("#menu2").append(this_select_content);
document.getElementById("dateselect").value = ""+localStorage.getItem("mapyear")+"";
//This section produces the radio buttons for the pollutant types.
var num=1;
for (k=0; k<polttypes.length; k++){
var button2 = poltbutton+'id="poltbutton'+num+'" value="'+polttypes[k]+'" title="'+tooltips[k]+'">'+polttypes[k];
num++;
$('#menu2').append(button2);
};
$(":radio[value="+localStorage.getItem("mappolt")+"]").attr('checked',true);
$('#menu2').append(" ");
$('#menu2').append('<button type="button" onclick="displayMap('+format+')">Display');
$('#menu2').append(' <button type="button" id="dataformat" onclick="changetype2()">'+localStorage.getItem("buttontext"));
};

function displayMap(format) {
    var polttype =[];
    var dateselect = document.getElementById("dateselect");
    var year = dateselect.options[dateselect.selectedIndex].value;
    localStorage.setItem("mapyear", dateselect.options[dateselect.selectedIndex].value);
    $('input[type=radio]:checked').each(function(){polttype.push($(this).val());});
    localStorage.setItem("mappolt", polttype);
    prepData(year, polttype, format);
};

function changetype2(){

    if (format==="trans") {document.getElementById("dataformat").innerHTML="Tranformed Data", format="raw";} 
    else {document.getElementById("dataformat").innerHTML="Raw Data", format="trans";};
    localStorage.setItem("buttontext", document.getElementById("dataformat").innerHTML);
    prepData(year, polttype, format);   
}








