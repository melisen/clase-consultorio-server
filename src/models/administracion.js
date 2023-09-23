const fs = require('fs');

class Administracion{
    constructor(ruta){
        this.ruta = ruta
    }


    async guardarNuevo() {
        try {
          const arrObjetos = await this.verTodos();
          let _id;
          if (!arrObjetos || !arrObjetos.length) {
            _id = 1;
          } else {
            arrObjetos.forEach((ob) => {
              _id = ob._id;
            });
            _id = _id + 1;
          }
          const guardar = arrObjetos.length > 0  ? [...arrObjetos, { ...objProd, _id }] : [{ ...objProd, _id }];
          const guardado = await fs.promises.writeFile(this.ruta, JSON.stringify(guardar), { encoding: "utf-8" });
        } catch (error) {
          console.log("error", "no se pudo guardar");
        }
      }

    async  verTodos(){
        try {
            const objetos = await fs.promises.readFile(this.ruta, "utf-8");            
              const res = await JSON.parse(objetos);
              return res;
              //esto funciona            
          } catch (err) {
            "no se pudo leer el archivo"
          }
        }
        
        async  verSegunId(id){
          const todos = await this.verTodos()  
          const elegido = todos.find(item => item.id == id)
          return elegido;
        }
        
}


module.exports = Administracion;