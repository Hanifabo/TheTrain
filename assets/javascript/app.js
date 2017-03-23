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
        var frqncy = frequency.val();
        var ntArvl = nextArrival.val();
        var mAway = minutesAwaya.val();

        if ((tname.length <= 0 )|| (dtions.length <= 0) || (frqncy.length <= 0 )|| (ntArvl.length <= 0 )|| (mAway.length <= 0)) {
           //var txtmssg = $("<h3>")
            var mod =  $("#myModal");
            mod.css('display','block');

        } else {
            var store = {TrainName: tname, Destination: dtions, Frequency: frqncy, NextArrival: ntArvl, MinutesAway: mAway};

            var train = new Train(store);

            console.log(store + "  " + train.TrainName + "  " + train.Destination + "  " + train.Frequency + "  " + train.NextArrival + "  " + train.MinutesAway);

            train.addTrain(store);

            train.saveAll();

            trainName.val("");
            dstination.val("");
            frequency.val("");
            nextArrival.val("");
            minutesAwaya.val("");
            //train.loadAll();
            console.log("ADDED SUCCESSFULLY");
            // localStorage.setItem("hanifaDab", "Doing what i can");

        }




    })

    $("#displaySchdule").on('click',function () {
        var store = {TrainName:'tname', Destination:'dtions',Frequency:'frqncy',NextArrival:'ntArvl' ,MinutesAway:'mAway'  };

        var traibn = new Train(store);

        traibn.populateTable();
    })


    $("#findT, .card").on('click',function () {

     console.log("we are here for testing ");
        try {
            if (typeof(Storage) !== "undefined"){

                var store = {TrainName:"tname", Destination:"dtions",
                    Frequency:"frqncy",NextArrival:"ntArvl" ,
                    MinutesAway:"mAway"  };

                var train = new Train(store);
                train.createTestDaa();
                console.log("Test Data Created")
            }
            else {
                console.log( "Sorry! No Web Storage support");
            }

        }
        catch(e){
            console.log("NO DATA TO SAVE"+ "\n"+e);
        }
    });

});









