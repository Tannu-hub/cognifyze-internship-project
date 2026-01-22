
function changeBackground() {
    document.body.style.backgroundColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
}


//  this is task-5   API integration

function loadData() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
        .then(response => response.json())
        .then(data => {
            document.getElementById("apiData").innerHTML = `
                <h3>${data.title}</h3>
                <p>${data.body}</p>
            `;
        });
}




// validation ____________

document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    if (name === "" || email === "") {
        document.getElementById("formMessage").innerText = "All fields are required!";
        document.getElementById("formMessage").style.color = "red";
    } else {
        document.getElementById("formMessage").innerText = "Form submitted successfully!";
        document.getElementById("formMessage").style.color = "green";
    }
});

