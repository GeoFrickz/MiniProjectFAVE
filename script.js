document.getElementById("contactForm").addEventListener("submit", function(e){
    e.preventDefault();

    let nameInput = document.getElementById("name").value;
    
    if (nameInput.length < 3) {
        document.getElementById("nameValidator").innerText = "Name must be at least 3 characters.";
    }
    else {
        document.getElementById("nameValidator").innerText = null;
    }

    let messageInput = document.getElementById("message").value;
    let count = 1;
    for (let i=0; i<messageInput.length; i++){
        if (messageInput[i] == " "){
            count++;
        }
    }

    if (count < 3){
        document.getElementById("messageValidator").innerText = "Message must be at least 3 words.";
    }
    else {
        document.getElementById("messageValidator").innerText = null;
    }
    
    if (nameInput.length >= 3 && count >= 3){
        document.getElementById("contactForm").submit();
    }
});