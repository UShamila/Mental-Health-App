🧠Mental Health Quotes & Support App

This is a simple web app that displays mental health quotes using an external API. It aims to provide users with uplifting and supportive quotes for their mental well-being.

🐳 Build Docker Image

docker build -t mental-health-app .
docker tag mental-health-app ushamila/mental-health-app:latest
docker push ushamila/mental-health-app:latest

▶️Run with Docker Compose: 

```bash
docker-compose up --build

This starts:
-web01 and web02 containers serving the frontend
-haproxy container acting as a load balancer

All containers are defined in docker-compose.yml, which maps ports and sets up the load balancer.

🧩 Load Balancer: HAProxy Config
HAProxy uses round-robin to balance requests between two servers:

frontend http_front
    bind *:80
    default_backend http_back

backend http_back
    balance roundrobin
    server web01 web01:80 check
    server web02 web02:80 check

run:

bash

docker-compose up --build

🔄Test Load Balancing

-Open http://localhost
-Refresh the page multiple times
-You’ll see quotes served alternately from web01 and web02

⚙️API Used and credits

-Motivational Quotes API from RapidAPI
-The app uses [Quotable API](https://github.com/lukePeavey/quotable) to fetch quotes.  

Thanks to the API developers for providing free access.

🔐Handling API Keys
-In this demo, the API key is directly in the JavaScript.
-In production, use environment variables or a server proxy to hide it.

🛠️Challenges Faced

-API access initially gave "You are not subscribed" — solved by subscribing on RapidAPI.
-Had to update CORS settings and fix Docker Compose routing issues.
-Tweaked HAProxy config to balance traffic correctly

📦 Docker Hub  
Repo URL: [https://hub.docker.com/r/ushamila/mental-health-app](https://hub.docker.com/r/ushamila/mental-health-app)  
Image Name: `ushamila/mental-health-app`  
Tag: `latest`


The link for the demo video: https://youtu.be/2kWyTNc17Mo
