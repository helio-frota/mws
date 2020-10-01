# mws
Playing with typescript typeorm and blessed 


```
docker pull mysql
docker run --name my-db -e MYSQL_ROOT_PASSWORD=password -p 3306:3306 -d mysql
docker container ls
docker exec -it container_id bash
mysql -u root -p <enter>
'password'
mysql> ALTER USER root IDENTIFIED WITH mysql_native_password BY 'password';
mysql> create database mws;
```

```
npm start
```

in other terminal

```
npm run form
```

![Alt screenshot](https://raw.githubusercontent.com/helio-frota/mws/master/mws.jpg)