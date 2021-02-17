import VendrController from "./Controllers/VendrController.js"

class App {
  // valuesController = new ValuesController();
  VendrController = new VendrController();
}

window["app"] = new App();
