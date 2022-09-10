alert(`Bienvenido a Grafcars`);

class Auto{
    constructor(id,marca, modelo, anio, km, condicion, color, precio){
        this.id = id
        this.marca = marca
        this.modelo = modelo
        this.anio = parseInt(anio)
        this.km = parseFloat(km)
        this.condicion = condicion
        this.color = color
        this.precio = parseFloat(precio)
        this.vendido = false
    }
}

const stock = []

stock.push(new Auto("1", "Ford", "Raptor", "2022", "12000", "Buena", "Azul", "12.000.000"))
stock.push(new Auto("2", "Chevrolet", "S10", "2020", "60000", "Buena", "Azul", "12.000.000"))
stock.push(new Auto("3", "Ford", "Raptor", "2022", "12.000", "Buena", "Azul", "12.000.000"))

function nuevoAuto(){
    let nuevaMarca = prompt(`Ingrese marca`)
    let nuevomModelo = prompt (`Ingrese modelo`)
    let nuevoAnio = prompt (`Ingrese año`)
    let nuevoKM = parseInt( prompt (`Ingrese KM`))
    let nuevaCondicion = prompt (`Ingrese condicion`)
    let nuevaColor = prompt (`Ingrese color`)
    let nuevoPrecio = prompt (`Ingrese precio`)
    let autoIngresado = new Auto (stock.length+1, nuevaMarca, nuevomModelo, nuevoAnio, nuevoKM, nuevaCondicion, nuevaColor, nuevoPrecio)
    stock.push(autoIngresado)
    console.log(stock)
}
let ingresarAutoPreg = prompt (`Desea ingresar un auto?`)

do {
    nuevoAuto()
    ingresarAutoPreg = prompt(`Desea seguir ingresando otro auto? responda con si o no`)
    if (ingresarAutoPreg.toLocaleLowerCase == `no`) {
        break
    }
} while (ingresarAutoPreg.toLowerCase == `si`);
