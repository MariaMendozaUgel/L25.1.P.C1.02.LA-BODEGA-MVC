import Cl_articulo from "./Cl_mArticulo.js"
export default class Cl_mBodega {
    constructor() {
        this.acGanancia = 0
    }
    procesarArticulo(a) {
        this.acGanancia = this.acGanancia + a.ganancia()
    }
    totalGanancia() {
        return this.acGanancia
    }
}