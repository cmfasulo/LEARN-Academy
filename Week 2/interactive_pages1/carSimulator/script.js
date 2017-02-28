var createCar = {
  speed: 0,

  accelerate: function() {
    this.speed += 10;
    document.getElementById("carSpeed").innerHTML = this.speed;
  },

  brake: function() {
    this.speed -= Math.floor(Math.random() * (this.speed / 2));

    if (this.speed < 7) {
      this.speed = 0;
    }
    document.getElementById("carSpeed").innerHTML = this.speed;
  }
};


// Car accelerates until hits 85
/*while (myCar.getSpeed() < 85) {
  if (myCar.getSpeed() > 75) {
    myCar.accelerate(85-myCar.getSpeed());

    console.log("Your current speed is " + myCar.getSpeed() + ". That's all ya get.");
  }
  myCar.accelerate(10);
}

// Car brakes until hits 0
var iter = 0
while (myCar.getSpeed() > 0) {
  myCar.brake();
  iter++;
}
*/

function submit() {
  var year = document.getElementById("year").value;
  var make = document.getElementById("make").value;
  var model = document.getElementById("model").value;

  document.getElementById("carYear").innerHTML = year;
  document.getElementById("carMake").innerHTML = make;
  document.getElementById("carModel").innerHTML = model;
}
