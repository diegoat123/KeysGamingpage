
    $('#formulario_usuario').validate({
       rules: {
          nombre: {
             required: true,
             minlength: 5,
             maxlength:20
          },
          contraseña: {
             required: true,
             minlength: 8,
             maxlength:20

          },
          confirmar_Contraseña: {
             required: true,
             minlength: 5,
             maxlength:20,
             equalTo: "#contraseña"
          },
          email: {
             required: true,
             email: true
          },
          telefono:{
            required:true,
            number:true,
            min:8,
          },

          agree: "required"
       },
       messages: {           
        nombre: {
             required: "Por favor ingresa tu nombre completo",
             minlength: "Tu nombre debe ser de no menos de 5 caracteres",
             maxlength:"tu nombre deve ser de menos de 20 caracteres"
          },
          contraseña:{
              required:"ingrese una contraseña",
              minlength: "Tu contraseña debe ser de no menos de 8 caracteres",
              maxlength:"tu contraseña deve ser de menos de 20 caracteres"


          },
          confirmar_Contraseña: {
             required: "Ingresa una contraseña",
             minlength: "Tu contraseña debe ser de no menos de 5 caracteres de longitud",
             equalTo: "Por favor ingresa la misma contraseña de arriba"     
          },
          telefono:{
            required:"ingrese un num telefono",
            number:"solo numeros",
            min:"deve tener un minimo de 8 caracteres",
          },
          email: "Por favor ingresa un correo válido",
          agree: "Por favor acepta nuestra política",

       },


    });

$("#enviar").click(function(){
if($("formulario_usuario").valid()==false){
    return;
}

        let nombre = $("#nombre").val()
        let contraseña = $("#contraseña").val()
        let telefono = $("#telefono").val()
})