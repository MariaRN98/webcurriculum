function processCommand(input) {
    let output = document.getElementById('output');

    let commandResponses = {
        help: [
            'Comandos disponibles: about, projects, contact, workex, education, hskills'
        ],
        about: [
            '<br>',
            '$ (about) Sobre mí:',
        ],
        projects: [
            '<br>',
            '$ (projects) Proyectos:',
            '<a href="https://github.com/MariaRN98" target="_blank">GitHub</a>'
        ],
        contact: [
            '<br>',
            '$ (contact) Datos de contacto:',
            'Email: mrojanonoval@gmail.com',
            'Teléfono: 684 32 02 92',
            'Dirección: C/ San Vicente de Paul, Sevilla, 41010'
        ],
        workex: [
            '<br>',
            '$ (workex) Experiencia laboral:',
            'Programador en prácticas',
            'Fujitsu Technology Solutions S.A. | Marzo 2023 - Diciembre 2023',
            '- Implementar diferentes funcionalidades en la aplicación.',
            '- Migración de base de datos.',
            '- Mapeo de archivos XML y el posterior guardado de sus datos.',
            '- Testing con JUnit y Mockito.',
            '- Uso del modelo Gitflow.',
            '- Método de trabajo Scrum.',
            '- Creación y organización de un proyecto CRUD.'
        ],
        education: [
            '<br>',
            '$ (education) Formación académica:',
            'Técnico superior en desarrollo de aplicaciones web.',
            'I.E.S. Hermanos Machado | Actualidad',
            '<br>',
            'Técnico superior en desarrollo de aplicaciones multiplataforma.',
            'C.D.P. Santa Joaquina de Vedruna | 2023',
            '<br>',
            'Bachillerato de Humanidades y Ciencias Sociales.',
            'I.E.S. Pablo Picasso | 2019'
        ],
        hskills: [
            '<br>',
            '$ (hskills) Conocimientos:',
            '+----------------------------+------------------------+----------------+----------------------------+',
            '| Lenguajes de programación  | Frameworks y librerías | Bases de datos | Herramientas de desarrollo |',
            '+----------------------------+------------------------+----------------+----------------------------+',
            '| Java                       | Spring Boot            | MySQL          | Git                        |',
            '| JavaScript                 | Angular                | SQL            | IntelliJ IDEA              |',
            '| Python                     |                        |                | Visual Studio Code         |',
            '| C#                         |                        |                | Unity                      |',
            '| HTML/CSS                   |                        |                | Android Studio             |',
            '|                            |                        |                | Docker                     |',
            '|                            |                        |                |                            |',
            '+----------------------------+------------------------+----------------+----------------------------+',
        ]
    };

    input = input.trim().toLowerCase();
    output.innerHTML += `<p>$ ${input}</p>`; // Mostrar el comando introducido

    if (commandResponses[input]) {
        commandResponses[input].forEach(line => {
            const pre = document.createElement('pre');
            pre.innerHTML = line;
            output.appendChild(pre);
        });
    } else {
        const pre = document.createElement('pre');
        pre.innerHTML = `Comando no reconocido: ${input}`;
        output.appendChild(pre);
    }

    scrollPageToBottom();  // Llamamos a la función para mantener el scroll abajo
}


// Función para mantener el scroll de la página hacia abajo
function scrollPageToBottom() {
    setTimeout(() => {
        // Asegúrate de que estamos desplazando todo el contenido de la página
        window.scrollTo({
            top: document.documentElement.scrollHeight,  // Desplazamiento hasta el final del contenido
        });
    }, 100);  // Le damos un pequeño retraso para que el DOM se actualice antes del desplazamiento
}

document.getElementById('command').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        processCommand(this.value.toLowerCase());
        this.value = '';
    }
});

document.querySelectorAll('#sidebar a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        let command = this.getAttribute('data-command');
        processCommand(command);
    });
});
