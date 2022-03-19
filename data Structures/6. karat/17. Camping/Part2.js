/*
You and your friends are driving to a Campground to go camping. Only 2 of you have cars, so you will be carpooling. 

Routes to the campground are linear, so each location will only lead to 1 location and there will be no loops or detours. 
Both cars will leave from their starting locations at the same time. The first car to pass someone's location will pick them up. 
If both cars arrive at the same time, the person can go in either car.

Roads are provided as a directed list of connected locations with the duration (in minutes) it takes to drive between the locations. 
[Origin, Destination, Duration it takes to drive]

Given a list of roads, a list of starting locations and a list of people/where they live, return a collection of who will be in each car upon arrival to the Campground.
------------------------------------------------------
Bridgewater--(30)-->Caledonia--(15)-->New Grafton--(5)-->Campground
                                       ^
Liverpool---(10)---Milton-----(30)-----^

roads1 = [
    ["Bridgewater", "Caledonia", "30"], <= The road from Bridgewater to Caledonia takes 30 minutes to drive.
    ["Caledonia", "New Grafton", "15"], 
    ["New Grafton", "Campground", "5"], 
    ["Liverpool", "Milton", "10"],
    ["Milton", "New Grafton", "30"]
]
starts1 = ["Bridgewater", "Liverpool"]
people1 = [
    ["Jessie", "Bridgewater"], ["Travis", "Caledonia"], 
    ["Jeremy", "New Grafton"], ["Katie", "Liverpool"]
]

Car1 path: (from Bridgewater): [Bridgewater(0, Jessie)->Caledonia(30, Travis)->New Grafton(45)->Campground(50)]
Car2 path: (from Liverpool): [Liverpool(0, Katie)->Milton(10)->New Grafton(40, Jeremy)->Campground(45)]

Output (In any order/format):
    [Jessie, Travis], [Katie, Jeremy]
--------------------------------------
Riverport->Chester->Campground
             ^
Halifax------^

roads2 = [["Riverport", "Chester", "40"], ["Chester", "Campground", "60"], ["Halifax", "Chester", "40"]]
starts2 = ["Riverport", "Halifax"]
people2 = [["Colin", "Riverport"], ["Sam", "Chester"], ["Alyssa", "Halifax"]]

Output (In any order/format):
    [Colin, Sam], [Alyssa] OR [Colin], [Alyssa, Sam]
----------------------------------------
Riverport->Bridgewater->Liverpool->Campground

roads3 = [["Riverport", "Bridgewater", "1"], ["Bridgewater", "Liverpool", "1"], ["Liverpool", "Campground", "1"]]
starts3_1 = ["Riverport", "Bridgewater"]
starts3_2 = ["Bridgewater", "Riverport"]
people3 = [["Colin", "Riverport"], ["Jessie", "Bridgewater"], ["Sam", "Liverpool"]]

Output (starts3_1/starts3_2):  [Colin], [Jessie, Sam] - (Cars can be in any order)
----------------------------------------
All Test Cases: (Cars can be in either order)
carpool(roads1, starts1, people1) => [Jessie, Travis], [Katie, Jeremy]
carpool(roads2, starts2, people2) => [Colin, Sam], [Alyssa] OR [Colin], [Alyssa, Sam]
carpool(roads3, starts3_1, people3) => [Colin], [Jessie, Sam]
carpool(roads3, starts3_2, people3) => [Jessie, Sam], [Colin]
----------------------------------------
Complexity Variable:
n = number of routes

*/


function carpool(roads, starts, peoples) {
    let peopleMap = new Map();
    for (let people of peoples) {
        let [name, location] = people;
        if (!peopleMap.get(location)) {
            peopleMap.set(location, name);
        }
    }

    let roadMap = new Map();
    for (let road of roads) {
        let [start, end, distance] = road;
        if (!roadMap.get(start)) {
            roadMap.set(start, { end, distance });
        }
    }

    let path1Map = new Map();
    let path2Map = new Map();
    function loop(mapObj, start, roadMap) {
        let end = "";
        let distance = 0;
        while (end != "Campground") {
            distance = distance + parseInt(roadMap.get(start).distance);
            mapObj.set(start, distance);
            end = roadMap.get(start).end;
            start = end;
        }
    }

    loop(path1Map, starts[0], roadMap);
    loop(path2Map, starts[1], roadMap);

    let car1 = [], car2 = [];
    let alreadyPickedUp = new Map();
    for (let [key, value] of path1Map.entries()) {
        let people = peopleMap.get(key);
        if (!people) continue;
        if (path2Map.get(key) < value) {
            car2.push(people);
        } else {
            car1.push(people);
        }
        alreadyPickedUp.set(people, true)
    }
    for (let [key, value] of path2Map.entries()) {
        let people = peopleMap.get(key);
        if (!people) continue;
        if (path1Map.get(key) < value) {
            if (!alreadyPickedUp.has(people)) {
                car1.push(people);
            };
        } else {
            if (!alreadyPickedUp.has(people)) {
                car2.push(people);
            };
        }
    }
    console.log([...car1], [...car2])
}

roads2 = [["Riverport", "Chester", "40"], ["Chester", "Campground", "60"], ["Halifax", "Chester", "40"]]
starts2 = ["Riverport", "Halifax"]
people2 = [["Colin", "Riverport"], ["Sam", "Chester"], ["Alyssa", "Halifax"]]



roads3 = [["Riverport", "Bridgewater", "1"], ["Bridgewater", "Liverpool", "1"], ["Liverpool", "Campground", "1"]]
starts3_2 = ["Bridgewater", "Riverport"]
people3 = [["Colin", "Riverport"], ["Jessie", "Bridgewater"], ["Sam", "Liverpool"]]


roads1 = [
    ["Bridgewater", "Caledonia", "30"], //<= The road from Bridgewater to Caledonia takes 30 minutes to drive.
    ["Caledonia", "New Grafton", "15"],
    ["New Grafton", "Campground", "5"],
    ["Liverpool", "Milton", "10"],
    ["Milton", "New Grafton", "30"]
]
starts1 = ["Bridgewater", "Liverpool"]
people1 = [
    ["Jessie", "Bridgewater"], ["Travis", "Caledonia"],
    ["Jeremy", "New Grafton"], ["Katie", "Liverpool"]
]


carpool(roads1, starts1, people1) //=> [Jessie, Travis], [Katie, Jeremy]
console.log("[Jessie, Travis], [Katie, Jeremy]")

carpool(roads2, starts2, people2)// => [Colin, Sam], [Alyssa] OR [Colin], [Alyssa, Sam]
console.log("[Colin, Sam], [Alyssa] OR [Colin], [Alyssa, Sam]")


carpool(roads3, starts3_2, people3) // => [Jessie, Sam], [Colin]
console.log("[Jessie, Sam], [Colin]")
