# Scientific Calculator

A React-based scientific calculator web application built with Vite.

## Features

- Basic arithmetic operations
- Scientific functions (trigonometry, logarithms, exponents)
- Clean, modern UI
- Mobile-responsive design

## Development Server

The development server is configured for external preview access and accepts connections from all hosts in development mode.

### Why Allow All Hosts?

External preview URLs (such as those used in cloud sandboxes and development environments) often use non-localhost hostnames. By default, Vite blocks requests from unknown hosts with a "Host not allowed" error. Running in development mode, this project allows all hosts to support external preview access without configuration changes.

### Starting the Dev Server

```bash
./start-dev-clean.sh
```

Or manually:
```bash
npx vite --host 0.0.0.0 --port 5173
```

### Accessing the Dev Server

Once running, the dev server will be accessible via:

**From your local machine:**
- http://localhost:5173
- http://127.0.0.1:5173

**From other devices on your local network:**
1. Find your machine's local IP address:
   - Linux: `hostname -I | awk '{print $1}'`
   - macOS: `ipconfig getifaddr en0`
   - Windows: `ipconfig`

2. Access via: `http://YOUR_LOCAL_IP:5173`
   - Example: `http://192.168.1.100:5173`

### Network Configuration

- The development server binds to `0.0.0.0` to accept external connections
- **All hosts are allowed in development mode** to support external preview URLs
- This relaxed host validation is **development-mode only** for convenience
- Production builds are unaffected by this configuration
- Project uses Vite, not Next.js (next.config.js files should not exist in this project)

### Firewall Considerations

If the dev server is not accessible from other devices on your network, ensure your firewall allows inbound connections on port 5173:

**Linux (ufw):**
```bash
sudo ufw allow 5173/tcp
```

**macOS:**
- System Preferences → Security & Privacy → Firewall → Firewall Options
- Allow incoming connections for "node"

**Windows:**
- Windows Defender Firewall → Advanced Settings
- Inbound Rules → New Rule → Port → TCP 5173

## Building for Production

```bash
npm run build
```

The production build is optimized and does not include development server features.

## Deployment

This project is configured for deployment to GitHub Pages. The build output directory is `dist/`.

## Technologies

- React 18
- Vite 6
- TypeScript
- Bootstrap 5