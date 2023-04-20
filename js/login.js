document.getElementById('btn-submit').addEventListener('click',function(){
   const emailField = document.getElementById('user-email');
   const email = emailField.value;
  
   const passwordField = document.getElementById('user-password');
   const password = passwordField.value;
   

   if(email === 'aichbishwajit75@gmail.com' && password === '1234509876'){
    window.location.href = 'bank.html';
   }
   else{
    alert('Who Are You? Are You Hacker! Please Do not do it.Its My Property!!!');
   }
})