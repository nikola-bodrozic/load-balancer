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
docker exec -it node1 /bin/ash
ping -c 2 node2:4002
ping -c 2 load-balancer:8080
exit
docker exec -it load-balancer /bin/ash
ping -c 2 node1:4001
ping -c 2 node2:4002
ping -c 2 reverse-proxy
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

### Portainer (optional)

```shell
docker volume create portainer_data
docker run -d -p 9038:9000 --name=portainer --restart=always -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer-ce
docker container stop portainer
```
