$('#formulario_juego').validate({
    rules: {
        nombreJuego: {
          required: true,
          minlength: 5,
          maxlength:30
       },
       descripcionJuego: {
          required: true,
          minlength: 20,
          maxlength:500

       },
       urlJuego: {
          required: true,
          minlength: 10,
       },
       compañia: {
          required: true,
          minlength:2,
          max:100
       },

       clasificacion: "required"
    },
    messages: {           
        nombreJuego: {
          required: "Por favor ingresa tu nombre completo",
          minlength: "Tu nombre debe ser de no menos de 8 caracteres",
          maxlength:"tu nombre deve ser de menos de 20 caracteres"
       },
       descripcionJuego:{
           required:"ingrese una contraseña",
           minlength: "su descripcion debe ser de no menos de 20 caracteres",
           maxlength:"maximo de 500 caracteres alcanzado "


       },
       clasificacion: {
          required: "Ingresa una clasificacion",
       },

    },


 });

$("#enviarJuego").click(function(){
if($("formulario_juego").valid()==false){
 return;
}

     let nombre = $("#nombreJuego").val()
     let descripcionJuego = $("#descripcionJuego").val()
     let compañia = $("#compañia").val()
     let clasificacion =$("#clasificacion")

})


