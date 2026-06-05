let datos; //lista de objetos.

async function obtenerDatosSheets(){
    const url="https://docs.google.com/spreadsheets/d/1uPImOQJ1RJRv4Bl7ovHHQoestkBOG6GbnV0MUdh_414/gviz/tq?tqx=out.json&gid=0"

    const res= await fetch(url);
    const text= await res.text();

    //Limpiar wrapper de Google.
    const jsonString= text.replace("/*O_o*/", "")
    .replace("google.visualization.Query.setResponse(", "")
    .slice(0, -2);

    const json= JSON.parse(jsonString);
    
    //Convertir rows + cols -> array de objetos

    return json.table.rows.map(row =>{
        const obj={};

        row.c.forEach((cell, i)=>{
            //label es el nombre de la columna de Google Sheets:
            //ejemplo ("Id", "nombre", "Descripcion")
            //se usa como clave del objeto para construir un
            //json legible.
            obj[json.table.cols[i].label] = cell ? cell.v: null;
        });
        return obj;
    });
}

async function main() {
    try{
        datos=await obtenerDatosSheets();

        console.clear();
        console.log(datos);
    }catch(err){
        console.error("Error: ", err);
    }
}
setInterval(main, 5000);
main();