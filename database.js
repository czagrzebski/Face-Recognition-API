const database = {
    users: [
        {
            id: "123",
            name: "Creed",
            email: "czagrzebski@gmail.com",
            password: 'cookies',
            entries: 0,
            joined: new Date()
        },
        {
            id: "124",
            name: "Troy",
            email: "troyzag@gmail.com",
            password: 'icecream',
            entries: 0,
            joined: new Date()
        }
    ]
}

exports.database = database;