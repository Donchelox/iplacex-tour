var scrollMenu = document.getElementById("scroll-menu");
var aSky = document.querySelector('a-sky');

function toggleSiderbarMenu(){
    document.getElementById("sidebar-menu").classList.toggle('cerrar');
}
function toggleCloseSiderbar(){
    document.getElementById("cerrar").classList.toggle('d-none');
}
function centrosTecnologicos(){
    window.location.replace("sede/ct-puertomontt/360/puertomontt-1.html");
}
function regresarMenu(){
    scrollMenu.removeAttribute('class');
}
function sedesCTEC(){
    scrollMenu.removeAttribute('class');
    scrollMenu.classList.toggle('administracion-active');
}

function volver360(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
}

function pMontt1(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/ct-puertomontt/360/R0010756.jpg');
}
function pMontt2(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/ct-puertomontt/360/R0010756.jpg');
}
function pMontt3(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', 'https://donchelox.github.io/ipchile-360/img/escuelas/administracion/taller-aplicaciones-diseno-2dy3d/republica/360/diseno-republica01.jpg');
}