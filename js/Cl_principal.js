import Cl_vBodega from "./Cl_vBodega.js";
import Cl_mBodega from "./Cl_mBodega.js";
import Cl_controlador from "./Cl_controlador.js";

export default class Cl_principal {
    constructor() {
        let vista = new Cl_vBodega()
        let modelo = new Cl_mBodega()
        let controlador = new Cl_controlador(vista, modelo);
        vista.controlador = controlador;
    }
}


