const user_data;

function saveInfo (data) {
    console.log('saveInfo: ' + data);
    this.user_data = data; 
}

function returnFunc () {
    return user_data;
}