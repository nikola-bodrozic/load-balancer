# nginex instances as LoadBalancer & proxy in front of two Node apps

`docker-compose up -d`

Proxy IP is at <http://public-ip> refresh to see hostname of docker container.

**/var/log/nginx/error.log** and **/var/log/nginx/access.log** are in **reverse_proxy/** folder on host

You can follow Nginx logs `tail -f reverse_proxy/access.log`

### Depolyment of new microservice

```shell
$ docker image ls
REPOSITORY                TAG                  IMAGE ID      
load-balancer_nodehost1   latest               4af15aa4ef44   

docker-compose stop nodehost1
docker-compose rm nodehost1
docker image rmi load-balancer_nodehost1 
```

modify node1/app.js

```shell
$ cd node1/
$ vim app.js
$ docker build -t load-balancer_nodehost1 .
$ cd ..
$ docker image ls
REPOSITORY                TAG                  IMAGE ID    
load-balancer_nodehost1   latest               ec50dcb59bbe

$ docker-compose up -d
loadb is up-to-date
reverse-proxy is up-to-date
nodehost2 is up-to-date
Creating nodehost1 ... done
```

Repeat procedure for node2.

```shell
$ cd node2/
$ vim app.js
$ docker build -t load-balancer_nodehost2 .
$ cd ..
$ docker-compose up -d
loadb is up-to-date
reverse-proxy is up-to-date
nodehost1 is up-to-date
Creating nodehost2 ... done
```

### Inside Node containers

```shell
root@2fda3c99b9d6:# curl nodehost2:4001
Hello World from 23ce97f3b2bbroot@2fda3c99b9d6

root@23ce97f3b2bb:# curl nodehost1:4000
Hello World from 2fda3c99b9d6root@23ce97f3b2bb
```

### On machine that hosts Docker stack

```shell
$ curl localhost:3000
Hello World from 2fda3c99b9d6 
curl localhost:3001
Hello World from 23ce97f3b2bb
```
