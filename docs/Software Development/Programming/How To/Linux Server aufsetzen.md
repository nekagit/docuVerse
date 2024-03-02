# Implement Linux Server for Backend, DevOps

![[Pasted image 20240212185343.png]]

1. install Putty
2. Get Server with IP
3. Fill in 1blu.de Accont for Overview
4. Open Putty,fill in IP of Server

---
# Virtual Linux Server (Ubuntu)
sudo apt update
sudo apt upgrade
sudo apt install wget
sudo apt install curl
Java 11 fast install
1. sudo apt install default-jre
2. java -version
Java 17 installation
sudo apt install fontconfig openjdk-17-jre
java -version
Installations

---
# How to login into a new server?
-Login with ssh on MacOS
SSH in to your server as the root user:
ssh root@your_server_ip_address
-Or Login on Windows with Putty
Login with ssh key
Update and upgrade the minimalistic ubuntu server
- sudo apt update
- sudo apt upgrade
How to create a new Admin User in linux ubuntu?
- Create a new user named newuser, run: adduser newuser
- Make newuser user ‘sudo user’ (admin) run: usermod -aG sudo newuser
Security
https://nordvpn.com/de/what-is-my-ip/
ufw firewall
-
-
-
sudo apt install ufw
sudo ufw allow ssh
sudo ufw allow from 192.168.0.1-
-
-
-
-
-
-
-
-
-
sudo ufw allow from TARGET to DESTINATION port PORTNUMBER [proto
PROTOCOL]
sudo ufw enable
sudo ufw disable
sudo ufw allow from 79.214.100.198 to any port 5901
sudo ufw deny PORT
sudo ufw allow PORT[/PROTOCOL]
sudo ufw deny SERVICENAME -> sudo ufw deny ftp
sudo ufw status numbered
sudo ufw delete RULE
sudo ufw status
more commands: https://pimylifeup.com/configuring-ufw/
after success configurations and enabling ufw restart putty or tightvnc viewer.

---
# HTTPS
1. sudo apt install certbot python3-certbot-nginx
2. sudo certbot --nginx -d getperfecthost.com -d www.getperfecthost.com
3. sudo certbot --nginx -d jenkins.getperfecthost.com
// -d www.getperfecthost.com
---
# Desktops
1. sudo apt-get install lxde (OPTION 1 - recommended)
2. sudo apt install xfce4 xfce4-goodies (OPTION 2)


VNC Viewer - TightVNC Viewer
1.
2.
3.
4.
sudo apt install tightvncserver
log into your new sudo user with “su - username” and run
vncserver :1
vncserver -kill :1
Browser
sudo apt install wget

---
# Chrome install
1. wget https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb
2. sudo dpkg -i google-chrome-stable_current_amd64.deb
3. IF any Error run: sudo apt -f installFirefox install - coming soon…

---
# NodeJS
sudo apt install curl
Install Node.js v21.x on Ubuntu
1. curl -fsSL https://deb.nodesource.com/setup_21.x | sudo -E bash - &&
2. sudo apt-get install -y nodejs
3. node –version | npm –version
other links: https://github.com/nodesource/distributions

