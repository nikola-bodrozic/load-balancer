# NGINX container runs as Load Balancer & Reverse Proxy in front of two Node containers

`docker-compose up -d`

Proxy IP is at <http://public-ip> refresh to see hostname of docker container.

### Connectivity inside Docker stack

```shell
docker exec -it node1 /bin/ash
ping -c 2 node2:4002
ping -c 2 load-balancer:8080
exit
docker exec -it load-balancer /bin/ash
ping -c 2 node1:4001
ping -c 2 node2:4002
exit
```

### Blue/Green Deployment

```shell
docker-compose rm -s -v node2
vim node2/app.js
docker-compose up -d --build

docker-compose rm -s -v node1
vim node1/app.js
docker-compose up -d --build
```

### Canary testing

```shell
curl http://your.ip.address.here/
```

when user agent is cURL load balancer will forward http request to node2 - canary container. For other user agents http requests will be forwarded to node1.

```shell
    map $http_user_agent  $express {
        default       "prod";
        ~curl         "canary";
    }
``` 

