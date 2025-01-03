# Terminal Portfolio

A terminal-style portfolio website template that loads your personal data from a GitHub Gist at build time, keeping your information private while maintaining a clean, reusable template.

## Quick Start

1. Use this template:
   ```bash
   git clone https://github.com/nirabo/nirabo.github.io.git
   cd nirabo.github.io
   npm install
   ```

2. Create your configuration:
   - Copy the content of `config.template.js`
   - Create a new GitHub Gist
   - Paste and modify the configuration with your information
   - Make sure to select "JSON" as the file type
   - Save the Gist and copy its "Raw" URL

3. Set up configuration:
   ```bash
   cp .env.example .env
   ```
   Edit .env and set your Gist URL:
   ```
   PORTFOLIO_CONFIG_URL=your-gist-raw-url
   ```

4. Build and deploy:
   ```bash
   npm run build
   ```
   - Rename your repository to `yourusername.github.io`
   - Push to GitHub
   - Your site will be available at `https://yourusername.github.io`

## Development

1. Start local server:
   ```bash
   npm start
   ```
   This will serve the site at http://localhost:8080

2. Making changes:
   - Update your Gist with new information
   - Run `npm run build` to update the configuration
   - Test locally before deploying

## Configuration Structure

The `config.template.js` shows the expected structure. Here's what to customize:
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
