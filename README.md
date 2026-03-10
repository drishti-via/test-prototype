# Scientific Calculator

A React-based scientific calculator web application built with Vite.

## Features

- Basic arithmetic operations
- Scientific functions (trigonometry, logarithms, exponents)
- Clean, modern UI
- Mobile-responsive design

## Development Server

The development server is configured to accept connections from:
- Localhost variants: `localhost`, `127.0.0.1`, `::1`, `.localhost`
- Local network access: All requests from private IP ranges (192.168.x.x, 10.x.x.x, 172.16.x.x, etc.)

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
- Host allowlist is configured for **development mode only** (when running `vite serve`)
- Private IP ranges are automatically permitted for local network access
- This configuration does NOT apply to production builds

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