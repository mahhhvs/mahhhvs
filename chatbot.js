document.addEventListener("DOMContentLoaded", function () {
    const userInput = document.getElementById("user-input");
    const chatMessages = document.getElementById("chat-messages");

    userInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            const userMessage = userInput.value;
            addMessage("user", userMessage);

            const botResponse = getBotResponse(userMessage);

            addMessage("bot", botResponse);
            userInput.value = "";

            chatMessages.scrollTop = chatMessages.scrollHeight;
        }
    });

    function getBotResponse(userMessage) {
        if (userMessage.toLowerCase().includes("ola") ||
            userMessage.toLowerCase().includes("bom dia") ||
            userMessage.toLowerCase().includes("boa tarde")
        ) {
            return "bot: ola, em que podemos ajudar?";
        }

        else if (userMessage.toLowerCase().includes("quarto disponivel")) {
            return "bot: temos varios estilos de acomodação";
        }

        else if (userMessage.toLowerCase().includes("reservar hotel")) {
            return "bot: sua reserva foi confirmada";
        } else {
            return "bot: desculpe, nao entendi";
        }
    }

    function addMessage(sender, message) {
        const messageElement = document.createElement("div");
        messageElement.className = sender + "-message";
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
    }
});