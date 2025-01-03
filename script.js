const terminalElement = document.getElementById('terminal');
const outputElement = document.getElementById('output');
const inputElement = document.getElementById('command-input');

const commands = {
    help: "Available commands:\n - help: List all commands\n - projects: List all projects\n - project [name]: Show details of a specific project\n - about: Display personal information\n - contact: Display contact information\n - clear: Clear the terminal\n - ls: List available sections/pages",
    projects: "Projects:\n - project1\n - project2\n - project3",
    about: "About:\n - Name: John Doe\n - Skills: JavaScript, Python, Linux, Software Architecture",
    contact: "Contact:\n - Email: johndoe@example.com\n - LinkedIn: linkedin.com/in/johndoe",
    ls: "Sections:\n - About\n - Projects\n - Contact",
};

const projectDetails = {
    project1: "Project1: A web application built with React.",
    project2: "Project2: A machine learning model for predictive analysis.",
    project3: "Project3: A terminal-style portfolio website.",
};

let commandHistory = [];
let historyIndex = -1;

const easterEggArt = `
       __
      /  \\
     |    |
      \\__/
     /    \\
    |      |
    |      |
     \\____/
     (____)
`;

commands.easteregg = "Easter Egg discovered! Here's a little surprise:\n" + easterEggArt;

function handleCommand(input) {
    const [command, arg] = input.split(' ');

    switch (command) {
        case 'help':
            displayOutput(commands.help);
            break;
        case 'projects':
            displayOutput(commands.projects);
            break;
        case 'project':
            displayOutput(projectDetails[arg] || "Error: Project not found.", !!projectDetails[arg]);
            break;
        case 'about':
            displayOutput(commands.about);
            break;
        case 'contact':
            displayOutput(commands.contact);
            break;
        case 'clear':
            clearTerminal();
            break;
        case 'ls':
            displayOutput(commands.ls);
            break;
        case 'easteregg': // New Easter Egg command
            displayOutput(commands.easteregg);
            break;
        default:
            displayOutput("Error: Command not recognized. Type 'help' for a list of commands.", false);
    }
}


function displayOutput(text, success = true) {
    const timestamp = new Date().toLocaleTimeString();
    const line = `[${timestamp}] ${text}`;
    outputElement.innerHTML += `<div class="${success ? '' : 'error'}">${line}</div>`;
    scrollToBottom();
}

function clearTerminal() {
    outputElement.innerHTML = '';
}

function scrollToBottom() {
    outputElement.scrollTop = outputElement.scrollHeight;
}

function handleKeyDown(event) {
    if (event.key === 'Enter') {
        const input = inputElement.value.trim();
        if (input) {
            displayOutput(`$ ${input}`);
            commandHistory.push(input);
            historyIndex = commandHistory.length;
            handleCommand(input);
        }
        inputElement.value = '';
    } else if (event.key === 'ArrowUp') {
        if (historyIndex > 0) {
            historyIndex -= 1;
            inputElement.value = commandHistory[historyIndex];
        }
    } else if (event.key === 'ArrowDown') {
        if (historyIndex < commandHistory.length - 1) {
            historyIndex += 1;
            inputElement.value = commandHistory[historyIndex];
        } else {
            inputElement.value = '';
            historyIndex = commandHistory.length;
        }
    }
}

// Focus the input field whenever the terminal is clicked
terminalElement.addEventListener('click', () => {
    inputElement.focus();
});

inputElement.addEventListener('keydown', handleKeyDown);
