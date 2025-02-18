export default class Cl_vArticulo {
    constructor () {
        this.inCosto = document.getElementById("articuloForm_inCosto");
        this.btGuardar = document.getElementById("articuloForm_btGuardar");
    
        };
    get costo() {
        return +this.inCosto.value;
    };

}