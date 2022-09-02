/*Ventas: control de tipo de ventas ( landing page, web coorporatica, icommerce) , registrara datos del cliente(nombre ,apellido): se necesita que el sistema responda monto total de las ventas mensuales  , se mostrara el detalle de las ventas efectuadas


*/


function contacto() {
    let apellido=prompt("ingrese apellido").toUpperCase();
    let nombre=prompt("ingrese nombre").toUpperCase();
    
    alert("nuevo proyecto del cliente: apellido: "+apellido+ " nombre: "+nombre);
    
    
    
}   

function servicio() {

    let servicios=parseInt(prompt("Escriba el numero de la opcion seleccionada: 1 landingPage, 2 Cooportiva, 3 Ecomercce "));
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
        alert("Usted eligio una Ecomercce");
        return "Ecomercce";
    }
 }

 function presupuesto(itemsServicio){
    let montoLp=0;
    if(itemsServicio==="LandingPage"){
        montoLp=parseFloat(prompt("ingrese el valor de la landing page"));
        montoLpage=montoLp+montoLpage;
        alert("EL monto de Landing  Page es $: "+ montoLp+" total de su compra $: "+montoLpage);
        return montoLpage;

    }
    
    else 
        
        if (itemsServicio==="Coorporativa") {
            let montoC=0;
            montoC=parseFloat(prompt("ingrese el valor de la WEb cooporativa"));
            montoCooporativa=montoC+montoCooporativa;
            alert("EL monto de la Web Cooportiva es $: " +montoC+" total de su compra $: "+montoCooporativa );
            return montoCooporativa;
        
    }
        else 
            if(itemsServicio==="Ecomercce"){
                let montoE=0;
                montoE=parseFloat(prompt("ingrese el valor de la Ecomercce"));
                montoEcomercce=montoE+montoEcomercce;
                alert("EL monto de la Web Ecomercce es $: " +montoE+ " total de su compra $: " + montoEcomercce);
                return montoEcomercce;
                

        }
            
        
} 
    
function contar(){
    
    cantidadVentas++
    return cantidadVentas;
}

/*AQUI COMIENZA A EJECUTARSE EL PROGRAMA*/

    alert("Control de ventas WEB");
    
    
    var montoLpage=0;
    var montoCooporativa=0;/*para sumar ventas totales del mes de cooporativa*/
    var montoEcomercce=0;/*para sumar ventas totales del mes de icomerce*/
    /*cantidad de ventas por un cliente, controlo que al infgresar un cliente necesite 2 landing page+ 1 cooporativa por ejemplo */
    var cantidadVentas=0;/*cantidad de ventas totales en el mes*/
    var totalVentas=0;
    
    for(let i=1;i<=2;i++){
        

        let venta=prompt("Desea ingresar un nuevo cliente ?,si o no");
        if (venta=="si"){
            contacto();
        }
        let totalCliente=0;
        while(venta==="si"){
            cantidadVentas=contar();
            let itemsServicio="";
            itemsServicio=servicio();
            totalCliente=parseFloat(presupuesto(itemsServicio));
            
            totalVentas=montoLpage+montoCooporativa+montoEcomercce;
           
            venta=prompt("Desea ingresar una nueva venta ?,si o no");
            
            
        }

        alert("total a pagar $: " +totalCliente);

    }
    /*quiero informar esto al finalizar el mes*/
    alert("venta total del mes $: " + totalVentas);
    alert("cantidadad de web vendidas: " + cantidadVentas + " webs")


        
    
        






      

    
    