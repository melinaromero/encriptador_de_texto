function limpiarTextoNoValido(texto) {
    // Verifica si el texto contiene caracteres no permitidos
    const contieneMayusculas = /[A-Z]/.test(texto);
    const contieneAcentos = /[áéíóúüÁÉÍÓÚÜ]/.test(texto);
    const contieneCaracteresEspeciales = /[^a-z\s]/.test(texto);
    
    return !(contieneMayusculas || contieneAcentos || contieneCaracteresEspeciales);
}

function encriptarTexto() {
    
 
    let textarea = document.getElementById("inputTexto").value;
    let texto = textarea;
    
    if (!limpiarTextoNoValido(texto)) {
        alert('El texto contiene caracteres no permitidos.');
        textarea.value = ''; // Limpia el campo de texto
        document.getElementById("textRes").textContent = ''; // Limpia el area de resultado
        return; // rompe la funcion si el texto no es valido
    }else{

    let textoEncriptado= texto
        .replace(/a/gi, "ai")
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");
    
    console.log('Texto encriptado:', textoEncriptado);
    document.getElementById("textRes").textContent = textoEncriptado;
    }

        
}

function desencriptarTexto(){
    let textarea = document.getElementById("inputTexto").value;
    let texto = textarea;
    
    if (!limpiarTextoNoValido(texto)) {
        alert('El texto contiene caracteres no permitidos.');
        document.getElementById("textRes").textContent = ''; // Limpia el area de resultado
        return; // Se rompe la funcion si el texto no es valido
    }else{

    let textoDesencriptado = textarea
         .replace(/ai/gi, "a")
         .replace(/enter/gi, "e")
         .replace(/imes/gi, "i")
         .replace(/ober/gi, "o")
         .replace(/ufat/gi, "u");

    console.log('Texto desencriptado:', textoDesencriptado); 
    document.getElementById("textRes").textContent = textoDesencriptado;
    }

}

function copiarTexto() {
    const textToCopy = document.getElementById("textRes").textContent;
    navigator.clipboard.writeText(textToCopy)
     
    .then(() => {
        console.log('Texto copiado al portapapeles');
        alert('Texto copiado al portapapeles'); 
    })
    .catch(err => {
        console.error('Error al copiar al portapapeles: ', err);
    });
}


document.querySelector(".botonCopiar").addEventListener("click", copiarTexto);
document.querySelector('.botonEncriptar').addEventListener('click', encriptarTexto);
document.querySelector('.botonDesencriptar').addEventListener('click', desencriptarTexto);