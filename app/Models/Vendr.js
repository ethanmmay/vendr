export default class Vendr {
    constructor({cash, candy, soda, chips, lastItem = "No Items Purchased"}) {
        this.cash = cash
        this.candy = candy
        this.soda = soda
        this.chips = chips
        this.lastItem = lastItem
    }
}
