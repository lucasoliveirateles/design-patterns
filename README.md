# Design Patterns

### Requirements

1. Node.js

2. Docker (PostgreSQL)

3. Postbird 

4. Adonisjs

5. Yarn

6. Insomnia

### Start app

1. Copy the ".env.example" to ".env"
```
-> ~/cp .env.example .env
```

2. Edit ".env"
```
DB_CONNECTION=pg
```

3. Install packages
```
-> ~/cd api

-> ~/yarn
```

4. Run application && migrations
```
-> ~/adonis serve --dev

-> ~/adonis migration:run
```

5. Import Insomnia settings 

![import](https://github.com/teles1g/design-patterns/blob/master/images/import.png)


## Table Data Gateway

At some point we need to store our application information in an external medium, such as a relational database. For that, we will need to build an interface that maintains the most transparent access possible to this external resource.

There are several ways to organize classes for accessing data. The simplest way is to have a class to handle access to each table in the database, which we call a gateway. A gateway is an interface that communicates with an external resource hiding its details. So the application will only need to know this interface to manipulate the information.

The purpose of the design pattern Table Data Gateway is to offer a communication interface with the database that allows the insertion, alteration, deletion and search of records.

In the following program, we are creating the ProductGateway class. This class, which implements the Table Data Gateway pattern design, contains methods for store (store), search (find, all), update (update) and delete (delete) records in the database. First of all, it is necessary to create a method to receive the active connection (setConnection). This method implements a dependency injection, since the other methods of the class will use the incoming connection (this.database) to perform operations with the database

However, a Table Data Gateway was not designed to be used directly by the application, as its role is only to transport data. Our application needs a domain object that, in addition to carrying data, also offers business methods, which are methods used by the application to listen to business processes.

See the example below:

<p align="center">
  <img src="https://github.com/teles1g/design-patterns/blob/master/images/gateway.png?raw=true" alt="Sublime's custom image"/>
</p>

#### Util

Node.js: https://nodejs.org/en/

Docker: https://docs.docker.com/

PostgreSQL: https://hub.docker.com/_/postgres

Postbird: https://www.electronjs.org/apps/postbird

Adonisjs: https://adonisjs.com/

Yarn: https://classic.yarnpkg.com/lang/en/

Insominia: https://insomnia.rest/