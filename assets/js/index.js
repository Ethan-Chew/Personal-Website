// function navBar() {
//     const x = document.getElementById("Small Nav");
//     if (x.className.indexOf("w3-show") == -1) {
//         x.className += " w3-show";
//     } else {
//         x.className = x.className.replace(" w3-show", "");
//     }
// }

function hideSchoolWorks() {
    const element = document.getElementById("schProjContainer");
    const btnToggle = document.getElementById("hideShowSP");
    const expandNotif = document.getElementById("expandText");

    if (element.style.display === "none") {
        element.style.display = "block";
        btnToggle.classList.add("fa-arrow-circle-up")
        btnToggle.classList.remove("fa-arrow-circle-down")
        expandNotif.style.display = "none";
    } else {
        element.style.display = "none";
        btnToggle.classList.remove("fa-arrow-circle-up")
        btnToggle.classList.add("fa-arrow-circle-down")
        expandNotif.style.display = "block";
    }
}

function hideiOSApps() {
    const element = document.getElementById("iOSAppContainer");
    const btnToggle = document.getElementById("hideShowApp");
    const expandNotif = document.getElementById("expandText1");

    if (element.style.display === "none") {
        element.style.display = "block";
        btnToggle.classList.add("fa-arrow-circle-up")
        btnToggle.classList.remove("fa-arrow-circle-down")
        expandNotif.style.display = "none";
    } else {
        element.style.display = "none";
        btnToggle.classList.remove("fa-arrow-circle-up")
        btnToggle.classList.add("fa-arrow-circle-down")
        expandNotif.style.display = "block";
    }
}

function hideDiscBot() {
    const element = document.getElementById("discBotContainer");
    const btnToggle = document.getElementById("hideShowBot");
    const expandNotif = document.getElementById("expandText2");

    if (element.style.display === "none") {
        element.style.display = "block";
        btnToggle.classList.add("fa-arrow-circle-up")
        btnToggle.classList.remove("fa-arrow-circle-down")
        expandNotif.style.display = "none";
    } else {
        element.style.display = "none";
        btnToggle.classList.remove("fa-arrow-circle-up")
        btnToggle.classList.add("fa-arrow-circle-down")
        expandNotif.style.display = "block";
    }
}

function hidePJ() {
    const element = document.getElementById("personalProjContainer");
    const btnToggle = document.getElementById("hideShowPJ");
    const expandNotif = document.getElementById("expandText3");

    if (element.style.display === "none") {
        element.style.display = "block";
        btnToggle.classList.add("fa-arrow-circle-up")
        btnToggle.classList.remove("fa-arrow-circle-down")
        expandNotif.style.display = "none";
    } else {
        element.style.display = "none";
        btnToggle.classList.remove("fa-arrow-circle-up")
        btnToggle.classList.add("fa-arrow-circle-down")
        expandNotif.style.display = "block";
    }
}

function toggleMobileHam(obj) {
    obj.classList.toggle("hamburgTransition");
}