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
sudo apt install -y nginx git nodejs npm certbot python3-certbot-nginx
```

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

From the project directory:

```bash
npm install
npm run build
```

Copy the built files to the web root:

```bash
sudo rsync -av --delete dist/ /var/www/rogerbelman.com/
```

Reload Nginx if the server config changed:

```bash
sudo nginx -t
sudo systemctl reload nginx
```
