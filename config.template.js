// Copy this file to config.js and update with your information
// config.js will be ignored by git to keep your personal data private

const config = {
    about: {
        name: "Your Name",
        role: "Your Role/Title",
        skills: [
            "Skill 1",
            "Skill 2",
            "Skill 3"
        ],
        bio: "A brief bio about yourself"
    },
    contact: {
        email: "your.email@example.com",
        linkedin: "linkedin.com/in/yourusername",
        github: "github.com/yourusername",
        // Add other contact methods
    },
    projects: [
        {
            name: "Project 1",
            description: "Description of your first project",
            technologies: ["Tech1", "Tech2"],
            link: "https://project1.example.com",
            // Add other project details
        },
        {
            name: "Project 2",
            description: "Description of your second project",
            technologies: ["Tech1", "Tech2"],
            link: "https://project2.example.com",
        }
    ],
    // Customize available commands
    commands: {
        help: "Available commands:\n" +
              " - help: List all commands\n" +
              " - about: Display personal information\n" +
              " - projects: List all projects\n" +
              " - project [name]: Show details of a specific project\n" +
              " - contact: Display contact information\n" +
              " - skills: List technical skills\n" +
              " - clear: Clear the terminal\n" +
              " - ls: List available sections",
        ls: "Sections:\n - About\n - Projects\n - Contact\n - Skills"
    },
    // Optional: Custom ASCII art for your terminal
    ascii_art: `
    Your custom
    ASCII art
    here
    `
};

export default config;
