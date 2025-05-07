
document.addEventListener("DOMContentLoaded", function() {
   const text = "Hola, soy Afia Zafar, especialista en Traducción y Desarrollo Web.";
   let i = 0;
   const typing = () => {
     if (i < text.length) {
       document.getElementById("typing-text").innerHTML += text.charAt(i);
       i++;
       setTimeout(typing, 70);
     }
   };
   typing();
});

document.addEventListener("DOMContentLoaded", function() {
  // Configura todos los botones "Ver más"
  document.querySelectorAll('.read-more-btn').forEach(button => {
    button.addEventListener('click', function() {
      const card = this.closest('.card');
      const textContent = card.querySelector('.text-content');
      
      // Alternar la clase expanded
      textContent.classList.toggle('expanded');
      
      // Cambiar el texto del botón
      this.textContent = textContent.classList.contains('expanded') ? 'Ver menos' : 'Ver más';
    });
  });
});

