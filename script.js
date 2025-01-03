import config from './config.js';

const terminalElement = document.getElementById('terminal');
const outputElement = document.getElementById('output');
const inputElement = document.getElementById('command-input');

let commandHistory = [];
let historyIndex = -1;

// Initialize with welcome message
window.addEventListener('DOMContentLoaded', () => {
    if (config.ascii_art) {
        displayOutput(config.ascii_art);
    }
    displayOutput(`Welcome to ${config.about.name}'s terminal portfolio! Type 'help' for available commands.`);
});

// Format projects list
const getProjectsList = () => {
    return "Projects:\n" + config.projects
        .map(p => ` - ${p.name}: ${p.description}`)
        .join('\n');
};

// Format about information
const getAboutInfo = () => {
    return `About:\n` +
           ` - Name: ${config.about.name}\n` +
           ` - Role: ${config.about.role}\n` +
           ` - Bio: ${config.about.bio}`;
};

// Format contact information
const getContactInfo = () => {
    return "Contact:\n" + Object.entries(config.contact)
        .map(([platform, value]) => ` - ${platform}: ${value}`)
        .join('\n');
};

// Format skills list
const getSkillsList = () => {
    return "Skills:\n" + config.about.skills
        .map(skill => ` - ${skill}`)
        .join('\n');
};

// Get project details
const getProjectDetails = (projectName) => {
    const project = config.projects.find(p => 
        p.name.toLowerCase() === projectName.toLowerCase()
    );
    
    if (!project) return null;
    
    return `Project: ${project.name}\n` +
           `Description: ${project.description}\n` +
           `Technologies: ${project.technologies.join(', ')}\n` +
           `Link: ${project.link}`;
};

function handleCommand(input) {
    const [command, ...args] = input.toLowerCase().split(' ');
    const arg = args.join(' ');

    switch (command) {
        case 'help':
            displayOutput(config.commands.help);
            break;
        case 'projects':
            displayOutput(getProjectsList());
            break;
        case 'project':
            if (!arg) {
                displayOutput("Error: Please specify a project name.", false);
                break;
            }
            const projectInfo = getProjectDetails(arg);
            displayOutput(projectInfo || "Error: Project not found.", !!projectInfo);
            break;
        case 'about':
            displayOutput(getAboutInfo());
            break;
        case 'contact':
            displayOutput(getContactInfo());
            break;
        case 'skills':
            displayOutput(getSkillsList());
            break;
        case 'clear':
            clearTerminal();
            break;
        case 'ls':
            displayOutput(config.commands.ls);
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
