$(function () {
    localStorage.setItem("mapyear2", 2014);
    localStorage.setItem("mappolt2", "PM10");
    year =2014;
    polttype="PM10";
    prepData(year, polttype);
    $( document ).tooltip();
});

//This is a copy of the map using raw data.
function euromap(year2, data, polttype) {

    $('#container4').empty();
    $('#container4').highcharts('Map', {

        title: {
            text: 'Thousand of Tonnes of '+polttype+' in Europe in '+year,
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
            stops: [
                    [0, '#40FF00'],
                    [0.5, '#40FF00'],
                    [0.6, '#FFFF00'],
                    [0.8, '#FF8000'],
                    [1, '#FF0000']
                ],
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
            name: polttype+' in '+year2,
            data: data.map(function(el) { 
            el.value = el[year2]; 
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

function prepData(year, polttype){    
    $.getJSON('http://localhost:8081/raw/'+polttype, function (data){
    console.log(data);
    euromap(year, data, polttype);
    });
};

function makeMenu2(start, finish){
var startTag = '<input type="radio" name="selectyear"';
var endTag = '</input>';
var polttypes = ["PM10", "PM2_5", "NH3", "NMVOC", "NOX", "SOX"];
var tooltips = ["Sum of hazardous liquid and solid particles in the air", "Sum of hazardous liquid and solid particles in the air", "Ammonia", "Non-methane volatile organic compounds are a collection of organic compound that react in a similiar manner", "Result of reactions between Nitrogen and Oxygen during combustion", "Emitted when fuels containing sulphur are consumed"];
var poltbutton = '<input type="radio" name="selectpolttype"';
$('#menu3').empty();
$('#menu3').append('<h4>Year to display</h4>');

var this_select_content = '<select id="dateselect">';
//This section produces the select list of dates. 
for(var i=start; i <=finish; i++){
    this_select_content += '<option value="' + i + '">' + i + '</option>';
}
this_select_content +='</select>';
$("#menu3").append(this_select_content);
document.getElementById("dateselect").value = ""+localStorage.getItem("mapyear2")+"";
//This section produces the radio buttons for the pollutant types.
var num=1;
for (k=0; k<polttypes.length; k++){
var button2 = poltbutton+'id="poltbutton'+num+'" value="'+polttypes[k]+'" title="'+tooltips[k]+'">'+polttypes[k];
num++;
$('#menu3').append(button2);
};
$(":radio[value="+localStorage.getItem("mappolt2")+"]").attr('checked',true);
$('#menu3').append(" ");
$('#menu3').append('<button type="button" onclick="displayMap()">Display');
};

function displayMap() {
    var polttype =[];
    var dateselect = document.getElementById("dateselect");
    var year = dateselect.options[dateselect.selectedIndex].value;
    localStorage.setItem("mapyear2", dateselect.options[dateselect.selectedIndex].value);
    $('input[type=radio]:checked').each(function(){polttype.push($(this).val());});
    localStorage.setItem("mappolt2", polttype);
    prepData(year, polttype);
};