class Ministry {
  constructor(type, leader, population, neededResources, time) {
    this.type = type;
    this.leader = leader;
    this.population = population;
    this.neededResources = neededResources;
    this.time = time;
  };

  startMinistry() {
    return `${this.type} Ministry happens at ${this.time}. \n We serve ${this.population} and we need your donations for ${this.resources}. ${this.leader} will be leading. Come hang out on ${this.time}.`
  }
}

class Youthministry extends Ministry {
  constructor(type, leader, population, neededResources, time) {
    super(type, leader, population, neededResources, time);
  }

  hostPrayerCircle() {
    console.log('Let us pray');
  }
}

let youthMinistry = new Youthministry('Youth', "Cool Steve","Youth", null, 9);

console.log(youthMinistry);


// youthMinistry.startMinistry();
//we can see the limitations of class inheritance, because this particular ministry doesn't need resources. But we have to put some kind of "null" placeholder in for needed resources, because if we don't, javascript won't placehold an unentered variable it as null automatically. This can lead to some mistakes. 