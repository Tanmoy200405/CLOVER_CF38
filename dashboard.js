document.addEventListener("DOMContentLoaded", () => {
    const footballMatches = [
        { team1: "Red Lions", team2: "Wolves", time: "5:00 PM", score: "2 - 1" },
    ];

    const cricketMatches = [
        { team1: "Warriors", team2: "Titans", time: "3:00 PM", score: "250/8 - 240/9" },
    ];

    const badmintonMatches = [
        { team1: "Smashers", team2: "Shuttlers", time: "4:00 PM", score: "21-15, 18-21, 21-19" },
    ];

    const chessMatches = [
        { player1: "Magnus Carlsen", player2: "Ian Nepomniachtchi", time: "2:00 PM", score: "1 - 0" },
    ];

    const populateMatches = (matches, listId) => {
        const matchList = document.getElementById(listId);

        matches.forEach(match => {
            const li = document.createElement("li");
            li.innerHTML = `
                <strong>${match.team1 || match.player1} vs ${match.team2 || match.player2}</strong>
                <span>Score: ${match.score}</span>
                <span>Time: ${match.time}</span>
            `;
            li.querySelector("span:nth-child(2)").style.display = "block"; // Ensure score is on its own line
            li.querySelector("span:nth-child(3)").style.display = "block"; // Ensure time is below the score
            matchList.appendChild(li);
        });
    };

    // Populate matches for each section
    populateMatches(footballMatches, "footballList");
    populateMatches(cricketMatches, "cricketList");
    populateMatches(badmintonMatches, "badmintonList");
    populateMatches(chessMatches, "chessList");

    const chatInput = document.getElementById("chatInput");
    const sendButton = document.getElementById("sendButton");
    const messages = document.querySelector(".chat-box .messages");

    const sendMessage = () => {
        const messageText = chatInput.value.trim();
        if (messageText) {
            const message = document.createElement("div");
            message.classList.add("message");
            message.innerHTML = `<strong>You:</strong> ${messageText}`;
            messages.appendChild(message);
            chatInput.value = "";
            messages.scrollTop = messages.scrollHeight; // Auto-scroll to the bottom
        }
    };

    sendButton.addEventListener("click", sendMessage);

    chatInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendMessage();
        }
    });
});
