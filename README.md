# This is an Express-TS Boilerplate 
In this boilerplate is a sctructure of boilerplate code in Typescript using express.
i focused on create a sctructure  with has login IdentityProviders and Users management 
[WORK IN PROGRESS]


## Getting Started 

First of all, you need node ``` >=14 ``` installed. 

After node installed, you need to install dependecies, then run on terminal: 

```bash
npm i
```

After the dependencies, run application: 

```bash
npm run dev
```

## About 
###  Endpoints

##### Login - POST /identity/login
Path: ```/identity/login```


Body
```json
{
    "username": "string",
    "password": "string"
}

```
##### Create User - POST /identity/registry

