/*Ventas: control de tipo de ventas ( landing page, web coorporatica, icommerce) , registrara datos del cliente(nombre ,apellido,cbu, celular,mail): se necesita que el sistema responda monto total de las ventas mensuales  , se mostrara el detalle de las ventas efectuadas y de las no concretadas un mensaje de alerta detallando porque no se concreto*/



function contacto(apellido,nombre,cbu,mail,celular,detalle) {
    var apellido=prompt("ingrese apellido").toUpperCase();
    var nombre=prompt("ingrese nombre").toUpperCase();
    var cbu=prompt("ingrese cvu").toUpperCase();
    var mail=prompt("ingrese mail")
    var celular=prompt("ingrese celular");
    var detalle=prompt("detalle nombre del proyecto");
    alert("nuevo proyecto del cliente: apellido: "+apellido+ " nombre: "+nombre);
    
    
    
}   

function servicio() {

    let servicios=parseInt(prompt("Escriba el numero de la opcion seleccionada: 1 landingPage, 2 Cooportiva, 3 Icomercce "));
    if(servicios==1){
        alert("Usted eligio una Landing  Page");
        return "LandingPage";

    }
    
    else if
        (servicios==2){
            alert("Usted eligio una Corporativa");
            return "Coorporativa";

    }
    else if(servicios==3){
        alert("Usted eligio una Icomerce");
        return "Icomerce";
    }
 }

 function presupuesto(itemsServicio){
    if(itemsServicio==="LandingPage"){
        var montoLp=parseFloat(prompt("ingrese el valor de la landing page"));
        montoLpage=montoLp+montoLpage;
        alert("EL monto de Landing  Page es : "+ montoLp);
        return montoLpage;

    }
    
    else 
        if (itemsServicio==="Coorporativa") {
        var montoC=parseFloat(prompt("ingrese el valor de la WEb cooporativa"));
        montoCooporativa=montoC+montoCooporativa;
        alert("EL monto de la Web Cooportiva es: " + montoC);
        return montoCooporativa;
        
    }
        else 
            if(itemsServicio==="Icomerce"){
                var montoI=parseFloat(prompt("ingrese el valor de la Icomercce"));
                alert("EL monto de la Web Cooportiva es: " + montoI);
                return montoIcomerce;
                

        }
            
        
} 
    
function contar(){
    let ventas=ventas+1;
    return ventas;
}

/*AQUI COMIENZA A EJECUTARSE EL PROGRAMA*/

alert("Control de ventas WEB");
 
var cuento=0;/*para conatar las ventas totales de web en 30 dias*/
var montoLpage=0;/*para sumar ventas totales del mes de landing page*/
var montoCooporativa=0;/*para sumar ventas totales del mes de cooporativa*/
var montoIcomerce=0;/*para sumar ventas totales del mes de icomerce*/
var totalCliente=0;/*para sumar ventas totales de web compradas por un cliente, controlo que al infgresar un cliente necesite 2 landing page+ 1 cooporativa por ejemplo */
var itemsServicio="";/*variable que guaradara, landig page, cooporativa, icomerce*/

var apellido="";
var nombre="";
var cbu="";
var mail="";
var celular="";
var detalle="";
var ventasMensuales=0;/*sumara la cantidad total de ventas mensuales por ejemplo me dira vendio 100 web*/
for(let i=1;i<=2;i++){
    

    var venta=prompt("Desea ingresar un nuevo cliente ?,si o no")
    if (venta=="si"){
        contacto(apellido,nombre,cbu,mail,celular,detalle);
    }

    while(venta==="si"){
        
        itemsServicio=servicio();

       
        /*no me esta funcionando esta sumatoria de presupuesto por cliente*/
         totalCliente=totalCliente+parseFloat((presupuesto(itemsServicio)));

        
        
        

        venta=prompt("Desea ingresar una nueva venta ?,si o no")
        
        /*estas lineas no me funcionan, quiero contar ventas totales en el mes, 100 web vendidass por ejemplo */
        /*ventasMensuales=parseInt(contar());*/
        
        
        

        


        
    }

    alert("usted vendio en total $: "+ totalCliente+" $"+ "del cliente: "+apellido);

}
/*quiero informar esto al finalizar el mes*/
alert("usted vendio en total $: ", montoLpage+montoCooporativa+montoIcomerce);
alert("Vendio en el mes: " +ventasMensuales + " webs")


        
    
        






      

    
    