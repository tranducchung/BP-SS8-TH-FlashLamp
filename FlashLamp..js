function Battery(energy) {
    this.energy = energy;
    this.setEnergy = function (energy) {
        return this.energy = energy;
    };
    this.getEnergy = function () {
        return this.energy;
    };
    this.decreaseEnergy = function () {
        if (this.energy > 0){
            energy--}
        return energy;
    }
}
function FlashLamp() {
    this.setBattery = function (battery) {
        this.battery = battery;
    };
    this.BatteryInfo = function () {
         return this.battery.getEnergy();
    };
    this.light = function () {
        if (this.status) {
            alert("Linghting")
        } else {
            alert("Not Lighting")
        }
        this.turnon = function () {
            this.status = true;
        };
        this.turnoff = function () {
            this.status = false
        }
    };
    this.checkBattery = function () {
        return this.battery.decreaseEnergy();
    }
}
let battery = new Battery();
battery.setEnergy(10);
let flashLamp = new FlashLamp();
flashLamp.setBattery(battery);
document.write("Battery info "+ flashLamp.BatteryInfo()+ "<br>");
flashLamp.light();
document.write("TurnOn <br/>");
flashLamp.turnon();
flashLamp.light();
document.write("Battery Info " + flashLamp.BatteryInfo() +"<br>");
document.write("Turn off <br/>");
flashLamp.turnoff();
flashLamp.light();