---
# Jenkins
Jenkins Installation
Jenkins requires Java JDK 11 or 17 <
Jenkins requires git - sudo apt install git
3. sudo apt install default-jre
4. java -version
Jenkins Installation variant 1 (directly in a repo):
1. Navigate in the terminal in a directory exp.: /Desktop/jenkins
2. wget http://mirrors.jenkins.io/war-stable/latest/jenkins.war
3. java -jar jenkins.war --httpPort=8081
# Jenkins Installation variant 2 (apt install - recommended):
https://pkg.jenkins.io/debian-stable/
1. curl -fsSL https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo tee \
/usr/share/keyrings/jenkins-keyring.asc > /dev/null
2. echo deb [signed-by=/usr/share/keyrings/jenkins-keyring.asc] \
https://pkg.jenkins.io/debian-stable binary/ | sudo tee \
/etc/apt/sources.list.d/jenkins.list > /dev/null
3. sudo apt-get update
4. sudo apt-get install fontconfig openjdk-17-jre
5. sudo apt-get install jenkins
6. sudo nano /etc/default/jenkins change Port HTTP_PORT=8080
7. sudo systemctl restart jenkinsHow to completely uninstall or remove Jenkins ?
1.
2.
3.
4.
5.
6.
7.
8.
sudo systemctl stop jenkins
sudo systemctl disable jenkins
sudo apt remove jenkins
sudo rm -r /var/lib/jenkins
sudo rm -r /etc/default/jenkins
sudo rm /etc/systemd/system/jenkins.service
sudo systemctl status jenkins
sudo apt purge jenkins
Jenkins Configuration
How to change jenkins default settings?
1. sudo nano /usr/lib/systemd/system/jenkins.service
How to change jenkins default port? <- working version
1.
2.
3.
4.
5.
6.
sudo systemctl stop jenkins
cd /usr/lib/systemd/system
ls -l *jenkins*
sudo nano jenkins.service
sudo nano /usr/lib/systemd/system/jenkins.service
change Enviroment=”JENKINS_PORT=8080” to
Enviroment=”JENKINS_PORT=8081”
7. save file
8. restart jenkins
Change PORT: variant 2 (not working)
1. sudo nano /etc/systemd/system/jenkins.service
2. Paste in:
[Unit]
Description=Jenkins Automation Server
Documentation=https://www.jenkins.io/doc/
After=network.target
[Service]
User=jenkins
Group=jenkins
ExecStart=/usr/bin/java -D jenkins.install.runSetupWizard=false -jar
/var/lib/jenkins.war --httpPort=8081
Restart=always
[Install]
WantedBy=multi-user.target
3. strg+s & strg+x
4. sudo systemctl daemon-reload
5. sudo systemctl restart jenkinsChange PORT: variant 3 (not working)
1. systemctl edit jenkins
2. java -version
Jenkin Pipelines
Jenkins Installation On Ubuntu with Reverse Proxy NGINX & SSL Certificate VIA SHE…
Jenkins with Github integration
How to Setup Jenkins with Github?
1. Setup with SSH key
Steps
-
-
-
-
# Generate the SSH keys on ubuntu server
Copy the public key in Github
Configure in Jenkins Credentials
Configure a sample job in Jenkins using SSH connection
1. Generate the SSH keys on ubuntu server
ssh-keygen -o -t rsa -C “@getperfecthost”
sudo eval $(sudo ssh-agent -s)
ssh-add ~/.ssh/id_rsa
2.
# Atlassian Jira integration
How to Setup Jenkins with Atlassian jira software?
Nginx
Remove the Apache Web Server1.
2.
3.
4.
sudo systemctl stop apache2
sudo systemctl disable apache2
sudo apt remove apache2
sudo apt autoremove
Install Nginx
1. sudo apt install nginx
2. systemctl status nginx
Configuration
3. sudo nano /etc/nginx/sites-available/{serverip | domain.com}
4. Geben Sie den folgenden Nginx-Konfigurationscode ein:
server {
listen 80;
server_name livefootballprediction.com www.livefootballprediction.com;
location / {
proxy_pass http://localhost:8080;
proxy_set_header Host $host;
proxy_set_header X-Real-IP $remote_addr;
proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
}
for Jenkins
server {
listen 80;
server_name jenkins.getperfecthost.com www.jenkins.getperfecthost.com;
location / {proxy_pass http://127.0.0.1:8081;
proxy_http_version 1.1;
proxy_set_header Upgrade $http_upgrade;
proxy_set_header Host $host;
proxy_cache_bypass $http_upgrade;
}
Secure Nginx with Let's Encrypt
Git - Version Control System