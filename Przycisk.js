const button_element=document.querySelectorAll('button')
button_element.forEach(button => {
  button.addEventListener('click', function() {
      window.location.href=("strona główna.html")
      
  });
});
