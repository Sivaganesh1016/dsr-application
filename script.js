// ==========================================
// DSR APPLICATION - JAVASCRIPT
// ==========================================


// ------------------------------------------
// EMPLOYEE MASTER
// ------------------------------------------

const employees = {

    "EMP001": {
        name: "Sharmila",
        password: "1234"
    },

    "EMP002": {
        name: "Kishore S",
        password: "1234"
    },

    "EMP003": {
        name: "Monoj",
        password: "1234"
    },

    "EMP004": {
        name: "Priya",
        password: "1234"
    },

    "EMP005": {
        name: "Ashok",
        password: "1234"
    },

    "EMP006": {
        name: "Harshini S",
        password: "1234"
    },

    "EMP007": {
        name: "Sivaganesh",
        password: "1234"
    },

    "EMP008": {
        name: "Preeti",
        password: "1234"
    },

    "EMP009": {
        name: "Harshini GN",
        password: "1234"
    },

    "EMP010": {
        name: "Shruti",
        password: "1234"
    },

    "EMP011": {
        name: "Rosi A",
        password: "1234"
    },

    "EMP012": {
        name: "Nithya",
        password: "1234"
    }

};


// ------------------------------------------
// LOGIN
// ------------------------------------------

function login() {

    const employeeId =
        document.getElementById("employeeId").value.trim();

    const password =
        document.getElementById("password").value.trim();


    // Check employee ID and password

    if (
        employees[employeeId] &&
        employees[employeeId].password === password
    ) {

        // Save employee information

        localStorage.setItem(
            "employeeId",
            employeeId
        );

        localStorage.setItem(
            "employeeName",
            employees[employeeId].name
        );


        // Open DSR page

        window.location.href = "dsr.html";

    }

    else {

        document.getElementById("loginMessage").textContent =
            "Invalid Employee ID or Password";

    }

}


// ------------------------------------------
// LOAD EMPLOYEE NAME ON DSR PAGE
// ------------------------------------------

const loggedInEmployeeName =
    localStorage.getItem("employeeName");


if (
    loggedInEmployeeName &&
    document.getElementById("employeeName")
) {

    document.getElementById("employeeName").value =
        loggedInEmployeeName;

}

// ==========================================
// PROJECT MASTER
// ==========================================

