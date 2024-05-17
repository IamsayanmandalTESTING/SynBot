function talk() {
    const version = "1.8"; 

    const user = document.getElementById("userBox").value.trim();
    const chatLog = document.getElementById("chatLog");

    chatLog.innerHTML += `User: ${user}<br>`; 

    const openaiApiKey = 'API_KEY'; 
    const prompt = user;
    const apiUrl = 'https://api.openai.com/v1/engines/text-davinci-003/completions';
    const headers = {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${openaiApiKey}`
    };
    const data = {
        prompt: prompt,
        max_tokens: 100,
        temperature: 0.7 
    };

    fetch(apiUrl, {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(data => {
        const response = data.choices[0].text.trim();
        chatLog.innerHTML += `SynBot: ${response} (version ${version})<br>`; 
    })
    .catch(error => {
        console.error('Error:', error);
        chatLog.innerHTML += `SynBot: Sorry, an error occurred. Please try again later. (version ${version})<br>`; 
    });
}
