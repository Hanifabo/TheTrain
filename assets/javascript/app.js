/**
 * Created by hanifa on 3/13/17.
 */
$(document).ready(function () {

    var trainName = $("#tname");
    var dstination = $("#destination");
    var frequency = $("#frqncy");
    var nextArrival = $("#netArrvl");
    var minutesAwaya = $("#mntaway");

    var addSchdule = $("#frmbtn");
    var clear = $("#rest");


    $("#frmbtn").on('click',function (event) {
    event.preventDefault();
        var tname = trainName.val();
        var dtions = dstination.val();
        var frqncy =frequency.val();
        var ntArvl = nextArrival.val();
       var mAway =  minutesAwaya.val();

        var store = {TrainName:tname, Destination:dtions,Frequency:frqncy,NextArrival:ntArvl ,MinutesAway:mAway  };

        var train = new Train(store);

        //console.log(store+"  "+train.TrainName+"  "+train.Destination+"  "+train.Frequency+"  "+train.NextArrival+"  "+train.MinutesAway);

        train.addTrain(store);

        train.saveAll();


        train.loadAll();

        localStorage.setItem("hanifaDab", "Doing what i can");
    })

    $("#displaySchdule").on('click',function () {
        var store = {TrainName:'tname', Destination:'dtions',Frequency:'frqncy',NextArrival:'ntArvl' ,MinutesAway:'mAway'  };

        var traibn = new Train(store);

        traibn.populateTable();
    })




})





