const terminalElement = document.getElementById('terminal');
const outputElement = document.getElementById('output');
const inputElement = document.getElementById('command-input');

let commandHistory = [];
let historyIndex = -1;
let config = null;

// Attempt to load configuration from multiple sources
async function loadConfig() {
    try {
        // Try loading from external source first (e.g., Gist, personal server)
        const configUrl = localStorage.getItem('portfolio_config_url');
        if (configUrl) {
            try {
                const response = await fetch(configUrl, {
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                        'Accept': 'application/json'
                    }
                });
                
                if (response.ok) {
                    const text = await response.text();
                    try {
                        config = JSON.parse(text);
                        displayOutput("Successfully loaded configuration from: " + configUrl);
                        return;
                    } catch (parseError) {
                        console.error('Failed to parse config JSON:', parseError);
                        displayOutput("Error: Invalid JSON in external configuration", false);
                    }
                } else {
                    console.error('Failed to load config:', response.status, response.statusText);
                    displayOutput(`Error loading configuration: ${response.status} ${response.statusText}`, false);
                }
            } catch (e) {
                console.error('Failed to load external config:', e);
                displayOutput("Error: Could not load external configuration. Check console for details.", false);
            }
        }

        // Try loading local config.js
        try {
            const localConfig = await import('./config.js');
            config = localConfig.default;
            return;
        } catch (e) {
            console.warn('No local config.js found:', e);
        }

        // Fallback to template config
        const templateConfig = await import('./config.template.js');
        config = templateConfig.default;
        
        // Show configuration notice
        displayOutput("⚠️ Using template configuration. To personalize:");
        displayOutput("1. Edit config.js locally, or");
        displayOutput("2. Use 'config-url [url]' to load external configuration");
    } catch (e) {
        console.error('Failed to load any configuration:', e);
        displayOutput("Error: Failed to load configuration. Please check console.", false);
    }
}

// Initialize terminal
async function initializeTerminal() {
    await loadConfig();
    if (config.ascii_art) {
        displayOutput(config.ascii_art);
    }
    displayOutput(`Welcome to ${config.about.name}'s terminal portfolio! Type 'help' for available commands.`);
}

// Initialize when DOM is ready
window.addEventListener('DOMContentLoaded', initializeTerminal);

// Format projects list
const getProjectsList = () => {
    return "Projects:\n" + config.projects
        .map(p => ` - ${p.name} (${p.period}): ${p.description}`)
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

// Format education information
const getEducationInfo = () => {
    const edu = config.education;
    return `Education:\n` +
           ` - Degree: ${edu.degree}\n` +
           ` - Field: ${edu.field}\n` +
           ` - Institution: ${edu.institution}\n` +
           ` - Period: ${edu.period}`;
};

// Get project details
const getProjectDetails = (projectName) => {
    const project = config.projects.find(p => 
        p.name.toLowerCase() === projectName.toLowerCase()
    );
    
    if (!project) return null;
    
    let details = `Project: ${project.name}\n` +
                 `Period: ${project.period}\n` +
                 `Description: ${project.description}\n` +
                 `Technologies: ${project.technologies.join(', ')}`;

    if (project.role) {
        details += `\nRole: ${project.role}`;
    }
    if (project.organization) {
        details += `\nOrganization: ${project.organization}`;
    }
    
    return details;
};

function handleCommand(input) {
    const [command, ...args] = input.toLowerCase().split(' ');
    const arg = args.join(' ');

    // Ensure config is loaded
    if (!config) {
        displayOutput("Error: Configuration not loaded. Please refresh the page.", false);
        return;
    }

    switch (command) {
        case 'config-url':
            if (!arg) {
                displayOutput("Current config URL: " + (localStorage.getItem('portfolio_config_url') || 'Using local config'));
                break;
            }
            try {
                new URL(arg); // Validate URL
                localStorage.setItem('portfolio_config_url', arg);
                displayOutput("Config URL updated. Refresh the page to load new configuration.");
            } catch {
                displayOutput("Error: Invalid URL provided.", false);
            }
            break;
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
        case 'education':
            displayOutput(getEducationInfo());
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

function reloadConfig() {
    displayOutput("Reloading configuration...");
    window.location.reload();
}

function handleKeyDown(event) {
    if ((event.key === 'Enter' || event.keyCode === 13) && !event.shiftKey) {
        event.preventDefault();
        const input = inputElement.value.trim();
        if (input) {
            displayOutput(`$ ${input}`);
            commandHistory.push(input);
            historyIndex = commandHistory.length;
            handleCommand(input);
            if (input.startsWith('config-url')) {
                setTimeout(reloadConfig, 1500);
            }
        }
        inputElement.value = '';
    } else if (event.key === 'ArrowUp' || event.keyCode === 38) {
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
