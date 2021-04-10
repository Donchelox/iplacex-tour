var scrollMenu = document.getElementById("scroll-menu");
var aSky = document.querySelector('a-sky');

function toggleSiderbarMenu(){
    document.getElementById("sidebar-menu").classList.toggle('cerrar');
    document.getElementById("boton-volver").classList.toggle('d-none');
}
function toggleCloseSiderbar(){
    document.getElementById("cerrar").classList.toggle('d-none');
    
}
/*function sedeCopiapo(){
    window.location.replace("sede/sede-copiapo/galeria/index.html");
}
function sedeSantiago(){
    window.location.replace("sede/sede-santiago/galeria/index.html");
}
function sedeTalca(){
    window.location.replace("sede/sede-talca/galeria/index.html");
}
function ctecArica(){
    window.location.replace("ct-arica/galeria/index.html");
}
function ctecAntofagasta(){
    window.location.replace("ct-antofagasta/galeria/index.html");
}
function ctecLaSerena(){
    window.location.replace("ct-laserena/galeria/index.html");
}
function ctecValparaiso(){
    window.location.replace("ct-valparaiso/galeria/index.html");
}
function ctecRepublica(){
    window.location.replace("ct-santiago/galeria/index.html");
}
function ctecTemuco(){
    window.location.replace("ct-temuco/galeria/index.html");
}
function ctecConcepcion(){
    window.location.replace("ct-concepcion/galeria/index.html");
}
function ctecPuertoMontt(){
    window.location.replace("ct-puertomontt/galeria/index.html");
}
function ctecPuntaArenas(){
    window.location.replace("ct-puntaarenas/galeria/index.html");
}
function centrosTecnologicos(){
    window.location.replace("sede/ctec.html");
}*/
function regresarMenu(){
    scrollMenu.removeAttribute('class');
}
function sedesCTEC(){
    scrollMenu.removeAttribute('class');
    scrollMenu.classList.toggle('cte-active');
}

function volver360(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
}

// 360 sede santiago
function sedeSantiago1(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/sede-talca/360/sede_talca_01.jpg');
}
function sedeSantiago2(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/sede-talca/360/sede_talca_01.jpg');
}
function sedeSantiago3(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/sede-talca/360/sede_talca_01.jpg');
}

// 360 sede Copiapo
function sedeCopiapo1(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/sede-copiapo/360/sede_copiapo_01.jpg');
}
function sedeCopiapo2(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/sede-copiapo/360/sede_copiapo_01.jpg');
}
function sedeCopiapo3(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/sede-copiapo/360/sede_copiapo_01.jpg');
}

// 360 sede Talca
function sedeTalca1(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/sede-talca/360/sede_talca_01.jpg');
}
function sedeTalca2(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/sede-talca/360/sede_talca_01.jpg');
}
function sedeTalca3(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/sede-talca/360/sede_talca_01.jpg');
}


// 360 Ctec Antofagasta
function ctecAntofagasta1(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/ct-antofagasta/360/centro_antofagasta_01.jpg');
}
function ctecAntofagasta2(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/ct-antofagasta/360/centro_antofagasta_02.jpg');
}
function ctecAntofagasta3(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/ct-antofagasta/360/centro_antofagasta_03.jpg');
}

// 360 Ctec Arica
function ctecArica1(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/ct-arica/360/centro_arica_01.jpg');
}
function ctecArica2(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/ct-arica/360/centro_arica_02.jpg');
}
function ctecArica3(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/ct-arica/360/centro_arica_03.jpg');
}

// 360 Ctec Concepción
function ctecConcepcion1(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/ct-concepcion/360/centro_concepcion_01.jpg');
}
function ctecConcepcion2(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/ct-concepcion/360/centro_concepcion_02.jpg');
}

// 360 Ctec Punta Arenas
function ctecPuntaArenas1(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/ct-puntaarenas/360/centro_punta_arenas_01.jpg');
}
function ctecPuntaArenas2(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/ct-puntaarenas/360/centro_punta_arenas_02.jpg');
}
function ctecPuntaArenas3(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/ct-puntaarenas/360/centro_punta_arenas_03.jpg');
}

// 360 Ctec Republica
function ctecRepublica1(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/ct-santiago/360/centro_republica_01.jpg');
}
function ctecRepublica2(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/ct-santiago/360/centro_republica_02.jpg');
}
function ctecRepublica3(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/ct-santiago/360/centro_republica_03.jpg');
}

// 360 Ctec Temuco
function ctecTemuco1(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/ct-temuco/360/centro_temuco_01.jpg');
}
function ctecTemuco2(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/ct-temuco/360/centro_temuco_02.jpg');
}
function ctecTemuco3(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/ct-temuco/360/centro_temuco_03.jpg');
}

// 360 Ctec Valparaiso
function ctecValparaiso1(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/ct-valparaiso/360/centro_valparaiso_01.jpg');
}
function ctecValparaiso2(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/ct-valparaiso/360/centro_valparaiso_02.jpg');
}
function ctecValparaiso3(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/ct-valparaiso/360/centro_valparaiso_03.jpg');
}
function ctecValparaiso4(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/ct-valparaiso/360/centro_valparaiso_04.jpg');
}

// 360 Ctec puerto montt
function pMontt1(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/ct-puertomontt/360/centro_puertomontt_01.jpg');
}
function pMontt2(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/ct-puertomontt/360/centro_puertomontt_02.jpg');
}
function pMontt3(){
    document.getElementById("galeria-miniaturas").classList.toggle('d-none');
    document.getElementById("recorrido-360").classList.toggle('d-none');
    aSky.setAttribute('src', '../../../img/sedes/ct-puertomontt/360/centro_puertomontt_03.jpg');
}