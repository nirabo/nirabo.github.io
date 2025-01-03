# Terminal Portfolio

A terminal-style portfolio website that loads personal data from a GitHub Gist, providing a clean separation between the UI template and your content.

## How It Works

1. The UI is a simple static website that mimics a terminal interface
2. Your personal data (projects, skills, etc.) lives in a GitHub Gist
3. The site loads your data from the Gist at runtime
4. Update your Gist to change your portfolio content

## Quick Start

1. Fork this repository:
   ```bash
   git clone https://github.com/nirabo/nirabo.github.io.git
   cd nirabo.github.io
   ```

2. Create your configuration:
   - Copy the content of `config.template.js`
   - Create a new GitHub Gist
   - Paste and modify the configuration with your information
   - Make sure to select "JSON" as the file type
   - Save the Gist and copy its "Raw" URL

3. Update configuration:
   - Edit `config.js` to point to your Gist URL

4. Deploy:
   - Rename your repository to `yourusername.github.io`
   - Push to GitHub
   - Your site will be available at `https://yourusername.github.io`

## Available Commands

The terminal supports these commands:
- `help`: List all commands
- `about`: Display personal information
- `projects`: List all projects
- `project [name]`: Show details of a specific project
- `contact`: Display contact information
- `skills`: List technical skills
- `clear`: Clear the terminal
- `ls`: List available sections

## Configuration Structure

Your Gist should follow this structure:
```javascript
{
    "about": {
        "name": "Your Name",
        "role": "Your Role",
        "bio": "Your Bio",
        "skills": ["Skill 1", "Skill 2"]
    },
    "contact": {
        "email": "your.email@example.com",
        "github": "github.com/yourusername"
    },
    "projects": [
        {
            "name": "Project Name",
            "description": "Project Description",
            "technologies": ["Tech1", "Tech2"],
            "period": "2023-2024"
        }
    ]
}
```

## Local Development

Since the project uses ES modules, you'll need to serve it through a local server:

```bash
# Using Python 3
python -m http.server

# Or using Node.js
npx http-server
```

Then open `http://localhost:8000` in your browser.

## Customization

Modify `style.css` to customize the terminal's appearance:
- Colors
- Font family
- Terminal dimensions
- Prompt style

## License

MIT License - Feel free to use this template for your own portfolio!
