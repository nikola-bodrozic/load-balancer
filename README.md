# NGINX instances as Load Balancer & Reverse Proxy in front of two Node containers

`docker-compose up -d`

Proxy IP is at <http://public-ip> refresh to see hostname of docker container.

reverse_proxy logs
**/var/log/nginx/error.log** and **/var/log/nginx/access.log** are in **reverse_proxy/** folder on host

loadb logs
**/var/log/nginx/error.log** and **/var/log/nginx/access.log** are in **load_balancer/** folder on host

You can follow Nginx logs `tail -f reverse_proxy/access.log`

### Inside Docker stack

```shell
docker exec -it nodehost1 /bin/ash
ping -c 2 nodehost2:4001
ping -c 2 loadb:8080
exit
docker exec -it loadb /bin/ash
ping -c 2 nodehost1:4000
ping -c 2 nodehost2:4001
ping -c 2 reverse-proxy
exit
```
