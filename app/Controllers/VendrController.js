import { ProxyState } from "../AppState.js";
import { vendrService } from "../Services/VendrService.js";


//Private
function _draw() {
  let vendr = ProxyState.vendr[0];
  document.getElementById("app").innerHTML = /*html*/`
  <button class="btn btn-info" onclick="app.VendrController.addQuarter()">Add Quarter $${vendr.cash}</button>
  <div class="row vendr-items">
    <button class="btn btn-primary m-2" onclick="app.VendrController.buyCandy()">Buy Candy ${vendr.candy}</button>
    <button class="btn btn-primary m-2" onclick="app.VendrController.buySoda()">Buy Soda ${vendr.soda}</button>
    <button class="btn btn-primary m-2" onclick="app.VendrController.buyChips()">Buy Chips ${vendr.chips}</button>
  </div>
  <div>Last Item Purchased: ${vendr.lastItem}</div>
  `
}

//Public
export default class VendrController {
  constructor() {
    ProxyState.on("vendr", _draw);
    _draw()
  }

  addQuarter() {
    vendrService.addQuarter()
    _draw()
  }

  buyCandy() {
    vendrService.buyCandy()
    _draw()
  }

  buySoda() {
    vendrService.buySoda()
    _draw()
  }

  buyChips() {
    vendrService.buyChips()
    _draw()
  }

}
