//if & else if statements
let userRole = "admin";
let accessLevel;

if (userRole === "admin") {
    accessLevel = "Full access granted";
} else if (userRole === "manager") {
    accessLevel = "Limited access granted";
} else {
    accessLevel = "No access granted";
}

console.log("Access level: " + accessLevel);

//nested if statment
let isLoggedIn = true;
let userMessage;

if (isLoggedIn) {
    if (userRole === "admin") {
        userMessage = "Welcome, Admin!";
    } else {
        userMessage = "Welcome, User!";
    }
} else {
    userMessage = "Please log in to access the system.";
}

console.log("User message: " + userMessage);

//switch statement
let userType = "subscriber";
let userCategory;

switch (userType) {
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log("User category: " + userCategory);

//Ternary operator

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "authenticated" : "not authenticated";

console.log("Authentication status: " + authenticationStatus);

let individualRole = "Enrolled Member";

switch (individualRole) {
    case "Employee":
        console.log("This individual is an employee and authorized to have the dietary services.");
        break;
    case "Enrolled Member":
        console.log("This individual is an enrolled member and authorized to have dietary services and 1-on-1 interaction with a dietian.");
        break;
    case "Subscriber":
        console.log("This individual is a subsciber and has partial access to the dietary services.");
        break;
    default:
        console.log("Please enroll or subscribe first to avail this facility.");

}
