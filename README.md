# Terminal Portfolio

A customizable terminal-style portfolio website that can be easily personalized without exposing your private information in the repository.

## Setup

1. Clone the repository:
```bash
git clone https://github.com/yourusername/yourusername.github.io.git
cd yourusername.github.io
```

2. Create your personal configuration:
```bash
cp config.template.js config.js
```

3. Edit `config.js` with your personal information:
- Update your name, role, and bio in the `about` section
- Add your contact information
- List your skills
- Add your projects with descriptions and links
- Customize available commands
- (Optional) Add your custom ASCII art

The `config.js` file is ignored by git, so your personal information remains private and won't be pushed to the repository.

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
