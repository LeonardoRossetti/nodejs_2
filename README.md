Client <- PROTOCOL -> Server <br>
	Browser -> Request -> Server <br> 	
	Browser <- Response <- Server

```
npm init
```
```
npm install express -save
```
```
npm install ejs --save
```
```
npm install -g nodemon
```
```
npm install mysql --save
```

Installed manual executable of mysql too.

**To execute MySQL commands:** <br>
Enter on CMD IN: C:\Program Files\MySQL\MySQL Server 5.7\bin> <br>
And execute: mysql -u root -p<br>
`show databases;` <br>
`create database portal_noticias;` <br>
`use portal_noticias;` <br>
`show tables;` <br>
``` 
create table noticias(
	id_noticia int not null primary key auto_increment,
	titulo varchar(100),
	noticia text,
	data_criacao timestamp default current_timestamp);
```

Curso de nodejs posusi um [grupo no Facebook](https://www.facebook.com/groups/458536931149217/)