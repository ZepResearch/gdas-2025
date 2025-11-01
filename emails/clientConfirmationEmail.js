const ClientConfirmationEmail = (data) => {
    return `
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>We've Received Your Message - GDAS 2025</title>
      <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
          
          body {
              font-family: 'Inter', Arial, sans-serif;
              line-height: 1.6;
              color: #333333;
              background-color: #f0f4ff;
              margin: 0;
              padding: 0;
          }
          .container {
              max-width: 600px;
              margin: 20px auto;
              background-color: #ffffff;
              border-radius: 12px;
              overflow: hidden;
              box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }
          .header {
              background-color: #1565c0;
              color: #ffffff;
              padding: 30px 20px;
              text-align: center;
          }
          .header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: 700;
          }
          .content {
              padding: 30px 20px;
          }
          .notice {
              font-size: 15px;
              color: #333333;
              background-color: #e8f0ff;
              padding: 15px;
              border-radius: 6px;
              border-left: 3px solid #1565c0;
              margin-bottom: 20px;
              line-height: 1.6;
          }
          .summary {
              font-size: 16px;
              color: #333333;
              background-color: #f7fbff;
              padding: 20px;
              border-radius: 6px;
              border-left: 3px solid #1565c0;
              margin-bottom: 20px;
          }
          .summary ul {
              margin: 10px 0;
              padding-left: 20px;
          }
          .summary li {
              margin-bottom: 8px;
          }
          .message-box {
              background: #ffffff;
              border: 1px solid #e6eefc;
              padding: 15px;
              border-radius: 6px;
              white-space: pre-wrap;
              margin-bottom: 20px;
          }
          .footer {
              text-align: center;
              padding: 20px;
              background-color: #1565c0;
              color: #ffffff;
              font-size: 12px;
              border-top: 1px solid #e5e5e5;
          }
          @media only screen and (max-width: 600px) {
              .container {
                  margin: 0;
                  border-radius: 0;
              }
          }
      </style>
  </head>
  <body>
      <div class="container">
          <div class="header">
              <h1>Contact Request Received</h1>
          </div>
          <div class="content">
              <div class="notice">
                  Thank you for reaching out to the GDAS 2025 team. This email confirms we have received your message and a member of our team will reply as soon as possible.
              </div>

              <div class="summary">
                  <p><strong>Contact Summary</strong></p>
                  <ul>
                      <li><strong>Name:</strong> ${data.name || '—'}</li>
                      <li><strong>Email:</strong> ${data.email || '—'}</li>
                      <li><strong>Phone:</strong> ${data.phone || '—'}</li>
                      <li><strong>Country:</strong> ${data.country || '—'}</li>
                  </ul>
              </div>

              <div>
                  <p><strong>Your message</strong></p>
                  <div class="message-box">${data.message ? data.message : '—'}</div>
              </div>

              <div class="notice" style="background-color:#fff6e6; border-left-color:#ff9800;">
                  <p>What happens next:</p>
                  <ul>
                      <li>Our team will review your message and aim to respond within 2–3 business days.</li>
                      <li>If your request is urgent, please contact us directly at <a href="mailto:info@gdas2025.com" style="color:#1565c0; text-decoration:none;">info@gdas2025.com</a>.</li>
                  </ul>
              </div>

              <p>Best regards,<br>GDAS 2025 Support Team</p>
          </div>

          <div class="footer">
              This is an automated confirmation of your contact request to GDAS 2025. Please do not reply to this email.
          </div>
      </div>
  </body>
  </html>
    `;
  };
  
  export default ClientConfirmationEmail;