const url = "https://api.spacexdata.com/v2/launchpads";
//d3.json(url).then(receivedData => console.log(receivedData));

/*
d3.json(url).then(data => console.log(data));
d3.json(url).then(spaceXResults => console.log(spaceXResults[0]));
d3.json(url).then(spaceXResults => console.log(spaceXResults[0].full_name));
d3.json(url).then(spaceXResults =>
    console.log(spaceXResults[0].location.latitude));
*/
d3.json(url).then();
/*
d3.json("samples.json").then(function(data){
    console.log(data);
});
*/

//Roza wants to extract only the wfreq, or the weekly belly button washing frequency, 
//of each person into a new array. What would her code look like?
d3.json("samples.json").then(function(data){
    wfreq = data.metadata.map(person => person.wfreq).sort((a,b) => b - a);;
    //console.log(wfreq);

    //delete null values from the sorted wfreq array.
    filteredWfreq = wfreq.filter(element => element != null);
    console.log(filteredWfreq);
});

/*
researcher1 = {
    name: 'Roza',
    age: 34,
    hobby: 'Hiking'
};
console.log(Object.entries(researcher1));
*/

d3.json("samples.json").then(function(data){
    firstPerson = data.metadata[0];
    Object.entries(firstPerson).forEach(([key, value]) =>
      {console.log(key + ': ' + value);});
});