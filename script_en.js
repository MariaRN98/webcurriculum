function processCommand(input) {
    let output = document.getElementById('output');

    let commandResponses = {
        help: [
            'Available commands: about, projects, contact, workex, education, hskills'
        ],
        about: [
            '<br>',
            '$ (about) About me:',
        ],
        projects: [
            '<br>',
            '$ (projects) Projects:',
            '<a href="https://github.com/MariaRN98" target="_blank">GitHub</a>'
        ],
        contact: [
            '<br>',
            '$ (contact) Contact details:',
            'Email: mrojanonoval@gmail.com',
            'Phone: 684 32 02 92',
            'Address: C/ San Vicente de Paul, Sevilla, 41010'
        ],
        workex: [
            '<br>',
            '$ (workex) Work experience:',
            'Intern Programmer',
            'Fujitsu Technology Solutions S.A. | March 2023 - December 2023',
            '- Implementing various functionalities in the application.',
            '- Database migration.',
            '- XML file mapping and subsequent data storage.',
            '- Testing with JUnit and Mockito.',
            '- Using the Gitflow model.',
            '- Scrum work methodology.',
            '- Creation and organization of a CRUD project.'
        ],
        education: [
            '<br>',
            '$ (education) Academic background:',
            'Higher Technician in Web Application Development.',
            'I.E.S. Hermanos Machado | Present',
            '<br>',
            'Higher Technician in Multiplatform Application Development.',
            'C.D.P. Santa Joaquina de Vedruna | 2023',
            '<br>',
            'High School Diploma in Humanities and Social Sciences.',
            'I.E.S. Pablo Picasso | 2019'
        ],
        hskills: [
            '<br>',
            '$ (hskills) Hard skills:',
            '+----------------------------+------------------------+----------------+----------------------------+',
            '| Programming languages      | Frameworks & Libraries | Databases      | Development Tools          |',
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
