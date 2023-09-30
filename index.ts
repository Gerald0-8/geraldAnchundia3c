import { Empleadito } from "./empleado";
import { Estudiantito } from "./estudiante";
import { Personita } from "./persona";
import { PersonalDeServicio } from "./personalservicio";
import { Profesorito } from "./profesor";
const persona = new Personita("Gerald", "Anchundia", 120310230, "Soltero");
const estudiante = new Estudiantito("Paul", "Alcivar", 2323232332, "Solterito", "2do");
const empleado = new Empleadito("Gerald", "Yuted", 1319239293, "Soltero", 2000, 69);
const profesor = new Profesorito("Mike", "Machuca", 2939239293,"Casado", 2019, 25, "Digital");
const personalDeServicio1 = new PersonalDeServicio("Armando", "Casas", 782282822,"Casado", 2015, 40, "Limpieza");
console.log(persona.ver());
persona.cambiarEstadoCivil("casado")
console.log(persona.ver());
persona.cambiarEstadoCivil("divorciado")
console.log(persona.ver());
persona.cambiarEstadoCivil("casado")
console.log(persona.ver());
persona.cambiarEstadoCivil("viudo")
console.log(persona.ver());
persona.cambiarEstadoCivil("unión libre")
console.log(persona.ver());
estudiante.MatriculacionNuevoCurso("6to")
console.log(estudiante.ver());
estudiante.MatriculacionNuevoCurso("3ero")
console.log(estudiante.ver());
console.log(empleado.ver());
empleado.cambiarDespacho(23);
console.log(empleado.ver());
console.log(profesor.ver());
profesor.cambiarDepartamento("Matematicas")
console.log(profesor.ver());
console.log(personalDeServicio1.ver());
personalDeServicio1.cambiarSeccion("PARANINFO")
console.log(personalDeServicio1.ver());