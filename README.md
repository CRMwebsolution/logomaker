# Webhook Image Test Website

A simple static website that sends user input to an n8n webhook and displays a binary image response.

## Setup
1. Clone this repository to your local machine.
2. Ensure the webhook URL in `script.js` matches your n8n webhook (`https://n8n.southernautomate.com/webhook-test/209368a1-0237-4fe8-a163-4b3246e3fd8a`).
3. Push the repository to GitHub or upload to `bolt.new` for testing.

## Usage
- Open `index.html` in a browser or deploy to `bolt.new`.
- Enter text in the input field and click "Submit".
- The text is sent to the n8n webhook, and the returned binary image is displayed below the form.

## File Structure
- `index.html`: Main webpage with form and image display.
- `styles.css`: Clean, minimal styling for the page.
- `script.js`: Handles form submission and image display.

## Notes
- The webhook must return a binary image (e.g., PNG, JPEG).
- Tested for static hosting compatibility (e.g., GitHub Pages, `bolt.new`).
- Ensure CORS is configured on the n8n webhook if required.
