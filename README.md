# NGINX instances as Load Balancer & Reverse Proxy in front of two Node containers

`docker-compose up -d`

Proxy IP is at <http://public-ip> refresh to see hostname of docker container.

reverse-proxy logs
**/var/log/nginx/error.log** and **/var/log/nginx/access.log** are in **reverse_proxy/** folder on host

load-balancer logs
**/var/log/nginx/error.log** and **/var/log/nginx/access.log** are in **load_balancer/** folder on host

You can follow Nginx logs `tail -f reverse_proxy/access.log`

### Connectivity inside Docker stack

```shell
docker exec -it node2 /bin/ash
ping -c 2 node1:4001
ping -c 2 node3:4003
ping -c 2 load-balancer:8080
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

### Blue/Green Deployment

If we are happy with canary we can copy app.js file to node1/ and node2/ folders and run:

```shell
docker-compose rm -s -v node2
vim node2/app.js
docker-compose up -d --build

docker-compose rm -s -v node1
vim node1/app.js
docker-compose up -d --build
```

This can be automated using CI/CD tools such as Jenkins and GitHub web hooks.
