document.getElementById('command').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        processCommand(this.value.toLowerCase());
        this.value = '';
    }
});

function processCommand(input) {
    let output = document.getElementById('output');

    if (input === 'help') {
        output.innerHTML += '<p>Comandos disponibles: about, projects, contact</p>';
    } else if (input === 'about') {
        output.innerHTML += '<p>Sobre mí: Desarrollador apasionado por...</p>';
    } else if (input === 'projects') {
        output.innerHTML += '<p>Mis proyectos: <a href="https://github.com/MariaRN98\" target="_blank">GitHub</a></p>';
    } else if (input === 'contact') {
        output.innerHTML += '<p>Contacto: mrojanonoval@gmail.com</p>';
    } else {
        output.innerHTML += `<p>Comando no reconocido: ${input}</p>`;
    }
    output.scrollTop = output.scrollHeight;
}

document.querySelectorAll('#sidebar a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        let command = this.getAttribute('data-command');
        processCommand(command);
    });
});