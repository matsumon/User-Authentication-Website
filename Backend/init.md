## CS340-DBRPOJECT API

# Purpose
This component is to provide a API interface for the following
- Create User  - (nicholas)
- Update User  - (brian)
- Read User data  - (brian)
- Delete user  - (brian)

- Authenticate a User (create a user token) - (nicholas)
- Validate a User Token - (nicholas)

- Renew User Token (create a new token for a session, requested by a user) - (brian)
- Revoke User Token ("sign out" - destroy a token on command) - (brian)
- [DONE] Credential Handling operations - (brian)
- [DONE] Create Session API interface - (brian)


# Installation


# Operation

node init.js

# Authors
- smithb22@oregonstate.edu


# Technologies Stack
Application is implemented as a pure node.js application using express where appropriate.

# notes
Passwords must be limited to 30 char max or bcrypt will cut it short

# API Data structures

GENERAL JSON REQUEST FORMAT:
{
    username: "",
    token: "",
    operation_name:"",
    task_data:{
        what ever data needed for task
        key value pairs for the task
    }
}

post
json in body


LOG ON REQUEST JSON
{
    username: "",
    token: NULL,
    operation_name: "LOGON"
    task_data:{
        password: "",
        role: ""
    }
}

API Response Format