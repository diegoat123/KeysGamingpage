
$('#formulario_usuario').validate({
   rules: {
      nombre: {
         required: true,
         minlength: 5,
         maxlength:20
      },
      numero: {
         required: true,
         minlength: 15,
         maxlength:20

      },
      cvv: {
         required: true,
         maxlength: 5,

      },
      fecha: {
         required: true,

      },
      
   },
   messages: {           
    nombre: {
         required: "Por favor ingresa tu nombre completo",
         minlength: "Tu nombre debe ser de no menos de 5 caracteres",
         maxlength:"tu nombre deve ser de menos de 20 caracteres"
      },
      numero:{
          required:"ingrese una contraseña",
          minlength: "Tu contraseña debe ser de no menos de 15 caracteres",
          maxlength:"tu contraseña deve ser de menos de 16 caracteres"


      },
      cvv: {
         required: "Ingresa una cvv",   
      },
      fecha:{
        required:"ingrese un num fecha",
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