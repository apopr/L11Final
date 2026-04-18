function enterName()
{
    let name = document.getElementById("name").value;
    let greeting = document.getElementById("greeting");

    greeting.innerHTML = "Thank you for your message  " + name + "!";
}