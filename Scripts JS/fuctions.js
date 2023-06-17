function mostrarLote2(){
    document.getElementById('lote1').style.display='none';
    document.getElementById('lote2').style.display='block';
}
function mostrarLote1(){
    document.getElementById('lote2').style.display='none';
    document.getElementById('lote1').style.display='block';
}
function mostrarLote4(){
    document.getElementById('lote3').style.display='none';
    document.getElementById('lote4').style.display='block';
}
function mostrarLote3(){
    document.getElementById('lote4').style.display='none';
    document.getElementById('lote3').style.display='block';
}

const creacionResena = document.getElementById('crearResena');

creacionResena.addEventListener('submit', (event) => {
    event.preventDefault();
    var libro = document.getElementById('libro').value
    var autor_libro = document.getElementById('autor_libro').value
    var fecha_culminacion = document.getElementById('fecha_culminacion').value
    var calificacion = document.getElementById('calificacion').value
    var resena = document.getElementById('resena').value

    var cr = {libro: libro, autor_libro: autor_libro, fecha_culminacion:fecha_culminacion, calificacion:calificacion, resena:resena}
    var crJSON = JSONstringify(cr)
    console.log(crJSON)

})