$(document).ready(function(){
    $('.flash').fadeToggle(2000,function(){
        $(this).fadeToggle(2000);
        $(this).fadeToggle(2000);
        $(this).fadeToggle(2000);
        $(this).fadeToggle(2000);
        $(this).fadeToggle(2000);
        $(this).fadeToggle(2000);
        $(this).fadeToggle(2000);
        $(this).fadeToggle(2000);
        $(this).fadeToggle(2000);
        $(this).fadeToggle(2000);
    })
})

function mostrarEspacioP(){
    $('.logo1').fadeOut(2000);
    $('.botonInicio').fadeToggle(2000);
    $('.Entrada').slideToggle(2000);
    $('.accion').trigger('play');
}

function espacioPlayeras(){
    $('.espacioPlayeras').css({bottom: '0%'}); 
    $('.espacioServicios').css({bottom:'-100%'}); 
}

function espacioTazas(){
    $('.espacioTazas').css({bottom: '0%'}); 
    $('.espacioServicios').css({bottom:'-100%'}); 
}

function espacioGorras(){
    $('.espacioGorras').css({bottom: '0%'}); 
    $('.espacioServicios').css({bottom:'-100%'}); 
}

function espacio_compracasa(){
    $('.espacio_compracasa').css({bottom: '0%'}); 
    $('.espacioServicios').css({bottom:'-100%'}); 
}

function espacio_preventa(){
    $('.espacio_preventa').css({bottom: '0%'}); 
    $('.espacioServicios').css({bottom:'-100%'}); 
}

function espacio_rentacasa(){
    $('.espacio_rentacasa').css({bottom: '0%'}); 
    $('.espacioServicios').css({bottom:'-100%'}); 
}

function espacio_encuentrainquilino(){
    $('.espacio_encuentrainquilino').css({bottom: '0%'}); 
    $('.espacioServicios').css({bottom:'-100%'}); 
}

function espacio_vendecasa(){
    $('.espacio_vendecasa').css({bottom: '0%'}); 
    $('.espacioServicios').css({bottom:'-100%'}); 
}

function espacio_emprende(){
    $('.espacio_emprende').css({bottom: '0%'}); 
    $('.espacioServicios').css({bottom:'-100%'}); 
}

function espacioCompartir(){
    $('.espacioCompartir').css({bottom: '0%'});
    $('.espacioContacto').css({bottom:'-100%'});
    $('.espacioRedes').css({bottom:'-100%'});  
    $('.espacioServicios').css({bottom:'-100%'});
    $('.espacioConocenos').css({bottom:'-100%'});
    $('.espacioGaleria').css({bottom:'-100%'});     
    $('.espacioUbicacion').css({bottom:'-100%'}); 
    $('.espacioUbicacion2').css({bottom:'-100%'}); 
}

function espacioContacto(){
    $('.espacioContacto').css({display:'block'});
  //  $('.espacioContacto').css({bottom: '0%'});
    $('.espacioCompartir').css({bottom:'-100%'});
  //  $('.espacioRedes').css({bottom:'-100%'}); 
    $('.espacioRedes').css({display:'none'});
    $('.espacioServicios').css({bottom:'-100%'});
    $('.espacioConocenos').css({bottom:'-100%'});
    $('.espacioGaleria').css({bottom:'-100%'});     
    $('.espacioUbicacion').css({bottom:'-100%'}); 
    $('.espacioUbicacion2').css({bottom:'-100%'}); 
}

function espacioPoliticas(){
    $('.espacioPoliticas').css({bottom: '0%'});
    $('.espacioCompartir').css({bottom:'-100%'});
    $('.espacioRedes').css({bottom:'-100%'});  
    $('.espacioServicios').css({bottom:'-100%'});
    $('.espacioConocenos').css({bottom:'-100%'});
    $('.espacioGaleria').css({bottom:'-100%'});     
    $('.espacioUbicacion').css({bottom:'-100%'}); 
    $('.espacioUbicacion2').css({bottom:'-100%'}); 
}

function espacioRedes(){
    $('.espacioRedes').css({display:'block'});
    $('.espacioCompartir').css({bottom:'-100%'});
   // $('.espacioContacto').css({bottom:'-100%'});
    $('.espacioServicios').css({bottom:'-100%'});
    $('.espacioConocenos').css({bottom:'-100%'});
    $('.espacioGaleria').css({bottom:'-100%'});     
    $('.espacioUbicacion').css({bottom:'-100%'}); 
    $('.espacioUbicacion2').css({bottom:'-100%'}); 
   // $('.espacioRedes').css({bottom:'0%'});   
    $('.espacioContacto').css({display:'none'});

}

