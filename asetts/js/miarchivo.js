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

const stock = [{},]

stock.push(new Auto("1", "ford", "raptor", "2022", "12000", "Buena", "Azul", "12.000.000"))
stock.push(new Auto("2", "chevrolet", "s10", "2020", "60000", "Buena", "Azul", "12.000.000"))
stock.push(new Auto("3", "ford", "raptor", "2022", "12.000", "Buena", "Azul", "12.000.000"))

function nuevoAuto(){
    let nuevaMarca = prompt(`Ingrese marca`)
    let nuevomModelo = prompt (`Ingrese modelo`)
    let nuevoAnio = prompt (`Ingrese año`)
    let nuevoKM = parseInt( prompt (`Ingrese KM`))
    let nuevaCondicion = prompt (`Ingrese condicion`)
    let nuevaColor = prompt (`Ingrese color`)
    let nuevoPrecio = prompt (`Ingrese precio`)
    let autoIngresado = new Auto (stock.length, nuevaMarca, nuevomModelo, nuevoAnio, nuevoKM, nuevaCondicion, nuevaColor, nuevoPrecio)
    stock.push(autoIngresado)
    console.log(stock)
}
opcionesPagina()
function opcionesPagina(){
    let nroOpcion = parseInt(prompt (`Ingrese el numero de la opcion que dea usar
                                    1- Ver Catalogo nuestro catalogo de vehiculos
                                    2- Filtrar por modelo
                                    3- Filtrar por marca
                                    4- Filtrar por año
                                    5- Agregar a la venta un vehiculo
                                    6- Comprar un vehiculo 
                                    0- Salir `))
    menuPagina(nroOpcion)
}

function ftrlMdlo(){
    let buscarMdlo = prompt(`Ingrese el modelo de vehiculo a buscar`)
    let busquedaMdlo = stock.filter((book) => book.modelo == buscarMdlo.toLowerCase())
    alert(`En la consola vera los modelos hayados`)
    console.log(busquedaMdlo)
}

function ftrlMarca(){
    let buscarMarca = prompt(`Ingrese la marca del vehiculo a buscar`)
    let busquedaMarca = stock.filter((book) => book.marca == buscarMarca.toLowerCase())
    alert(`En la consola vera los vehiculos de la marca buscada`)
    console.log(busquedaMarca)
}

function ftrlanio(){
    let anioAdelante = prompt (`Ingrese año en adelante del vehiculo que quiere buscar`)
    let busquedaAnio = stock.filter((book) => book.anio >= anioAdelante)
    alert(`En la consola vera los vehiculos encontrados`)
    console.log(busquedaAnio)
}

function comprarAuto(){
    let autoComprar = prompt(`Ingrese el id del vehiculo que quiere comprar`)
    let compraDeAuto = stock.splice(autoComprar, 1)
    console.log(`Felicitaciones, su vehiculo comprado es: `)
    console.log(compraDeAuto)
}

let salir = ``
function menuPagina(opcionesPagina){
    switch (opcionesPagina) {
        case 0:
            alert(`Gracias por visitarnos, vuelva pronto`)
            salir = true
            break;
        
        case 1:
            alert(`En la consola verá nuestro stock actual`)
            console.log(stock)
            break
        
        case 2:
            ftrlMdlo()
            break

        case 3:
            ftrlMarca()
            break

        case 4:
            ftrlanio()
            break
    
        case 5:
            nuevoAuto()
            break
        
        case 6:
            comprarAuto()
            break

        default:
            break;
    }
}

while(salir != true){
    opcionesPagina()
}
 /* Proximo arreglo, en donde dice condicion que no sea la de condicion del vehiculo, sino de si esta vendido o no  */