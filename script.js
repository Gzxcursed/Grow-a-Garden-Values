
const pets = [{'name': 'Mimic Octopus', 'value': '25T', 'demand': 9, 'status': 'OVER'}, {'name': 'Raccoon', 'value': '22.5T', 'demand': 9, 'status': 'OVER'}, {'name': 'Disco Bee', 'value': '20T', 'demand': 10, 'status': 'OVER'}, {'name': 'Dragonfly', 'value': '13T', 'demand': 10, 'status': 'FAIR'}, {'name': 'Queen Bee', 'value': '6T', 'demand': 9, 'status': 'OVER'}, {'name': 'Bear Bee', 'value': '3T', 'demand': 9, 'status': 'FAIR'}, {'name': 'Phoenix Ant', 'value': '7T', 'demand': 8, 'status': 'OVER'}, {'name': 'Mega Mantis', 'value': '8T', 'demand': 8, 'status': 'FAIR'}, {'name': 'Albino Owl', 'value': '9T', 'demand': 9, 'status': 'OVER'}, {'name': 'Cyber Bee', 'value': '10T', 'demand': 10, 'status': 'OVER'}, {'name': 'Butterfly', 'value': '15T', 'demand': 6, 'status': 'FAIR'}, {'name': 'Moon Cat', 'value': '800B', 'demand': 8, 'status': 'OVER'}, {'name': 'Red Fox', 'value': '850B', 'demand': 8, 'status': 'OVER'}, {'name': 'Scarlet Macaw', 'value': '4T', 'demand': 8, 'status': 'OVER'}, {'name': 'Chicken Zombie', 'value': '1T', 'demand': 7, 'status': 'FAIR'}, {'name': 'Night Owl', 'value': '900B', 'demand': 7, 'status': 'FAIR'}, {'name': 'Echo Frog', 'value': '700B', 'demand': 6, 'status': 'FAIR'}, {'name': 'Giant Ant', 'value': '650B', 'demand': 6, 'status': 'FAIR'}, {'name': 'Red Giant Ant', 'value': '900B', 'demand': 7, 'status': 'FAIR'}, {'name': 'Praying Mantis', 'value': '1T', 'demand': 7, 'status': 'FAIR'}, {'name': 'Sea Otter', 'value': '8M', 'demand': 6, 'status': 'FAIR'}, {'name': 'Cow', 'value': '2M', 'demand': 6, 'status': 'FAIR'}, {'name': 'Sea Turtle', 'value': '8M', 'demand': 6, 'status': 'FAIR'}, {'name': 'Orangutan', 'value': '10M', 'demand': 6, 'status': 'FAIR'}, {'name': 'Toucan', 'value': '4M', 'demand': 6, 'status': 'FAIR'}, {'name': 'Flamingo', 'value': '3M', 'demand': 6, 'status': 'FAIR'}, {'name': 'Polar Mole', 'value': '600B', 'demand': 5, 'status': 'FAIR'}, {'name': 'Raven', 'value': '650B', 'demand': 5, 'status': 'FAIR'}, {'name': 'Lynx', 'value': '700B', 'demand': 6, 'status': 'FAIR'}, {'name': 'Capybara', 'value': '5M', 'demand': 6, 'status': 'FAIR'}, {'name': 'Spooky Goat', 'value': '7M', 'demand': 6, 'status': 'FAIR'}, {'name': 'Tropical Frog', 'value': '8M', 'demand': 6, 'status': 'FAIR'}, {'name': 'Aqua Cat', 'value': '4M', 'demand': 5, 'status': 'FAIR'}, {'name': 'Honey Badger', 'value': '6M', 'demand': 6, 'status': 'FAIR'}, {'name': 'Panda', 'value': '7M', 'demand': 5, 'status': 'FAIR'}, {'name': 'Frog', 'value': '8B', 'demand': 5, 'status': 'FAIR'}, {'name': 'Hedgehog', 'value': '5B', 'demand': 5, 'status': 'FAIR'}, {'name': 'Pig', 'value': '500K', 'demand': 5, 'status': 'FAIR'}, {'name': 'Spotted Deer', 'value': '300K', 'demand': 4, 'status': 'FAIR'}, {'name': 'Orange Tabby', 'value': '400K', 'demand': 4, 'status': 'FAIR'}, {'name': 'Monkey', 'value': '800K', 'demand': 5, 'status': 'FAIR'}, {'name': 'Chinchilla', 'value': '1M', 'demand': 5, 'status': 'FAIR'}, {'name': 'Blue Jay', 'value': '1.5M', 'demand': 5, 'status': 'FAIR'}, {'name': 'Bat', 'value': '1.3M', 'demand': 5, 'status': 'FAIR'}, {'name': 'Hamster', 'value': '2M', 'demand': 5, 'status': 'FAIR'}, {'name': 'Parrot', 'value': '2.2M', 'demand': 5, 'status': 'FAIR'}, {'name': 'Peacock', 'value': '3M', 'demand': 5, 'status': 'FAIR'}, {'name': 'Walrus', 'value': '3.2M', 'demand': 5, 'status': 'FAIR'}, {'name': 'Penguin', 'value': '4M', 'demand': 5, 'status': 'FAIR'}, {'name': 'Giraffe', 'value': '4.5M', 'demand': 5, 'status': 'FAIR'}, {'name': 'Bunny', 'value': '40K', 'demand': 2, 'status': 'UNDER'}, {'name': 'Dog', 'value': '30K', 'demand': 1, 'status': 'UNDER'}, {'name': 'Cat', 'value': '20K', 'demand': 1, 'status': 'UNDER'}, {'name': 'Chick', 'value': '50K', 'demand': 2, 'status': 'UNDER'}, {'name': 'Beaver', 'value': '60K', 'demand': 3, 'status': 'UNDER'}, {'name': 'Mouse', 'value': '35K', 'demand': 2, 'status': 'UNDER'}, {'name': 'Squirrel', 'value': '40K', 'demand': 3, 'status': 'UNDER'}, {'name': 'Snake', 'value': '45K', 'demand': 3, 'status': 'UNDER'}, {'name': 'Toad', 'value': '50K', 'demand': 3, 'status': 'UNDER'}, {'name': 'Duck', 'value': '60K', 'demand': 3, 'status': 'UNDER'}, {'name': 'Goose', 'value': '70K', 'demand': 3, 'status': 'UNDER'}, {'name': 'Mole', 'value': '65K', 'demand': 3, 'status': 'UNDER'}, {'name': 'Cricket', 'value': '55K', 'demand': 3, 'status': 'UNDER'}, {'name': 'Snail', 'value': '50K', 'demand': 2, 'status': 'UNDER'}, {'name': 'Ant', 'value': '45K', 'demand': 2, 'status': 'UNDER'}, {'name': 'Lizard', 'value': '48K', 'demand': 2, 'status': 'UNDER'}];

function renderTable(data) {
    const tbody = document.querySelector("#petTable tbody");
    tbody.innerHTML = "";
    data.forEach(pet => {
        const row = `<tr>
            <td>${pet.name}</td>
            <td>${pet.value}</td>
            <td>${pet.demand}/10</td>
            <td>${pet.status}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

document.getElementById("searchBar").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const filtered = pets.filter(pet => pet.name.toLowerCase().includes(query));
    renderTable(filtered);
});

function sortByValue() {
    const sorted = [...pets].sort((a, b) => parseFloat(b.value) - parseFloat(a.value));
    renderTable(sorted);
}

function sortByDemand() {
    const sorted = [...pets].sort((a, b) => b.demand - a.demand);
    renderTable(sorted);
}

renderTable(pets);
