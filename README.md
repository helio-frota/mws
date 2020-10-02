# mws

## My Weekly Status

![Alt screenshot](https://github.com/helio-frota/mws/raw/main/mws.png)


## Back-end

* Docker
* MySQL
* [TypeORM](https://github.com/typeorm/typeorm)
* [Express](https://github.com/expressjs/express)

## Front-end

* Terminal
* [Blessed](https://github.com/chjj/blessed)


### Setup and run

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