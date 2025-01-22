// document.getElementById('command').addEventListener('keypress', function(event) {
//     if (event.key === 'Enter') {
//         processCommand(this.value.toLowerCase());
//         this.value = '';
//     }
// });

// function processCommand(input) {
//     let output = document.getElementById('output');

//     if (input === 'help') {
//         output.innerHTML += '<p>Comandos disponibles: about, projects, contact, workex, education, hskills</p>';
    
//     } else if (input === 'about') {
//         output.innerHTML += 
//         '<p>Sobre mí: Desarrollador apasionado por...</p>';
    
//     } else if (input === 'projects') {
//         output.innerHTML += 
//         '<p>Mis proyectos: <a href="https://github.com/MariaRN98\" target="_blank">GitHub</a></p>';
    
//     } else if (input === 'contact') {
//         output.innerHTML += 
//         '<p>Contacto: mrojanonoval@gmail.com</p>';
    
//     } else if (input === 'workex') {
//         output.innerHTML += 
//         '<p>$ (workex) Experiencia laboral:</p>' +
//         '<br>' +
//         '<p>Programador en prácticas</p>' +
//         '<p>Fujitsu Technology Solutions S.A. | Marzo 2023 - Diciembre 2023</p>' +
//         '<p>- Implementar diferentes funcionalidades en la aplicación. </p>' +
//         '<p>- Migración de base de datos.</p>' +
//         '<p>- Mapeo de archivos XML y el posterior guardado de sus datos.</p>' +
//         '<p>- Testing con JUnit y Mockito. </p>' +
//         '<p>- Uso del modelo Gitflow.</p>' +
//         '<p>- Método de trabajo Scrum.</p>' +
//         '<p>- Creación y organización de un proyecto CRUD</p>';
    
//     } else if (input === 'education') {
//         output.innerHTML += 
//         '<p>$ (education) Experiencia laboral:</p>' +
//         '<p>estudios</p>';
    
//     } else if (input === 'hskills') {
//         output.innerHTML += 
//         '<p>conocimientos</p>';
    
//     } else {
//         output.innerHTML += `<p>Comando no reconocido: ${input}</p>`;
//     }
//     output.scrollTop = output.scrollHeight;
// }

// document.querySelectorAll('#sidebar a').forEach(item => {
//     item.addEventListener('click', function(event) {
//         event.preventDefault();
//         let command = this.getAttribute('data-command');
//         processCommand(command);
//     });
// });




document.getElementById('command').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        processCommand(this.value.toLowerCase());
        this.value = '';
    }
});

function printWithDelay(output, textArray, index = 0) {
    if (index < textArray.length) {
        let p = document.createElement('p');
        p.innerHTML = textArray[index];
        output.appendChild(p);
        output.scrollTop = output.scrollHeight;
        setTimeout(() => printWithDelay(output, textArray, index + 1), 100); // Retardo de 100ms
    }
}

function processCommand(input) {
    let output = document.getElementById('output');

    let commandResponses = {
        help: [
            'Comandos disponibles: about, projects, contact, workex, education, hskills'
        ],
        about: [
            'Sobre mí: Desarrollador apasionado por...'
        ],
        projects: [
            'Mis proyectos: <a href="https://github.com/MariaRN98" target="_blank">GitHub</a>'
        ],
        contact: [
            'Contacto: mrojanonoval@gmail.com'
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
            '$ (education) Experiencia académica:',
            'Título en Desarrollo de Aplicaciones Multiplataforma.'
        ],
        hskills: [
            'Habilidades técnicas: HTML, CSS, JavaScript, Java, Spring Boot, SQL, Git, Scrum.'
        ]
    };

    output.innerHTML += `<p>$ ${input}</p>`;  // Mostrar el comando introducido

    if (commandResponses[input]) {
        printWithDelay(output, commandResponses[input]);
    } else {
        printWithDelay(output, [`Comando no reconocido: ${input}`]);
    }
}

document.querySelectorAll('#sidebar a').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        let command = this.getAttribute('data-command');
        processCommand(command);
    });
});