function espacioServicios(){
    $('.espacioCompartir').css({bottom:'-100%'});
    $('.espacioContacto').css({bottom:'-100%'});
    $('.espacioRedes').css({bottom:'-100%'});  
    $('.espacioGaleria').css({bottom:'-100%'}); 
    $('.espacioUbicacion').css({bottom:'-100%'});
    $('.espacioUbicacion2').css({bottom:'-100%'});
    $('.espacioServicios').css({bottom:'0%'});
}
/*---sevicios-----*/
function ServiciosImpresion(){ 
    $('.ServiciosImpresion').css({bottom:'0%'});  
}
function ServiciosDiseñoGrafico(){ 
    $('.ServiciosDiseñoGrafico').css({bottom:'0%'});  
}
function ServiciosInteriorismo(){ 
    $('.ServiciosInteriorismo').css({bottom:'0%'});  
}
function ServiciosDisIndustrial(){ 
    $('.ServiciosDisIndustral').css({bottom:'0%'});  
}
function ServiciosIlustracion(){ 
    $('.ServiciosIlustracion').css({bottom:'0%'});  
}
function ServiciosStands(){ 
    $('.ServiciosStands').css({bottom:'0%'});  
}
/*---fin  sevicios-----*/
/*------------------Galeriasevicios-------------------------------------*/
function GalIlustracion(){ 
    $('.GalIlustracion').css({bottom:'0%'});  
}
function GalInteriorismo(){ 
    $('.GalInteriorismo').css({bottom:'0%'});  
}
function GalDisenoIndustrial(){ 
    $('.GalDisenoIndustrial').css({bottom:'0%'});  
}
function GalStands(){ 
    $('.GalStands').css({bottom:'0%'});  
}
function GalDisenoGrafico(){ 
    $('.GalDisenoGrafico').css({bottom:'0%'});  
}
function GalImpresion(){ 
    $('.GalImpresion').css({bottom:'0%'});  
}

/*--------------------------------------fin de galeria sevicios-----------------*/

/*-------------------------------------- sevicios impresion --------------------*/
function ServiciosOffset(){ 
    $('.ServiciosOffset').css({bottom:'0%'});  
}
function ServiciosEcosolvente(){ 
    $('.ServiciosEcosolvente').css({bottom:'0%'});  
}
function ServiciosSerigrafia(){ 
    $('.ServiciosSerigrafia').css({bottom:'0%'});  
}
function ServiciosCama(){ 
    $('.ServiciosCama').css({bottom:'0%'});  
}
function ServiciosLatex(){ 
    $('.ServiciosLatex').css({bottom:'0%'});  
}
function ServiciosCorte(){ 
    $('.ServiciosCorte').css({bottom:'0%'});  
}
/*-------------------------------------- fin sevicios de impresion -----------------*/



function espacioConocenos(){
    $('.espacioCompartir').css({bottom:'-100%'});
    $('.espacioContacto').css({bottom:'-100%'});
    $('.espacioRedes').css({bottom:'-100%'});  
    $('.espacioGaleria').css({bottom:'-100%'});     
    $('.espacioUbicacion').css({bottom:'-100%'});
    $('.espacioUbicacion2').css({bottom:'-100%'}); 
    $('.espacioConocenos').css({bottom:'0%'});   
}

function espacioContacto1(){
    $('.espacioCompartir').css({bottom:'-100%'});
    $('.espacioContacto1').css({bottom:'0%'});
    $('.espacioRedes').css({bottom:'-100%'});  
    $('.espacioGaleria').css({bottom:'-100%'});     
    $('.espacioUbicacion').css({bottom:'-100%'});
    $('.espacioUbicacion2').css({bottom:'-100%'}); 
    $('.espacioConocenos').css({bottom:'-100%'});   
}

function servicio_compra(){
    $('.espacioCompartir').css({bottom:'-100%'});
    $('.espacioContacto').css({bottom:'-100%'});
    $('.espacioRedes').css({bottom:'-100%'});  
    $('.espacioGaleria').css({bottom:'-100%'});     
    $('.espacioUbicacion').css({bottom:'-100%'});
    $('.espacioUbicacion2').css({bottom:'-100%'}); 
    $('.espacioConocenos').css({bottom:'0%'});    
}

function espacioGaleria(){
    $('.espacioCompartir').css({bottom:'-100%'});
    $('.espacioContacto').css({bottom:'-100%'});
    $('.espacioRedes').css({bottom:'-100%'});  
    $('.espacioServicios').css({bottom:'-100%'});
    $('.espacioUbicacion').css({bottom:'-100%'}); 
    $('.espacioUbicacion2').css({bottom:'-100%'}); 
    $('.espacioGaleria').css({bottom:'0%'});  

}
function EspacioVideos(){
    $('.espacioCompartir').css({bottom:'-100%'});
    $('.espacioContacto').css({bottom:'-100%'});
    $('.espacioRedes').css({bottom:'-100%'});  
    $('.espacioServicios').css({bottom:'-100%'});
    $('.espacioUbicacion').css({bottom:'-100%'}); 
    $('.espacioUbicacion2').css({bottom:'-100%'}); 
    $('.espacioGaleria').css({bottom:'-100%'});  
    $('.EspacioVideos').css({bottom:'0%'}); 
}
function EspacioTestimonios(){
    $('.espacioCompartir').css({bottom:'-100%'});
    $('.espacioContacto').css({bottom:'-100%'});
    $('.espacioRedes').css({bottom:'-100%'});  
    $('.espacioServicios').css({bottom:'-100%'});
    $('.espacioUbicacion').css({bottom:'-100%'}); 
    $('.espacioUbicacion2').css({bottom:'-100%'}); 
    $('.espacioGaleria').css({bottom:'-100%'});  
    $('.EspacioTestimonios').css({bottom:'0%'}); 
}
function espacioUbicacion(){
    $('.espacioCompartir').css({bottom:'-100%'});
    $('.espacioContacto').css({bottom:'-100%'});
    $('.espacioRedes').css({bottom:'-100%'});  
    $('.espacioServicios').css({bottom:'-100%'});
    $('.espacioGaleria').css({bottom:'-100%'});     
    $('.espacioUbicacion').css({bottom:'0%'});
    $('.espacioUbicacion2').css({bottom:'0%'});
}

