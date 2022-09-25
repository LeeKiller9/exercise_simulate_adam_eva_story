let Apple = function () {
    this.setAppleWeight = function (weight) {
        this.weightApple = weight;
    }
    this.decrease = function () {
        this.weightApple--;
    }
    this.isEmpty = function () {
        return this.getAppleWeight() === 0;
    }
    this.getAppleWeight = function () {
        return this.weightApple;
    }

}

let Human = function () {
    this.setHuman = function (name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weightHuman = weight;
    }

    this.setName = function (name) {
        this.name = name;
    }

    this.setGender = function (gender) {
        this.gender = gender;
    }

    this.setHumanWeight = function (weight) {
        this.weightHuman = weight;
    }

    this.isMale = function () {
        return this.gender;
    }

    this.getGender = function () {
        if (this.isMale()) {
            return "man";
        } else {
            return "woman";
        }
    }

    this.getName = function () {
        return this.name;
    }

    this.getHumanWeight = function () {
        return this.weightHuman;
    }

    this.checkEmpty = function (fruit) {
        return fruit.isEmpty();
    }

    this.eat = function (fruit) {
        if (this.checkEmpty(fruit) === false) {
            this.weightHuman++;
            fruit.decrease();
        }
    }

    this.sayHello = function () {
        console.log("Hello world, I am " + this.getName() + ", I am a " + this.getGender() + ", my weight is " + this.getHumanWeight() + " units");
    }


}

let myApple = new Apple();
let myAdam = new Human();
let myEva = new Human();
myApple.setAppleWeight(10);
myAdam.setHuman("Adam", true, 80);
myEva.setHuman("Eva", false, 60);
myAdam.sayHello();
myEva.sayHello();

while (myApple.isEmpty() === false) {
    document.write("Adam eat apple <br>");
    myAdam.eat(myApple);
    document.write("Weight of Adam: " + myAdam.getHumanWeight() + " units <br>")
    document.write("Weight of Apple: " + myApple.getAppleWeight() + " units <br><br>")
    document.write("Eva eat apple <br>");
    myEva.eat(myApple);
    document.write("Weight of Eva: " + myEva.getHumanWeight() + " units <br>")
    document.write("Weight of Apple: " + myApple.getAppleWeight() + " units <br><br>")
}

