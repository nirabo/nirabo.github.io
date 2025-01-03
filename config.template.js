// This is a template configuration file.
// For local development: Copy to config.js and customize
// For production: Host your config file externally and use the config-url command

const config = {
    // Site metadata
    meta: {
        version: "1.0.0",
        template_repo: "https://github.com/nirabo/nirabo.github.io",
        last_updated: new Date().toISOString()
    },
    about: {
        name: "Terminal Portfolio",
        role: "Interactive CLI Portfolio Template",
        skills: [
            "HTML/CSS/JavaScript",
            "Git Version Control",
            "ES Modules",
            "Local Storage",
            "Async/Await",
            "Error Handling"
        ],
        bio: "A modern, configurable portfolio template that mimics a terminal interface. Supports multiple configuration methods while keeping your personal data private."
    },
    contact: {
        github: "github.com/nirabo/nirabo.github.io",
        template: "Use 'config-url' command to load your contact info",
        example: "config-url https://your-config-url.json"
    },
    projects: [
        {
            name: "External Config",
            description: "Load your portfolio data from any hosted JSON file",
            technologies: ["GitHub Gist", "JSON", "LocalStorage"],
            link: "See config-url command"
        },
        {
            name: "Local Config",
            description: "Develop locally with a private config.js file",
            technologies: ["ES Modules", "Git"],
            link: "See config.template.js"
        }
    ],
    commands: {
        help: "Available commands:\n" +
              " - help: List all commands\n" +
              " - about: Display information\n" +
              " - projects: List all projects\n" +
              " - project [name]: Show project details\n" +
              " - contact: Display contact info\n" +
              " - skills: List technical skills\n" +
              " - config-url [url]: Set external config URL\n" +
              " - clear: Clear the terminal\n" +
              " - ls: List available sections",
        ls: "Sections:\n - About\n - Projects\n - Contact\n - Skills\n - Configuration"
    },
    ascii_art: `
    ╔════════════════════════════════════╗
    ║     Terminal Portfolio Template     ║
    ║                                    ║
    ║  Type 'help' to get started        ║
    ║  Use 'config-url' to personalize   ║
    ╚════════════════════════════════════╝
    `
};

export default config;
