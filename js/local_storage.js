const listUsers = [
    {
        'email': 'admin@gmail.com',
        'password': 'password'
    },
    {
        'email': 'chiemdu@gmail.com',
        'password': 'password'
    }
];
var storage = localStorage.getItem('listUsers');
if (storage == null) {
    const setjson = JSON.stringify(listUsers);
    localStorage.setItem('listUsers', setjson);
}
