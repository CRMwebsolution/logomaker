document.getElementById('inputForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    
    const userInput = document.getElementById('userInput').value;
    const webhookUrl = 'https://n8n.southernautomate.com/webhook-test/209368a1-0237-4fe8-a163-4b3246e3fd8a';
    const imageContainer = document.getElementById('imageContainer');

    try {
        // Send text input to webhook
        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ text: userInput }),
        });

        if (!response.ok) {
            throw new Error('Webhook request failed');
        }

        // Get binary image data
        const blob = await response.blob();
        const imageUrl = URL.createObjectURL(blob);

        // Display image
        imageContainer.innerHTML = `<img src="${imageUrl}" alt="Webhook Response Image">`;
    } catch (error) {
        imageContainer.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
});
