# nginex as LoadBalancer in front of two Node apps

`docker-compose up`

LoadBalancer IP is <http://localhost:8080> refresh to see hostname of docker container.

**/var/log/nginx/error.log** and **/var/log/nginx/access.log** are mounted in **logs/** folder

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
