<!--

// -- iniciamos la variable del número de veces encriptada
var as=0;
// -- creamos la función para la Encriptación
function codificar()
{
codigo = document.form.texto.value;
if (codigo)
{
document.form.texto.value='Encriptando.... un momento por favor!'; // -- Mensaje en la caja de texto
setTimeout("compilar()",1500); // -- Tiempo que muestra el mensaje 1,5 segundos
}
// -- Pulsamos Encriptar con la caja de texto vacia
else alert('Antes de clicar em criptografar, você deve escrever o código HTML') // -- Mensaje de aviso de caja vacia
}
// -- Creamos la función que escribe el código en la caja de texto
function compilar()
{
document.form.texto.value='';
compilado=escape(codigo);
document.form.texto.value="<script>\n<!--\ndocument.write(unescape(\""+compilado+"\"));\n//-->\n<\/script>";
// -- Averiguamos el número de veces que ha sido encriptada
as++;
if (as=1) alert("Página encriptada!"); // -- Si es la primera encriptación
else alert("Página encriptada "+as+" veces!"); // -- Si se ha encriptado más de una vez
}
// -- Creamos la función de selección del texto en la caja
function seleccionar()
{
if(document.form.texto.value.length>0)
{
document.form.texto.focus();
document.form.texto.select();
}
else alert('No hay nada para seleccionar') // -- Mensaje si la caja de texto esta vacia
}
// -- Creamos la función de previsualización en una ventana nueva
function previsualizar()
{
if(document.form.texto.value.length>0)
{
previo=window.open("","Previsualizar","scrollbars=1,menubar=1,status=1,width=640,height=320,left=100,top=100"); // -- Crea la ventana, las medidas son editables
previo.document.write(document.form.texto.value);
}
else alert('No hay nada para previsualizar') // -- Mensaje si la caja de texto no contiene ningun código
}
// -- Creamos la función para desencriptar el código
function decompilar()
{
if (document.form.texto.value.length>0)
{
decompilado=unescape(document.form.texto.value);
document.form.texto.value=""+decompilado+"";
}
else alert('No hay nada para desencriptar') // -- Mensaje si la caja de texto no contiene ningun código
}
// Final del script
// -->
