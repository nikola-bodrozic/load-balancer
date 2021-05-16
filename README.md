# nginex instances as LoadBalancer & proxy in front of two Node apps

`docker-compose up -d`

Proxy IP is at <http://public-ip> refresh to see hostname of docker container.

**/var/log/nginx/error.log** and **/var/log/nginx/access.log** are in **reverse_proxy/** folder on host

You can follow Nginx logs `tail -f reverse_proxy/access.log`

### Depolyment of new microservice

```shell
$ docker image ls
REPOSITORY                TAG                  IMAGE ID      
nodehost1   latest               4af15aa4ef44   

$ docker-compose rm -fs nodehost1
$ sed -i 's/aloha/howdy/g' node1/app.js
$ docker build -t nodehost1 node1/
```

Repeat procedure for node2.

```shell
$ docker-compose rm -fs nodehost2
$ sed -i 's/aloha/howdy/g' node2/app.js
$ docker build -t nodehost2 node2/
```

at the end

```shell
$ docker-compose up -d
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
