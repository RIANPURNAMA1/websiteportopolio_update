var dark = document.getElementById('dark');
var nav = document.getElementById('nav');
var span = document.getElementById('span');
var moon = document.querySelector('.fa-moon');


// dark mode
var dark = document.getElementById('icondark');
dark.addEventListener('click', function(){
  document.body.style='transition:1s;';
  document.body.classList.toggle('darkmode')
   nav.classList.toggle('darkmode')
   nav.style.transition='all 1s';
   dark.classList.toggle('fa-sun')
   dark.classList.toggle('fa-moon')

})

function  toggleGreeting(){
  var greetingElement = document.getElementById("greeting");
  var currentGreeting = greetingElement.textContent;

  if (currentGreeting === "Selamat Malam") {
    greetingElement.textContent = "Selamat Siang";
  } else {
    greetingElement.textContent = "Selamat Malam";
  }
}



// kirim pesan ke wa
document.getElementById('whatsapp-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const phone = '6282118364415'; // Nomor tujuan WhatsApp
  const nama = encodeURIComponent(document.getElementById('nama').value);
  const email = encodeURIComponent(document.getElementById('email').value);
  const message = encodeURIComponent(document.getElementById('message').value);
  
  const whatsappURL = `https://api.whatsapp.com/send?phone=${phone}&text=${nama}&email=${email}&${message}`;
  
  window.open(whatsappURL, '_blank');
});