const projectMaster = {

    "Infosys Clean Up - Fixed": {
        category: "Fixed",
        target: 140,
        perHour: 19
    },

    "Infosys Engagement - Easy": {
        category: "Easy",
        target: 150,
        perHour: 20
    },

    "Infosys Engagement - Medium": {
        category: "Medium",
        target: 130,
        perHour: 17
    },

    "Infosys Engagement - Hard": {
        category: "Hard",
        target: 110,
        perHour: 15
    },

    "Direct Dial Append - Normal": {
        category: "Normal",
        target: 600,
        perHour: 80
    },

    "Email Append - Fixed": {
        category: "Fixed",
        target: 300,
        perHour: 40
    },

    "Event / BD Clean Up - Easy": {
        category: "Easy",
        target: 160,
        perHour: 21
    },

    "Event / BD Clean Up - Medium": {
        category: "Medium",
        target: 120,
        perHour: 16
    },

    "Event / BD Clean Up - Hard": {
        category: "Hard",
        target: 80,
        perHour: 11
    },

    "Augmentation Internal BD - Easy": {
        category: "Easy",
        target: 120,
        perHour: 16
    },

    "Augmentation Internal BD - Medium": {
        category: "Medium",
        target: 80,
        perHour: 11
    },

    "Augmentation Internal BD - Hard": {
        category: "Hard",
        target: 60,
        perHour: 8
    },

    "Account Profiling - Hard": {
        category: "Hard",
        target: 1,
        perHour: 0
    },

    "Others": {
        category: "Fixed",
        target: "Max",
        perHour: "Max"
    },

    "AMS Account Mapping": {
        category: "Medium",
        target: 100,
        perHour: 13.33333333
    },

    "Meeting": {
        category: "Normal",
        target: 1,
        perHour: 1
    },

    "Simrans Project - Augmentation": {
        category: "Medium",
        target: 100,
        perHour: 13
    },

    "ABM Database Augmentation (Invalid)": {
        category: "",
        target: 65,
        perHour: 9
    },

    "ABM Database Cleanup": {
        category: "",
        target: 200,
        perHour: 27
    },

    "ABM Database Augmentation (Mix)": {
        category: "Normal",
        target: 100,
        perHour: 13
    },

    "Eloque DB_Clean up": {
        category: "Easy",
        target: 150,
        perHour: 20
    },

    "ABM Database Augmentation (Valid)": {
        category: "Easy",
        target: 135,
        perHour: 18
    },

    "Infosys Clean Up - Very Easy": {
        category: "Very Easy",
        target: 180,
        perHour: 24
    },

    "Email Campaign - 500 Data": {
        category: "Very Easy",
        target: 500,
        perHour: 67
    },

    "Industry/Revenue": {
        category: "",
        target: 250,
        perHour: 33
    },

    "Events - LinkedIn Social Profiling": {
        category: "Medium",
        target: 75,
        perHour: 10
    },

    "Events - Reporting": {
        category: "Hard",
        target: "",
        perHour: ""
    },

    "Events - Cleanup": {
        category: "Medium",
        target: 150,
        perHour: 20
    },

    "Team Meeting": {
        category: "",
        target: 1,
        perHour: 1
    },

    "Client Meeting": {
        category: "",
        target: 1,
        perHour: 1
    },

    "HR Meeting": {
        category: "",
        target: 1,
        perHour: 1
    },

    "SFDC Review": {
        category: "",
        target: "",
        perHour: ""
    },

    "Engagement Review": {
        category: "",
        target: "",
        perHour: ""
    },

    "CRM Management": {
        category: "",
        target: "",
        perHour: ""
    },

    "Left Contact Review": {
        category: "",
        target: 300,
        perHour: 40
    },

    "Infosys Clean Up - SFDC Cleanup": {
        category: "Very Easy",
        target: 200,
        perHour: 27
    }

};

// ------------------------------------------
// LOAD PROJECT MASTER INTO DROPDOWN
// ------------------------------------------

if (document.getElementById("project")) {

    const projectDropdown =
        document.getElementById("project");

    Object.keys(projectMaster).forEach(function(projectName) {

        const option =
            document.createElement("option");

        option.value = projectName;

        option.textContent = projectName;

        projectDropdown.appendChild(option);

    });

}

// ------------------------------------------
// AUTO POPULATE CATEGORY, TARGET & PER HOUR
// ------------------------------------------

if (document.getElementById("project")) {

    document.getElementById("project").addEventListener("change", function () {

        const selectedProject = this.value;

        const projectData = projectMaster[selectedProject];

        if (projectData) {

            document.getElementById("category").value =
                projectData.category;

            document.getElementById("target").value =
                projectData.target;

            document.getElementById("perHour").value =
                projectData.perHour;

        } else {

            document.getElementById("category").value = "";

            document.getElementById("target").value = "";

            document.getElementById("perHour").value = "";

        }

    });

}

// ------------------------------------------
// CALCULATE WORKING HOURS & EXPECTED OUTPUT
// ------------------------------------------

function calculateWorkDetails() {

    const loginTime =
        document.getElementById("loginTime").value;

    const logoutTime =
        document.getElementById("logoutTime").value;

    const perHour =
        parseFloat(document.getElementById("perHour").value);

    if (!loginTime || !logoutTime || isNaN(perHour)) {

        document.getElementById("workingHours").value = "";
        document.getElementById("expectedOutput").value = "";

        return;
    }

    const login =
        new Date("1970-01-01T" + loginTime);

    const logout =
        new Date("1970-01-01T" + logoutTime);

    let difference =
        (logout - login) / (1000 * 60 * 60);

    // Handle overnight shift
    if (difference < 0) {
        difference += 24;
    }

    document.getElementById("workingHours").value =
        difference.toFixed(2);

    const expectedOutput =
        difference * perHour;

    document.getElementById("expectedOutput").value =
        Math.round(expectedOutput);

}

