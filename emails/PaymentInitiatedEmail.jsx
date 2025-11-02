const RegistrationEmailTemplate = (data) => {
  const isAdmin = data.recipient === "admin"
  const currencySymbol = data.currency === "USD" ? "$" : "€"

  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${isAdmin ? "New Registration Payment Initiated" : "Your GDAS2025 Registration Payment Initiated"}</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
          
          body {
            font-family: 'Inter', sans-serif;
            background-color: #eff6ff;
            margin: 0;
            padding: 0;
            color: #1e40af;
          }
          
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          
          .header {
            text-align: center;
            margin-bottom: 30px;
          }
          
          .logo {
            margin-bottom: 20px;
          }
          
          .title {
            font-size: 24px;
            font-weight: 700;
            margin-bottom: 10px;
            color: #1d4ed8;
          }
          
          .card {
            background-color: #ffffff;
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 20px;
            border: 1px solid #bfdbfe;
            box-shadow: 0 2px 10px rgba(29, 78, 216, 0.1);
            position: relative;
            overflow: hidden;
          }
          
          .card::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            height: 4px;
            background: linear-gradient(90deg, #1d4ed8, #2563eb);
          }
          
          .section-title {
            font-size: 18px;
            font-weight: 600;
            margin-bottom: 15px;
            color: #1d4ed8;
          }
          
          .detail-row {
            display: flex;
            justify-content: space-between;
            margin-bottom: 10px;
            padding-bottom: 10px;
            border-bottom: 1px solid #bfdbfe;
          }
          
          .detail-row:last-child {
            border-bottom: none;
          }
          
          .detail-label {
            color: #1e40af;
            font-weight: 500;
          }
          
          .detail-value {
            color: #1d4ed8;
            font-weight: 600;
          }
          
          .highlight {
            background-color: #dbeafe;
            padding: 15px;
            border-radius: 8px;
            margin-top: 20px;
            border-left: 4px solid #2563eb;
            color: #1e40af;
          }
          
          .highlight p {
            color: #1e40af;
            margin: 0;
          }
          
          .button {
            display: inline-block;
            background: linear-gradient(135deg, #1d4ed8, #2563eb);
            color: white;
            font-weight: bold;
            padding: 12px 24px;
            border-radius: 50px;
            text-decoration: none;
            margin-top: 20px;
            text-align: center;
            transition: all 0.3s ease;
          }
          
          .button:hover {
            background: linear-gradient(135deg, #1e3a8a, #1d4ed8);
            transform: translateY(-2px);
          }
          
          .footer {
            text-align: center;
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px solid #bfdbfe;
            color: #1e40af;
            font-size: 14px;
          }
          
          .grid-pattern {
            background-image: radial-gradient(rgba(29, 78, 216, 0.1) 1px, transparent 1px);
            background-size: 20px 20px;
          }
          
          .card p, .card li {
            color: #1e40af;
          }
          
          ul {
            padding-left: 20px;
          }
          
          li {
            margin-bottom: 8px;
          }
          
          a {
            color: #1d4ed8;
            text-decoration: none;
            font-weight: 500;
          }
          
          a:hover {
            text-decoration: underline;
          }

          .conference-header {
            background: linear-gradient(135deg, #1d4ed8, #2563eb);
            color: white;
            padding: 20px;
            border-radius: 12px;
            text-align: center;
            margin-bottom: 20px;
          }

          .conference-title {
            font-size: 20px;
            font-weight: 700;
            margin-bottom: 5px;
          }

          .conference-subtitle {
            font-size: 16px;
            opacity: 0.9;
            margin-bottom: 10px;
          }

          .conference-details {
            font-size: 14px;
            opacity: 0.8;
          }
        </style>
      </head>
      <body class="grid-pattern">
        <div class="container">
          <div class="header">
            
            <div class="conference-header">
              <div class="conference-title">GDAS2025</div>
              <div class="conference-subtitle">Global Defence and Aviation Skills Conference 2025</div>
              <div class="conference-details">Monday - Tuesday, 08-09 December 2025 | Selangor/Kuala Lumpur, Malaysia</div>
            </div>
            <div class="title">
              ${isAdmin ? "New Registration Payment Initiated" : "Your Registration Payment Initiated"}
            </div>
          </div>
          
          <div class="card">
            <div class="section-title">Registration Payment Details</div>
            
            <div class="detail-row">
              <span class="detail-label">Registration Type:</span>
              <span class="detail-value">${data.ticket_category} - ${data.ticket_name}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Order ID:</span>
              <span class="detail-value">${data.order_id}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Amount:</span>
              <span class="detail-value">${currencySymbol}${data.amount}</span>
            </div>
            
            ${
              isAdmin
                ? `
            <div class="section-title" style="margin-top: 20px;">Registrant Information</div>
            
            <div class="detail-row">
              <span class="detail-label">Name:</span>
              <span class="detail-value">${data.billing_name}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Email:</span>
              <span class="detail-value">${data.billing_email}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Phone:</span>
              <span class="detail-value">${data.billing_tel}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Organization:</span>
              <span class="detail-value">${data.billing_organization || "Not provided"}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Designation:</span>
              <span class="detail-value">${data.billing_designation || "Not provided"}</span>
            </div>
            
            <div class="detail-row">
              <span class="detail-label">Address:</span>
              <span class="detail-value">${data.billing_address}, ${data.billing_city}, ${data.billing_state}, ${
                data.billing_zip
              }, ${data.billing_country}</span>
            </div>
            `
                : `
            <div class="highlight">
              <p>Your registration payment for GDAS2025 has been initiated. Please note that your registration is not complete until payment is confirmed.</p>
            </div>
            
           
            `
            }
          </div>
          
          ${
            isAdmin
              ? `
          <div class="highlight">
            <p>This is a notification of a new registration payment initiated for the Global Defence and Aviation Skills Conference 2025, December 8th-9th, 2025, Selangor/Kuala Lumpur, Malaysia.</p>
          </div>
          `
              : `
          <div class="card">
            <div class="section-title">Payment Status</div>
            <p>Your payment is currently being processed. You will receive a confirmation email once your payment is complete. If you do not receive a confirmation within 24 hours, please contact our support team.</p>
            
            <div class="section-title" style="margin-top: 20px;">Conference Theme</div>
            <p><strong>Empowering the Future Aviation: Advancing TVET for World-Class Military and Aviation Experts</strong></p>
            <p>The <strong>Global Defence and Aviation Skills Conference 2025</strong> brings together defence professionals, aviation experts, educators, and industry leaders to advance Technical and Vocational Education and Training (TVET) in the military and aviation sectors.</p>
            
            <div class="highlight">
              <p>The conference will take place on <strong>Monday - Tuesday, December 8th-9th, 2025</strong> in <strong>Selangor/Kuala Lumpur, Malaysia</strong>.</p>
            </div>
            
            <div class="section-title" style="margin-top: 20px;">What's Next?</div>
            <p>Once your payment is confirmed, you will receive:</p>
            <ul>
              <li>Official confirmation of your registration</li>
              <li>Access instructions for the conference venue in Selangor/Kuala Lumpur</li>
              <li>Preliminary conference schedule and materials</li>
              <li>Information about keynote speakers and panel discussions</li>
              <li>Networking event details and workshop information</li>
              <li>Details about aviation and defence technology demonstrations</li>
            </ul>
          </div>
          `
          }
          
          <div class="footer">
            <p>© ${new Date().getFullYear()} Global Defence and Aviation Skills Conference 2025</p>
            <p>For any questions, please contact <a href="mailto:info@gdasummit.org">info@gdasummit.org</a> or call <a href="tel:+919237388328">+91 92373 88328</a></p>
          </div>
        </div>
      </body>
    </html>
  `
}

export default RegistrationEmailTemplate