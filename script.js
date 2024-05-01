// 1. https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md
class Movie {
    constructor(title, studio, rating="PG") {
      this.title = title;
      this.studio = studio;
      this.rating = rating;
    }
    getPG(movies)
    {
        return movies.filter(movie=>movie.rating==="PG")
    }
  }
  let film = new Movie("Casion Royale","Eon Productions","PG-13")

  const cinema = [
    new Movie("Movie 1", "Studio 1", "PG"),
    new Movie("Movie 2", "Studio 2", "PG-13"),
    new Movie("Movie 3", "Studio 3", "R"),
    new Movie("Movie 4", "Studio 4", "PG"),
    new Movie("Movie 5", "Studio 5", "PG-13"),
  ];
  
  const pgMovies = film.getPG(cinema);
  console.log(pgMovies);

// 2.https://aithub.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md
class circle{
    constructor(radius,color)
    {
        this.radius=radius;
        this.color=color;
    }
    //function to get radius value 
    getRadius(){
        return this.radius
    }
    //function to set radius value
    setRadius(){
        this.radius=radius
    }
    //function to get color value
    getColor(){
        return this.color
    }
    //function to set the color value
    setColor(){
        this.color=color
    }
    //to return string of member variables value
    toString(){
        return ["Radius"+" : "+ this.radius + " Color"+" : "+this.color]
    }
    //to compute and return circle area using radius
    getArea(){
        return ((Math.PI)*this.radius*this.radius)  
    }
     //to compute and return circle circumference using radius
    getCircumference(){
        return 2*(Math.PI)*this.radius;
    }
}
//Circle-class constructor with no parameter
var properties1 = new circle()
console.log(properties1.toString())
//Circle-class constructor with one parameter
var properties2 = new circle(2.0)
console.log(properties2.toString())
//Circle-class constructor with all the parameter
var properties3 = new circle(3.0,"Red")

console.log("getRadius: "+properties3.getRadius())
properties3.setRadius(3.3)
console.log("Radius value after setRadius: " +properties3.getRadius())
console.log("getColor: "+properties3.getColor())
properties3.setColor("Blue")
console.log("Color Value after setColor: " + properties3.getColor())
console.log(properties3.toString())
console.log("Area: "+properties3.getArea())
console.log("Circumference: "+properties3.getCircumference())

// 3. Write a "person" class to hold all the details.
class person{
    constructor(Name,Age,Place,Gender,Occupation){
        this.Name=Name
        this.Age=Age
        this.Place=Place
        this.Gender=Gender
        this.Occupation=Occupation
    }
}
var details = new person("Harshavardhan",21,"Coimbatore","Male","Student");

//  4.write a class to calculate the Uber price.
class uber{
    constructor(distance,ridetype)
    {
        this.distance=distance
        this.ridetype=ridetype
    }
    calc()
    {
        const base=50;
        const perKM=18;
        const type="XL"
        var res=base+(this.distance*perKM)
        if(this.ridetype=="XL")
        {
            res*=1.2;
        }
        else if(this.ridetype=="Black")
        {
            res*=1.5;
        }
        return res;
    }
}
var price=new uber(20,"XL")
var final=price.calc()
console.log(final)
