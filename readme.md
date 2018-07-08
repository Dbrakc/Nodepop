# Nodepop

## Instalation

Install dependencies with:

```shell 
npm install
```

## Mongodb

### Run Mongodb

This application uses MongoDB. To start MongoDB use:

```shell
./bin/mongod --dbpath ./data/db --directoryperdb

```

### Introduce development data in MongoDb

To introuce development data example use:

```shell
npm run install_db
```

## Development

To start the application in development mode use:

```shell
npm run dev
```

## Cluster

To run cluster and optimize the server use:

```shel
npm run cluster
```

## Test clean code

To test clean code use:

```shell
npm run clen_code
```

## API Documentation

### Creating a user

To create a user, please post:

#### Request POST URL

http://localhost:3000/apiv1/users/adUsers

To introduce the user name, email and password (all required), you must introduce body, eg.:

#### Request body

```json
{
    "name": "fake_name",
    "email": "fake_email@example.com",
    "password": "fake_password"
}
```

#### Response example

```json
{
    "succes": true,
    "result": {
        "_id": "5b4238rqc12ad3403fa6fecb8",
        "email": "fake_email@example.com",
        "password": "x7jCfjlkjasdkfjrovEKt1LOo009SEGzgml90A=",
        "name": "fake_name",
        "__v": 0
    }
}
```

### Authentication

To authenticate a user, please post:

#### Request POST URL

http://localhost:3000/apiv1/users/login

To introduce the user email and password (all required), you must introduce body, eg.:

#### Request body

```json
{
    "email": "fake_email@example.com",
    "password": "fake_password"
}
```

#### Response example

```json
{
    "success": true,
    "token": "eyJhbGciOiJIUzI1NiIs6y35643IkpXVCJ9.eyJ1c2VyX2lkIjoiNWI0MWRmMDU2NDQwOTUwMjk2ZTg5MzBkIiwiaWF0IjoxNTMxMDY2MzQ3LCJleHAiOjE1MzEyMzkxNDd9.QxwAnfhsUnkf9pWzuALokFgowX9tYQ-3jSVeF15fmnc"
}
```

### Get Ads

To query ads, please get:

#### Request GET URL

http://localhost:3000/apiv1/ads

To introduce parameters for a custom sort, you must introduce query parameters, eg.:

#### Request query

**You must be authenticate**
*To authenticate ?token=fake_token*

**To filter names use:**

?name=fake_name

**To filter tags  use:**

?tags=motor

**To filter status use:**

?status=sell

**To filter price, you can use:**

* ?price=-50 price less than 50
* ?price=10- price greater than 10
* ?price=10-50 price betwenn 10 and 50

**To skip results use:**

?skip=2

**To sort results use:**

* ?sort=field to ascending sort
* ?sort=field to descending sort

**To take a limit use:**

?limit=2

**To choose only some fields use:**

* To include a field ?fields=name
* To exclude a field ?fields=-id



#### Response example

```json
{
    "succes": true,
    "result": [
        {
            "tags": [
                "motor",
                "mobile"
            ],
            "_id": "5b38b12d9f1d77072de27cc7",
            "name": "ad3",
            "status": "search",
            "price": 40.9,
            "photo": "/images/image3.jpg",
            "__v": 0
        },
        {
            "tags": [
                "motor",
                "mobile"
            ],
            "_id": "5b38b12d9f1d77072de27cc6",
            "name": "ad2",
            "status": "search",
            "price": 20.3,
            "photo": "/images/image2.jpg",
            "__v": 0
        },
        {
            "tags": [
                "work",
                "lifestyle"
            ],
            "_id": "5b38b12d9f1d77072de27cc5",
            "name": "ad1",
            "status": "sell",
            "price": 12.5,
            "photo": "/images/image1.jpg",
            "__v": 0
        }
    ]
}
```
### Get Ads Tags

To query Tags of the Ads, please get:

#### Request GET URL

http://localhost:3000/apiv1/tags


#### Response example

```json
{
    "succes": true,
    "result": [
        "work",
        "lifestyle",
        "motor",
        "mobile"
    ]
}
```

### GET Images

To get images use:

http://localhost:3000/images/fake_image.jpg










