import { Empleadito } from "./empleado";
export class Profesorito extends Empleadito {
  private _departamento: string;

  constructor(nombre: string,apellido: string,numeroidentificacion: number,estadoCivil: string,
    anioIncorporacion: number,numerodedespacho: number,departamento: string) 
 {
    super(nombre, apellido, numeroidentificacion, estadoCivil, anioIncorporacion, numerodedespacho);
    this._departamento = departamento;
  }

  public get departamento(): string {
    return this._departamento;
  }

  public cambiarDepartamento(departamento: string) {
    this._departamento = departamento;
  }

  ver(): string {
    return `El profesor ${this.nombre} ${this.apellido} de cédula ${this.numeroidentificacion} 
    está en el departamento de ${this.departamento}`;
  }
  }
