// Nodes selected
const form = document.getElementById("userForm");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const saveBtn = document.getElementById("saveBtn");
const clearBtn = document.getElementById("clearBtn");
const output = document.getElementById("output");
const counter = document.getElementById("counter");

// Save function
saveBtn.addEventListener("click", () => {
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();

    if (!name || !age || isNaN(age) || age <= 0) {
        alertify.error("Please enter a valid name and a positive age.");
        return;
    }

    const userData = {name, age};
    localStorage.setItem("userData", JSON.stringify(userData));
    displayUserData();
    alertify.success("User data saved successfully!");
    console.log("User data saved:", userData);
});

// Clear data function
clearBtn.addEventListener("click", () => {
    localStorage.removeItem("userData");
    output.textContent = "Data cleared.";
    alertify.message("Local Storage has been cleared.");
    console.log("Local Storage cleared");
});

// Show user data function
function displayUserData() {
    const data = localStorage.getItem("userData");
    if (data) {
        const user = JSON.parse(data);
        output.textContent = `Name: ${user.name}, Age: ${user.age}`;
        console.log("User data loaded:", user);
    } else {
        output.textContent = "No stored user data.";
    }
}

// Update session counter function
function updateSessionCounter() {
    let count = parseInt(sessionStorage.getItem("interactionCount")) || 0;
    count++;
    sessionStorage.setItem("interactionCount", count);
    counter.textContent = count;
    console.log("Session interaction count:", count);
}

// Handle functions
displayUserData();
document.querySelectorAll("form button").forEach(button => button.addEventListener("click", updateSessionCounter));
