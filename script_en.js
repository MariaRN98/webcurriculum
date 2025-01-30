function processCommand(input) {
    let output = document.getElementById('output');

    let commandResponses = {
        help: [
            'Available commands: about, projects, contact, workex, education, hskills'
        ],
        about: [
            '<br>',
            '$ <b>About Me:</b>',
            'Developer with training in Web Application Development',
            'and Multiplatform Application Development. I have experience',
            'in programming, during which I have acquired skills in various',
            'technologies such as Java, Angular, and especially Python, as well as',
            'agile methodologies like Scrum. Although I am still exploring my',
            'specialization, I have great motivation to keep learning and',
            'growing professionally. I am excited to take on new challenges and',
            'enhance my knowledge to contribute effectively to',
            'innovative projects.',
        ],
        projects: [
            '<br>',
            '$ <b>Projects:</b>',
            '<a href="https://mariarn98.github.io/quest/" target="_blank">Quest Detective Agency</a>',
            '<a href="https://mariarn98.github.io/mercajoja/index.html" target="_blank">Mercajoja Supermarkets</a>',
            '<a href="https://mariarn98.github.io/club-de-literatura-digital/index" target="_blank">Digital Literature Blog</a>'
        ],
        contact: [
            '<br>',
            '$ <b>Contact details:</b>',
            'Email: mrojanonoval@gmail.com',
            'Phone: 684 32 02 92',
            'Address: C/ San Vicente de Paul, Sevilla, 41010'
        ],
        workex: [
            '<br>',
            '$ <b>Work experience:</b>',
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
            '$ <b>Education:</b>',
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
            '$ <b>Hard skills:</b>',
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
