/**
 * Created by hanifa on 3/13/17.
 */
function Train(obj){
    this.TrainName = obj.TrainName;
    this.Destination = obj.Destination;
    this.Frequency = obj.Frequency;
    this.NextArrival = obj.NextArrival;
    this.MinutesAway = obj.MinutesAway;
}
Train.instances ={};

Train.converterRow2obj=function(row){
    var train = new Train(row);
    return train;
}

Train.prototype.loadAll = function () {
    var key ="", keys=[], trainString ="", trains={};
    try{
        if(localStorage.getItem("trains")){
            trainString = localStorage.getItem("trains");
        };
    } catch (e){
       console.log(e+" NO DATA TO LOAD")
    };

    if(trainString){
        trains = JSON.parse(trainString);
        keys = Object.keys(trains);

        for(var i=0; i < keys.length; i++){
            key = keys[i];
            Train.instances[key] = Train.converterRow2obj(trains[key]);
        };
    }
}

Train.prototype.saveAll = function () {
 var  trainString="",error = false;

 var numberOfTrains = Object.keys(Train.instances).length;
 console.log(numberOfTrains+" List on schedule");

 try {
     if (typeof(Storage) !== "undefined"){

         trainString = JSON.stringify(Train.instances);
         localStorage.setItem('trains', trainString);
         console.log(trainString);
    }
     else {
         console.log( "Sorry! No Web Storage support");
     }

 }
 catch(e){
     console.log("NO DATA TO SAVE"+ "\n"+e)
 }


}

Train.prototype.updateTrain =  function () {

}

Train.prototype.deleteTrain  = function () {

}

Train.prototype.clearData= function () {

}

Train.prototype.createTestData = function () {

}

Train.prototype.populateTable = function () {
 var key="", keys=[]; row={};


    this.loadAll();
    var table = document.querySelector("table#train>tbody");

    keys = Object.keys(Train.instances);


    for(var i=0; i< keys.length; i++){
        key = keys[i];
        row = table.insertRow();
        console.log(key);

        console.log(Train.instances[key].TrainName);
        console.log(Train.instances[key].Destination);
        console.log(Train.instances[key].Frequency);
        console.log(Train.instances[key].NextArrival);
        console.log(Train.instances[key].MinutesAway);

        row.insertCell(-1).textContent = Train.instances[key].TrainName;
        row.insertCell(-1).textContent = Train.instances[key].Destination;
        row.insertCell(-1).textContent = Train.instances[key].Frequency;
        row.insertCell(-1).textContent = Train.instances[key].NextArrival;
        row.insertCell(-1).textContent = Train.instances[key].MinutesAway;


    }
}

Train.prototype.addTrain = function (slots) {
var trianm = new Train(slots);
Train.instances[slots.TrainName] =trianm;
}

Train.prototype.createTestDaa = function () {

    Train.instances["Trenton"] = new Train({TrainName:"Trenton Express", Destination:"Trenton", Frequency:25, NextArrival: "2017-03-25 05:33:64", MinutesAway:""});
    Train.instances["Oregon"] = new Train({TrainName:"Oregon Trail", Destination:"Salem , Oregon",  Frequency:360, NextArrival:"2017-03-22 05:33:64", MinutesAway:""});
    Train.instances["Midnight"] = new Train({TrainName:"Midnight Carriage", Destination:"Philadelphia",  Frequency:15, NextArrival:"2017-03-24 05:33:64", MinutesAway:""});
    Train.instances["Sing"] = new Train({TrainName:"Sing Sing Caravan", Destination:"Atlanta",  Frequency:45, NextArrival:"2017-03-22 05:33:64", MinutesAway:""});
    Train.instances["Boston"] = new Train({TrainName:"Boston Bus", Destination:"Boston",  Frequency:65, NextArrival:"2017-03-28 05:33:60", MinutesAway:""});
    Train.instances["California"] = new Train({TrainName:"California Caravan", Destination:"San Francisco",  Frequency:2000, NextArrival:"2017-03-28 05:33:64", MinutesAway:""});
    Train.instances["Analbens"] = new Train({TrainName:"Analbens's Train", Destination:"Florida",  Frequency:25, NextArrival:"2017-03-28 05:33:64", MinutesAway:""});

    this.saveAll();
}