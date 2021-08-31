// Identify Object Model

/*
    USER
        -name
        -id
        -email
        -password
        -birthday
        -phoneno
        
    POST
        -title
        -body
        -[comments]
        -likes
        -createdTime
        -updateTime     
*/

// Create model URI

/*
    USERS
        GET         https:example/api/users
        POST        https:example/api/users 

        GET         https:example/api/users/:id
        PUT/PATCH   https:example/api/users/:id
        DELETE      https:example/api/users/:id

    POSTS
        GET         https:example/api/posts
        POST        https:example/api/posts

        GET         https:example/api/posts/:id
        PUT/PATCH   https:example/api/posts/:id
        DELETE      https:example/api/posts/:id
*/

// Determine Representation
/* 
    [
       {
            name : 'Akash'
            id : 1
            email : 'sksitfirm@gmail.com'
            password : 'pass1234'
            phoneno : '01766996853'
            birthday : '01/02/1980'
        },
        {
            name : 'Robin'
            id : 2
            email : 'sksitfirm@gmail.com'
            password : 'pass1234'
            phoneno : '01766996853'
            birthday : '01/02/1980'
        } 
    ]
*/

// Single Date Representation

/*
    {
        name : 'Akash'
        id : 1
        email : 'sksitfirm@gmail.com'
        password : 'pass1234'
        phoneno : '01766996853'
        birthday : '01/02/1980'
    }
*/

// JSON View {JavaScript Object Notation}

/* 
    users: [
                {
                    "name"      : 'Akash'
                    "id"        : 1,
                    "email"     : 'sksitfirm@gmail.com',
                    "password"  : 'pass1234',
                    "phoneno"   : '01766996853',
                    "birthday"  : '01/02/1980'
                },
                {
                    "name"      : 'Robin'
                    "id"        : 2,
                    "email"     : 'sksitfirm@gmail.com',
                    "password"  : 'pass1234',
                    "phoneno"   : '01766996853',
                    "birthday"  : '01/02/1980'
                } 
            ]
*/