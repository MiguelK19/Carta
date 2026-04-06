let titulo = document.getElementById("titulo");
let boton = document.getElementById("boton");
let parrafo = document.getElementById("carta");
let pregunta_2 = document.getElementById("pregunta");
let cancion = document.getElementById("videoBtn");
let btn = document.getElementById("videoBtn");
const imagen = document.getElementById("stolasImg");
let contenedor = document.getElementsByClassName("contenedorCarta");

boton.addEventListener("click", mostrarCarta);

function mostrarCarta(){
    parrafo.textContent = `**Carta para Ru-Ru 🤍**

Nunca imaginé que en mi vida aparecería alguien tan especial, tan única y tan increíble como tú. ¿Sabes? Todo empezó de una forma tan simple… en aquel team con Suqi, entre Amphibia y Toh, roleando algo random (Anne x Yunan… sí, todavía me da risa pensarlo 😅). Pero sin darme cuenta, entre mensajes y momentos, empezamos a construir algo mucho más grande.

Luego te fuiste, y por un tiempo no supe nada de ti… hasta que volviste. Y ese día, cuando dijiste que querías conocerme, algo cambió. Porque nunca pensé que alguien pudiera interesarse así por mí, de esa manera tan sincera.

Desde entonces, no hemos dejado de hablarnos, de apoyarnos, de darnos cariño… y en todo ese proceso te convertiste en alguien indispensable para mí. Alguien que llegó sin avisar, pero que ahora no puedo imaginar que se vaya.

Ruy, desde que entraste en mi vida, la hiciste más bonita. Más feliz. Más viva.
Eres la razón por la que quiero seguir adelante, incluso cuando las cosas se ponen difíciles, incluso cuando mis propios pensamientos me frenan. Porque si tú estás, todo parece tener más sentido.

Y sí… también están esos momentos nuestros, esos en los que reímos, jugamos, nos decimos cosas que nos hacen sonrojar… esos momentos que son tan nuestros y que guardo como pequeños tesoros. Incluso las canciones que me has dedicado… no tienes idea de lo mucho que han significado para mí. Han despertado algo que creí dormido… algo que pensé que ya no podía sentir otra vez.

Después de mi última relación, creí que no volvería a enamorarme… que nadie volvería a mirarme así, ni yo a sentir esto por alguien más. Pero mírame ahora…

Aquí estoy.
Queriendo volver a creer.
Queriendo volver a sentir.
Queriendo construir algo bonito… contigo.

Por eso hoy no quiero guardarme más esto.

Ruy… 🤍
¿Te gustaría formar parte de mi mundo?
¿De mi historia… de mi cuento?

Porque yo sí quiero que tú seas parte de él.

Así que te lo digo, sin rodeos pero con todo mi corazón:
`;
    titulo.textContent = "Carta para Ru-Ru 🤍"
    pregunta_2.textContent = "¿Quieres ser mi novia? 🤍";
    cancion.textContent = "Escucha la canción 🎶";
    btn.style.display = "block";
    imagen.src = "stolasxblitz.png";
    imagen.style.display = "block";
    boton.style.visibility = "hidden";
}
btn.addEventListener("click", () => {
    window.open('https://www.youtube.com/watch?v=mB97UDvRH_0', '_blank');
});