function espacioUbicacion2(){
    $('.espacioCompartir').css({bottom:'-100%'});
    $('.espacioContacto').css({bottom:'-100%'});
    $('.espacioRedes').css({bottom:'-100%'});  
    $('.espacioServicios').css({bottom:'-100%'});
    $('.espacioGaleria').css({bottom:'-100%'});     
    $('.espacioUbicacion').css({bottom:'0%'});
}
function CerrarEspacio2(){
      
    $('.espacioGaleria').css({bottom:'-100%'});
    $('.EspacioVideos').css({bottom:'-100%'});
    $('.EspacioTestimonios').css({bottom:'-100%'});
    
   
}
function CerrarServicios(){
      
    $('.ServiciosImpresion').css({bottom:'-100%'});
    $('.ServiciosDiseñoGrafico').css({bottom:'-100%'});
    $('.ServiciosDisIndustral').css({bottom:'-100%'});
    $('.ServiciosInteriorismo').css({bottom:'-100%'});
    $('.ServiciosIlustracion').css({bottom:'-100%'});
    $('.ServiciosStands').css({bottom:'-100%'});

}
function CerrarGaleriaServicios(){

    $('.GalIlustracion').css({bottom:'-100%'});
    $('.GalInteriorismo').css({bottom:'-100%'});
    $('.GalDisenoIndustrial').css({bottom:'-100%'});
    $('.GalStands').css({bottom:'-100%'}); 
    $('.GalDisenoGrafico').css({bottom:'-100%'});
    $('.GalImpresion').css({bottom:'-100%'});
    $('.ServiciosOffset').css({bottom:'-100%'});
    $('.ServiciosEcosolvente').css({bottom:'-100%'});
    $('.ServiciosSerigrafia').css({bottom:'-100%'});
    $('.ServiciosCama').css({bottom:'-100%'});
    $('.ServiciosLatex').css({bottom:'-100%'});
    $('.ServiciosCorte').css({bottom:'-100%'});
}

function cerrarEspacio(){
    $('.espacioCompartir').css({bottom:'-100%'});
   // $('.espacioContacto').css({bottom:'-100%'});
    $('.espacioContacto1').css({bottom:'-100%'});
    $('.espacioContacto').css({display:'none'});
    $('.espacioPoliticas').css({bottom:'-100%'});
    $('.espacioRedes').css({display:'none'}); 
   // $('.espacioRedes').css({bottom:'-100%'});
    $('.espacioServicios').css({bottom:'-100%'});
    $('.espacioConocenos').css({bottom:'-100%'});
    $('.espacioGaleria').css({bottom:'-100%'});
    $('.EspacioVideos').css({bottom:'-100%'});     
    $('.espacioUbicacion').css({bottom:'-100%'}); 
    $('.espacioUbicacion2').css({bottom:'-100%'}); 
    $('.espacioPlayeras').css({bottom:'-100%'});
    $('.espacioTazas').css({bottom:'-100%'});
    $('.espacioGorras').css({bottom:'-100%'});
    $('.espacio_compracasa').css({bottom:'-100%'});
    $('.espacio_preventa').css({bottom:'-100%'});
    $('.espacio_rentacasa').css({bottom:'-100%'});
    $('.espacio_encuentrainquilino').css({bottom:'-100%'});
    $('.espacio_vendecasa').css({bottom:'-100%'});
    $('.espacio_emprende').css({bottom:'-100%'});

    $('.nombre, .cargo').fadeIn(1500, function(){
        $('.fondoBotonesP').fadeOut(500);
    });
}


setInterval('avanzaSlide()',2000);
 
var arrayImagenes = new Array(".img1",".img2",".img3",".img4",".img5",".img6",".img7",".img8",".img9",".img10");
 
var contador = 1;
 
function mostrar(img){
    $(img).ready(function(){                
        $(arrayImagenes[contador]).fadeIn(1500);        
    });
}
 
function ocultar(img){
    $(img).ready(function(){                
        $(arrayImagenes[contador]).fadeOut(1500);       
    });
}
 
function avanzaSlide(){
    ocultar(arrayImagenes[contador]);
    contador = (contador + 1) % 8;
    mostrar(arrayImagenes[contador]);
}

