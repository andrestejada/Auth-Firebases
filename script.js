
//Registrar Usuario//
const signUpForm = document.querySelector('#signup-form')

signUpForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    
    const email = document.querySelector('#signup-email').value
const password = document.querySelector('#signup-password').value

console.log(email,password)

firebase.auth().createUserWithEmailAndPassword(email, password)
.catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...



  }); 
  console.log('se envio')
  signUpForm.reset()
  $('#modalRegistrar').modal('hide')
})

// Iniciar Seccion 


const signInForm = document.querySelector('#signIn-form')

signInForm.addEventListener('submit',(e)=>{
    e.preventDefault()
    
const email = document.querySelector('#signIn-email').value
const password = document.querySelector('#signIn-password').value

console.log(email,password)

firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;

    console.log(errorMessage)
    console.log(errorCode)


    
    // ...
  });
  console.log('inicio seccion')
  signUpForm.reset()
    $('#modalIngresar').modal('hide')
})




