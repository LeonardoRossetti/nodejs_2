Client <- PROTOCOL -> Server <br>
	Browser -> Request -> Server <br> 	
	Browser <- Response <- Server

```
npm init
```
```
npm i express -save
```
```
npm i ejs --save
```
```
npm i -g nodemon
```
```
npm i mysql --save
```
### Using the 'Consign' it is possible include routes dynamically on app. Consign scan the specific folders and make the routes automatically.
```
npm i consign --save
```



## To execute MySQL commands:
Installed manual executable of mysql too.<br>
Enter on **CMD** IN: C:\Program Files\MySQL\MySQL Server 5.7\bin <br>
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
`insert into noticias(titulo, noticia)values('title of the notice', 'content of the notice');`<br>
`select * from noticias;`<br>


Curso de nodejs posusi um [grupo no Facebook](https://www.facebook.com/groups/458536931149217/)