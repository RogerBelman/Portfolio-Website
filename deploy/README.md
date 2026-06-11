# Deployment

This portfolio is a Vite React app served as static files from Nginx.

## Server Target

- Ubuntu VPS on DigitalOcean
- Canonical domain: `https://rogerbelman.com`
- Web root: `/var/www/rogerbelman.com`
- Nginx site config: `/etc/nginx/sites-available/rogerbelman.com`

## Fresh Server Setup

Install the required packages:

```bash
sudo apt update
sudo apt install -y nginx certbot python3-certbot-nginx
```

Node.js and npm are not required on the VPS for the current workflow because the app is built locally and copied to the server.

Create the web root:

```bash
sudo mkdir -p /var/www/rogerbelman.com
sudo chown -R $USER:www-data /var/www/rogerbelman.com
```

Create the Nginx site config:

```bash
sudo nano /etc/nginx/sites-available/rogerbelman.com
```

Use `deploy/nginx-spa.conf.example` as the starting config. The important React Router fallback is:

```nginx
location / {
    try_files $uri $uri/ /index.html;
}
```

Enable the site:

```bash
sudo ln -s /etc/nginx/sites-available/rogerbelman.com /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default
sudo nginx -t
sudo systemctl reload nginx
```

Enable HTTPS:

```bash
sudo certbot --nginx -d rogerbelman.com -d www.rogerbelman.com
```

Choose the redirect option so all traffic resolves to one canonical HTTPS domain.

## Deploy Updates

From the local project directory:

```powershell
npm install
npm run build
```

Clear the current web root on the VPS:

```powershell
ssh root@YOUR_DROPLET_IP "rm -rf /var/www/rogerbelman.com/*"
```

Copy the new build output to the VPS:

```powershell
scp -r dist/* root@YOUR_DROPLET_IP:/var/www/rogerbelman.com/
```

Nginx does not need to be reloaded for normal site updates. Reload it only if the Nginx config changed.

## Rebuilt VPS SSH Warning

If the droplet is rebuilt and SSH reports that the remote host identification changed, remove the old local key:

```powershell
ssh-keygen -R YOUR_DROPLET_IP
```

Then reconnect and accept the new host key:

```powershell
ssh root@YOUR_DROPLET_IP
```
