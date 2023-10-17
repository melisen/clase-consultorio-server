const fs = require("fs");
//la ruta del archivo de persistencia siempre es respecto de la ubicación de server.js
const rutaArchivoPersistencia = "./src/models/pacientes.json"
class Pacientes{
        constructor() {
            this.ruta = rutaArchivoPersistencia;
          }

          async getAll() {         
             try {
            const objetos = await fs.promises.readFile(this.ruta, "utf-8");
            if(!objetos){
              console.log("No se pudo obtener")
            }            
              const res = await JSON.parse(objetos);
              return res;     
          } catch (err) {
            console.log("Falló getAll()", err)
          }
            
          }


          async saveNew(obj) {
            try {
              const objs = await this.getAll();
              let existe = objs.find((item)=> item.nombre ===obj.nombre && item.apellido === obj.apellido)
              if(existe){
                console.log("Este paciente ya existe en el archivo")
              }else{
                let id;
                if (!objs || !objs.length) {
                  id = 1;
                } else {
                  objs.forEach((ob) => {
                    id = ob.id;
                  });
                  id = id + 1;
                }
                const guardar = objs.length > 0 ? [...objs, { ...obj, id }] : [{ ...obj, id }];
                const guardado = await fs.promises.writeFile(
                  this.ruta,
                  JSON.stringify(guardar),
                  { encoding: "utf-8" }
                );
                return id
              }

            } catch (error) {
              console.log("no se pudo guardar");
            }
          }

          async findById(id) {
            try {
              const todos = await this.getAll();
              const buscado = todos.find((ob) => ob.id == id);
              if (buscado) {
                return buscado;
              } 
            } catch (err) {
              return"no se pudo buscar por id";
            }
          }
          /*
          async updateOffice(id, consultorio){
            try {
                const medico = await this.findById(id);
                medico.consultorio = consultorio;
                const todos = await this.getAll();
                const quitarObj = todos.filter((item) => item.id != id);
                const newArr = [...quitarObj, medico];
                await fs.promises.writeFile(this.ruta, JSON.stringify(newArr), {
                  encoding: "utf-8",
                });
                return medico;
              } catch (error) {
                console.log("error");
              }
          }
          */

          async deleteById(id) {
            try {
              const objs = await this.getAll();
              const obj = objs.find((item) => item.id == id);
              if (!obj) {
                return console.log("No se encontró qué borrar");
              } else {
                const newArr = objs.filter((ob) => ob.id != id);
                const eliminar = await fs.promises.writeFile(
                  this.ruta,
                  JSON.stringify(newArr),
                  { encoding: "utf-8" }
                );
                return id;
              }
            } catch (err) {
              console.log( "no se pudo eliminar");
            }
          }

}

module.exports = {Pacientes}