async function api() {
    const id = document.getElementById("id").value;
    const url = `https://jsonplaceholder.typicode.com/users/${id}`;

    await fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("name").value = data.name;
            document.getElementById("username").value = data.username;
            document.getElementById("email").value = data.email;
            document.getElementById("street").value = data.address.street;
            document.getElementById("suite").value = data.address.suite;
            document.getElementById("city").value = data.address.city;
            document.getElementById("zipcode").value = data.address.zipcode;
            document.getElementById("lat").value = data.address.geo.lat;
            document.getElementById("lng").value = data.address.geo.lng;
            document.getElementById("phone").value = data.phone;
            document.getElementById("website").value = data.website;
            document.getElementById("company").value = data.company.name;
            document.getElementById("catchPhrase").value = data.company.catchPhrase;
            document.getElementById("bs").value = data.company.bs;
        })
        .catch(error => console.log(error));
}

async function apiEmailSearch(){
    const email = document.getElementById("email").value;
    const url = `https://jsonplaceholder.typicode.com/users?email=${email}`;

    await fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("id").value = data[0].id;
            document.getElementById("name").value = data[0].name;
            document.getElementById("username").value = data[0].username;
            document.getElementById("email").value = data[0].email;
            document.getElementById("street").value = data[0].address.street;
            document.getElementById("suite").value = data[0].address.suite;
            document.getElementById("city").value = data[0].address.city;
            document.getElementById("zipcode").value = data[0].address.zipcode;
            document.getElementById("lat").value = data[0].address.geo.lat;
            document.getElementById("lng").value = data[0].address.geo.lng;
            document.getElementById("phone").value = data[0].phone;
            document.getElementById("website").value = data[0].website;
            document.getElementById("company").value = data[0].company.name;
            document.getElementById("catchPhrase").value = data[0].company.catchPhrase;
            document.getElementById("bs").value = data[0].company.bs;
        })
        .catch(error => console.log(error));
}