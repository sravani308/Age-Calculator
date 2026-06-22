function calculateAge() {

    let dob = document.getElementById("dob").value;

    if (dob === "") {
        alert("Please select your Date of Birth");
        return;
    }

    let birthDate = new Date(dob);
    let today = new Date();

    let age = today.getFullYear() - birthDate.getFullYear();

    let monthDiff = today.getMonth() - birthDate.getMonth();

    if (
        monthDiff < 0 ||
        (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
        age--;
    }

    document.getElementById("result").innerHTML =
        "Your Age is " + age + " Years";
}