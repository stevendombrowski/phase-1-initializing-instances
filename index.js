// Write your code here
class Breakfast {
    constructor(food, drink){
    this.drink = drink;
    this.food = food;
    }

}
let bfast = new Breakfast("eggs", "juice");

class Lunch {
constructor(salad, soup, drink){
   this.salad = salad;
   this.soup = soup;
   this.drink = drink;
 }
}
let lunch = new Lunch("side salad", "broccoli cheddar soup", "iced tea")

class Dinner {
    constructor(salad, soup, entree, dessert){
        this.salad = salad;
        this.soup = soup;
        this.entree = entree;
        this.dessert = dessert
    }
}
let dinner = new Dinner("balsamic salad",
"consomme",
"filet mignon",
"cheesecake")