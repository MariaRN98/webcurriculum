function processCommand(input) {
    let output = document.getElementById('output');

    let commandResponses = {
        help: [
            'Comandos disponibles: about, projects, contact, workex, education, hskills'
        ],
        about: [
            '<br>',
            '$ <b>Sobre mí:</b>',
            'Desarrolladora con formación en Desarrollo de Aplicaciones Web',
            'y Desarrollo de Aplicaciones Multiplataforma. Cuento con experiencia ',
            'en programación, durante la cual he adquirido habilidades en diversas ',
            'tecnologías como Java, Angular y especialmente Python, así como en',
            'metodologías ágiles como Scrum. Aunque aún estoy explorando mi ',
            'especialización, tengo una gran motivación por seguir aprendiendo y',
            'creciendo profesionalmente. Me entusiasma enfrentar nuevos desafíos y',
            'mejorar mis conocimientos para contribuir de manera efectiva en',
            'proyectos innovadores.',
        ],
        projects: [
            '<br>',
            '$ <b>Proyectos:</b>',
            '<a href="https://mariarn98.github.io/quest/" target="_blank">Agencia de Detective Quest</a>',
            '<a href="https://mariarn98.github.io/mercajoja/index.html" target="_blank">Supermercados Mercajoja</a>',
            '<a href="https://mariarn98.github.io/club-de-literatura-digital/index" target="_blank">Blog de Literatura Digital</a>'
        ],
        contact: [
            '<br>',
            '$ <b>Datos de contacto:</b>',
            'Email: mrojanonoval@gmail.com',
            'Teléfono: 684 32 02 92',
            'Dirección: C/ San Vicente de Paul, Sevilla, 41010'
        ],
        workex: [
            '<br>',
            '$ <b>Experiencia laboral:</b>',
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
            '$ <b>Formación académica:</b>',
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
            '$ <b>Conocimientos:</b>',
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
    output.innerHTML += `<br><p>$ ${input}</p>`; // Mostrar el comando introducido

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

    scrollPageToBottom();  
}

// mantener el scroll abajo
function scrollPageToBottom() {
    setTimeout(() => {
        window.scrollTo({
            top: document.documentElement.scrollHeight,  
        });
    }, 100);  
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
