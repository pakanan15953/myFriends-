//pakanan tantiwut
//6309680061

// Generate a random number of friends (1-9) and display it
const numFriends = Math.floor(Math.random() * 9) + 1;
document.getElementById("numFriends").textContent = numFriends;

// Function to add input fields for friends' nicknames and ages
for (let i = 1; i <= numFriends; i++) {
    const friendDiv = document.createElement("div");
    friendDiv.innerHTML = `
        <label for="nickname${i}">Nickname:</label>
        <input type="text" id="nickname${i}" name="nickname${i}">
        <label for="age${i}">Age:</label>
        <input type="number" id="age${i}" name="age${i}">
    `;
    document.getElementById("friendsContainer").appendChild(friendDiv);
}

// Function to calculate total age
function calculateTotalAge() {
    let totalAge = 0;
    for (let i = 1; i <= numFriends; i++) {
        const age = parseInt(document.getElementById(`age${i}`).value);
        if (!isNaN(age)) {
            totalAge += age;
        }
    }
    alert(`Total age of all friends: ${totalAge}`);
}

// Function to calculate average age
function calculateAverageAge() {
    let totalAge = 0;
    let numValidAges = 0;
    for (let i = 1; i <= numFriends; i++) {
        const age = parseInt(document.getElementById(`age${i}`).value);
        if (!isNaN(age)) {
            totalAge += age;
            numValidAges++;
        }
    }
    const averageAge = numValidAges > 0 ? totalAge / numValidAges : 0;
    alert(`Average age of all friends: ${averageAge.toFixed(2)}`);
}

// Function to find youngest friend
function findYoungestFriend() {
    let minAge = Infinity;
    let youngestFriends = [];

    for (let i = 1; i <= numFriends; i++) {
        const age = parseInt(document.getElementById(`age${i}`).value);
        const nickname = document.getElementById(`nickname${i}`).value;
        if (!isNaN(age)) {
            if (age < minAge) {
                minAge = age;
                youngestFriends = [{ name: nickname, age: age }];
            } else if (age === minAge) {
                youngestFriends.push({ name: nickname, age: age });
            }
        }
    }

    if (youngestFriends.length === 1) {
        alert(`Youngest friend: ${youngestFriends[0].name}, Age: ${youngestFriends[0].age}`);
    } else if (youngestFriends.length > 1) {
        let output = "Youngest friends:";
        youngestFriends.forEach((friend) => {
            output += `\n${friend.name}, Age: ${friend.age}`;
        });
        alert(output);
    } else {
        alert("No valid age input");
    }

}

// Function to find oldest friend
function findOldestFriend() {
    let maxAge = -Infinity;
    let oldestFriends = [];

    for (let i = 1; i <= numFriends; i++) {
        const age = parseInt(document.getElementById(`age${i}`).value);
        const nickname = document.getElementById(`nickname${i}`).value;
        if (!isNaN(age)) {
            if (age > maxAge) {
                maxAge = age;
                oldestFriends = [{ name: nickname, age: age }];
            } else if (age === maxAge) {
                oldestFriends.push({ name: nickname, age: age });
            }
        }
    }

    if (oldestFriends.length === 1) {
        alert(`Oldest friend: ${oldestFriends[0].name}, Age: ${oldestFriends[0].age}`);
    } else if (oldestFriends.length > 1) {
        let output = "Oldest friends:";
        oldestFriends.forEach((friend) => {
            output += `\n${friend.name}, Age: ${friend.age}`;
        });
        alert(output);
    } else {
        alert("No valid age input");
    }
}

// Function to reset the page
function reset() {
const friendsContainer = document.getElementById("friendsContainer");
while (friendsContainer.firstChild) {
    friendsContainer.removeChild(friendsContainer.firstChild);
}

// Generate a new random number of friends (1-9) and display it
const numFriends = Math.floor(Math.random() * 9) + 1;
document.getElementById("numFriends").textContent = numFriends;

for (let i = 1; i <= numFriends; i++) {
    const friendDiv = document.createElement("div");
    friendDiv.innerHTML = `
        <label for="nickname${i}">Nickname:</label>
        <input type="text" id="nickname${i}" name="nickname${i}">
        <label for="age${i}">Age:</label>
        <input type="number" id="age${i}" name="age${i}">
    `;
    friendsContainer.appendChild(friendDiv);
}
}
