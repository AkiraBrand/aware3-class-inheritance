class Ministry {
  constructor(type, leader, population, neededResources, time) {
    this.type = type;
    this.leader = leader;
    this.population = population;
    this.neededResources = neededResources;
    this.time = time;
  };

  startMinistry() {
    return `${this.type} Ministry happens at ${this.time}. \n We serve ${this.population} and we need your donations for ${this.resources}. ${this.leader} will be leading. Come hang out at ${this.time}.`
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

let youthMinistry = new Youthministry('Youth', "Cool Steve","teenagers", null, 9);

youthMinistry.startMinistry();
//youthMinistry.hostPrayerCircle();


//I started with a typical OOP class structure with some inheritance. There's lots of advantages, because we can have a typical parent/child OOP inheritance structure where the children of the parent class inheret all of the behavior and attributes of their parent\'s class. This is great for scaling and also keeping each object's behavior separate from each other in different classes, and allows for a good amount of distinct behavior in related families of objects. Its great to keep your code DRY. 

// We can see the limitations of class inheritance, though, when we call youthMinistry.startMinistry();  because, they're kids and don't really need extra resources like childcare. We have to put some kind of "null" placeholder in for the needed resources attribute, because if we don't, javascript won't placehold an unentered variable it as null automatically. This can lead to some mistakes, and we can't use one of the parent's methods in a way that makes sense as a result without having to write extra code. 