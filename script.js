const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const newQuoteBtn = document.getElementById('new-quote');

async function fetchQuote() {
    quoteText.textContent = "Loading quote...";
    authorText.textContent = "";

    try {
        const response = await fetch("https://motivation-quotes4.p.rapidapi.com/api", {
            method: "GET",
            headers: {
                "x-rapidapi-host": "motivation-quotes4.p.rapidapi.com",
                "x-rapidapi-key": "17ce0b8750mshb8d104ec3b74dd1p14f1c3jsn0d8e81ba24c6"
            }
        });

        const text = await response.text();
        console.log("API raw response:", text); // 🔍 Check what you get

        // Try to parse JSON (some APIs return a string inside JSON)
        if (text.startsWith("{")) {
            const data = JSON.parse(text);
            console.log("Parsed JSON:", data); // 🔍 Log full parsed object

            if (data.message) {
                quoteText.textContent = `"${data.message}"`;
                authorText.textContent = "— System";
            } else if (data.quote) {
                quoteText.textContent = `"${data.quote}"`;
                authorText.textContent = data.author ? `— ${data.author}` : "— Unknown";
            } else {
                quoteText.textContent = "Unexpected response format.";
                authorText.textContent = "— Error";
            }
        } else {
            // In case API returns raw quote string directly
            quoteText.textContent = `"${text}"`;
            authorText.textContent = "— Unknown";
        }
    } catch (error) {
        quoteText.textContent = "Failed to fetch quote.";
        authorText.textContent = "— System";
        console.error("Fetch error:", error);
    }
}

newQuoteBtn.addEventListener('click', fetchQuote);
fetchQuote();