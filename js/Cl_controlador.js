export default class Cl_controlador {
    constructor(vista, modelo) {
        this.vista = vista;
        this.modelo = modelo;
    }
    procesarArticulo() {
        this.modelo.procesarArticulo(this.vista.procesarArticulo());
        this.vista.reportarArticulo(
            this.modelo.totalGanancia()
        );
    }
}