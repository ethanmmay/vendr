import { ProxyState } from "../AppState.js";

class VendrService {
  addQuarter() {
    ProxyState.vendr[0].cash += 0.25
  }

  buyCandy(){
    let vendr = ProxyState.vendr[0]
    if (vendr.cash >= 1.25) {
        vendr.candy += 1
        vendr.cash -= 1.25
        vendr.lastItem = "Candy"
    } else {
        alert("Not enough cash.")
    }
    ProxyState.vendr[0] = vendr
  }

  buySoda() {
    let vendr = ProxyState.vendr[0]
    if (vendr.cash >= 1.50) {
        vendr.soda += 1
        vendr.cash -= 1.50
        vendr.lastItem = "Soda"
    } else {
        alert("Not enough cash.")
    }
    ProxyState.vendr[0] = vendr
  }

  buyChips() {
    let vendr = ProxyState.vendr[0]
    if (vendr.cash >= 1.00) {
        vendr.chips += 1
        vendr.cash -= 1.00
        vendr.lastItem = "Chips"
    } else {
        alert("Not enough cash.")
    }
    ProxyState.vendr[0] = vendr
  }
}

export const vendrService = new VendrService();