// ------------------------------------------
// LOGIN / LOGOUT TIME CHANGE
// ------------------------------------------

if (document.getElementById("loginTime")) {

    document.getElementById("loginTime")
        .addEventListener("change", calculateWorkDetails);

    document.getElementById("logoutTime")
        .addEventListener("change", calculateWorkDetails);

}
// ------------------------------------------
// CALCULATE ACHIEVEMENT %
// ------------------------------------------

function calculateAchievement() {

    const actualOutput =
        parseFloat(document.getElementById("output").value);

    const expectedOutput =
        parseFloat(document.getElementById("expectedOutput").value);

    if (
        isNaN(actualOutput) ||
        isNaN(expectedOutput) ||
        expectedOutput === 0
    ) {

        document.getElementById("achievement").value = "";

        return;
    }

    const achievement =
        (actualOutput / expectedOutput) * 100;

    document.getElementById("achievement").value =
        achievement.toFixed(2) + "%";

}
// ------------------------------------------
// OUTPUT CHANGE
// ------------------------------------------

if (document.getElementById("output")) {

    document.getElementById("output")
        .addEventListener("input", calculateAchievement);

}

// ==========================================
// SAVE DSR RECORD
// ==========================================
function submitDSR() {

    const employeeId = localStorage.getItem("employeeId") || "";

    const employeeName = document.getElementById("employeeName").value;
    const date = document.getElementById("date").value;
    const project = document.getElementById("project").value;
    const category = document.getElementById("category").value;
    const target = document.getElementById("target").value;
    const perHour = document.getElementById("perHour").value;
    const loginTime = document.getElementById("loginTime").value;
    const logoutTime = document.getElementById("logoutTime").value;
    const workingHours = document.getElementById("workingHours").value;
    const expectedOutput = document.getElementById("expectedOutput").value;
    const output = document.getElementById("output").value;
    const achievement = document.getElementById("achievement").value;
    const activity = document.getElementById("activity").value;

    // Check required fields
    if (
        !employeeName ||
        !date ||
        !project ||
        !loginTime ||
        !logoutTime ||
        !output
    ) {
        document.getElementById("message").textContent =
            "Please complete all required fields.";
        return;
    }

    // Data to send to Google Sheet
    const dsrRecord = {
        employeeId: employeeId,
        employeeName: employeeName,
        date: date,
        project: project,
        category: category,
        target: target,
        perHour: perHour,
        loginTime: loginTime,
        logoutTime: logoutTime,
        workingHours: workingHours,
        expectedOutput: expectedOutput,
        output: output,
        achievement: achievement,
        activity: activity
    };

    // Your Google Apps Script Web App URL
   const googleScriptURL =
"https://script.google.com/macros/s/AKfycbxIjo1LZM11FK81ChAhFV1C2PejmHIWczzEpJ7zh6v46Fyk7RfxVC92PGdMBa18NGIN/exec";

    // Show saving message
    document.getElementById("message").textContent =
        "Saving DSR...";

    fetch(googleScriptURL, {
        method: "POST",
        body: JSON.stringify(dsrRecord)
    })
    .then(response => response.json())
    .then(result => {

        if (result.success) {

            document.getElementById("message").textContent =
                "DSR submitted successfully!";

            // Clear form fields
            document.getElementById("project").value = "";
            document.getElementById("category").value = "";
            document.getElementById("target").value = "";
            document.getElementById("perHour").value = "";
            document.getElementById("loginTime").value = "";
            document.getElementById("logoutTime").value = "";
            document.getElementById("workingHours").value = "";
            document.getElementById("expectedOutput").value = "";
            document.getElementById("output").value = "";
            document.getElementById("achievement").value = "";
            document.getElementById("activity").value = "";

        } else {

            document.getElementById("message").textContent =
                "Error: " + result.message;
        }

    })
    .catch(error => {

        console.error("Error:", error);

        document.getElementById("message").textContent =
            "Unable to save DSR. Please try again.";
    });
}
    