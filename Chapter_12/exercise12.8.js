const jsonData = {
    "people": [
        {
            "name": "Alice",
            "status": "active"
        },
        {
            "name": "Bob",
            "status": "inactive"
        }
    ]
};

function outputJsonData(json) {
    json.people.forEach(person => {
        console.log(`Name: ${person.name}, Status: ${person.status}`);
    });
}


outputJsonData(jsonData);
