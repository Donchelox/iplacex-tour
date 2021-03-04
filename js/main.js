var scrollMenu = document.getElementById("scroll-menu");


function toggleSiderbarMenu(){
    document.getElementById("sidebar-menu").classList.toggle('cerrar');
}
function toggleCloseSiderbar(){
    document.getElementById("cerrar").classList.toggle('d-none');
}
function centrosTecnologicos(){
    window.location.replace("sedes/ct-puertomontt/360/puertomontt-1.html");
}
function regresarMenu(){
    scrollMenu.removeAttribute('class');
}
function sedesCTEC(){
    scrollMenu.removeAttribute('class');
    scrollMenu.classList.toggle('administracion-active');
}