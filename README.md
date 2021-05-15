# nginex as LoadBalancer and node as web app

## Node containers

`docker build -t nodehost1 node1`
`docker build -t nodehost2 node2`

`docker run -d -p 3000:4000 --name nodehost1 nodehost1`
`docker run -d -p 3001:4001 --name nodehost2 nodehost2`


```shell
$ curl localhost:3000
Hello World from 968919169dd0
$ curl localhost:3001
Hello World from 7bee901c46e9
```

## Loadbalancer

`docker build -t loadb .`
`docker run -d -p 8080:8080 --name loadb loadb`
