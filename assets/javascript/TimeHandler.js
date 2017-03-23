/**
 * Created by hanifa on 3/15/17.
 */

function Timmer() {

}
    // grabs the time value from the table and countdown time
     Timmer.prototype.arrivalCalculator= function() {

            var table = document.querySelector("table#train>tbody");
            var tableRow = table.getElementsByTagName("tr");

            //console.log("The lenght of the Tr   " + tableRow.length)
            setInterval(function () {

                for (var i = 0; i < tableRow.length; i++) {
                    var tableData = tableRow[i].getElementsByTagName("td")[3].innerHTML.trim();
                   // var Data = tableRow[i].getElementsByTagName("td")[4].innerHTML='';
                    //console.log("The td value  " + tableData);

                    var time = moment(parseInt(tableData)).format("YYYY-MM-DD");

                    var timeValue = moment(time, "YYYY-MM-DDTHH:mm:ss").fromNow();
                    console.log(timeValue);

                    updateData(i,timeValue);
                   // $(".flash").toggleClass('active');
                }

            }, 1000);
    };

var updateData =function(i,text){
    console.log(i)
    var prnt =  $('tbody');
    var currentRow = prnt.closest("tr:eq(i)");

    var cell = currentRow.find("td:eq(4)").addClass('flash');
    cell.text(text);
    console.log(text);
};

Timmer.prototype.upDateTable =function(i,text) {
    var startdate = moment.now();

    //$("#contentArea").on('load',function () {
    var timecover = moment(startdate).format("YYYY MM DD HH:mm:ss");

    var tm = moment(timecover,"YYYY-MM-DDTHH:mm:ss").add(days,'minutes');

    setInterval(function () {
        var now = moment(tm).fromNow();
        var timmer =  $("#"+text);
        console.log("why is it not working");
        timmer.text(now);
        //$(".flash").toggleClass('active');
    },2000);
    // })
}


 Timmer.prototype.countDown =function(text,days) {
    var startdate = moment.now();

    //$("#contentArea").on('load',function () {
        var timecover = moment(startdate).format("YYYY MM DD HH:mm:ss");

        var tm = moment(timecover,"YYYY-MM-DDTHH:mm:ss").add(days,'minutes');

        setInterval(function () {
            var now = moment(tm).fromNow();
            var timmer =  $("#"+text);
            timmer.text(now);
            $(".flash").toggleClass('active');
        },3000);
   // })
}

