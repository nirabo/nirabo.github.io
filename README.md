# Terminal Portfolio Template

A customizable terminal-style portfolio website template with flexible configuration options. This template supports multiple ways to personalize your portfolio while keeping your private information secure.

## Quick Start

### Option 1: Use as a Template Repository (Recommended)
1. Click "Use this template" at the top of this repository
2. Name your new repository `yourusername.github.io`
3. Clone your new repository:
```bash
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io
```

### Option 2: Fork and Configure
1. Fork this repository
2. Rename it to `yourusername.github.io`
3. Clone your fork

## Configuration Options

You have three ways to configure your portfolio:

### 1. Local Configuration (Private Development)
```bash
cp config.template.js config.js
```
Edit `config.js` with your information. This file is git-ignored and won't be pushed to your repository.

### 2. External Configuration (Recommended for Production)
Host your configuration file anywhere (e.g., Gist, personal server) and use the `config-url` command:
```
config-url https://your-config-url.json
```

Example hosting options:
- GitHub Gist (public or secret)
- Personal server/CDN
- Static file hosting service

### 3. Template Configuration
If no local or external configuration is found, the site falls back to the template configuration.

## Configuration Structure
- Update your name, role, and bio in the `about` section
- Add your contact information
- List your skills
- Add your projects with descriptions and links
- Customize available commands
- (Optional) Add your custom ASCII art

Your configuration file (whether local, external, or template) should follow this structure:

## Local Development

Since the project uses ES modules, you'll need to serve it through a local server. You can use any of these methods:

- Python 3:
```bash
python -m http.server
```

- Node.js (with `http-server`):
```bash
npx http-server
```

Then open `http://localhost:8000` in your browser.

## Available Commands

The terminal supports these default commands:
- `help`: List all available commands
- `about`: Display personal information
- `projects`: List all projects
- `project [name]`: Show details of a specific project
- `contact`: Display contact information
- `skills`: List technical skills
- `clear`: Clear the terminal
- `ls`: List available sections

## Customization

### Adding New Commands

1. Add the command to the `commands.help` section in your `config.js`
2. Add the command handler in `script.js`

### Styling

Modify `style.css` to customize the terminal's appearance:
- Colors
- Font family
- Terminal dimensions
- Prompt style

## Deployment

The site is ready for GitHub Pages deployment. Just push your changes to the main branch:

```bash
git add .
git commit -m "Update site configuration"
git push origin main
```

Your site will be available at `https://yourusername.github.io`

## Privacy

- Your personal data in `config.js` is kept private and not tracked by git
- The repository only contains the template and structure
- Each user can maintain their own private configuration

## License

MIT License - Feel free to use this template for your own portfolio!
