const mailgun = require('mailgun-js');

exports.handler = async function (event, context) {
  const { name, phone, email, address, landmark, pincode, cartDetails, totalAmount } = JSON.parse(event.body);

  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  });

  const businessEmailData  = {
    from: 'buissnessrehan@gmail.com',
    to: 'buissnessrehan@gmail.com',
    subject: 'New Order',
    html: `
      <html>
        <head>
          <style>
            /* Apply your styles here */
            body {
              font-family: Arial, sans-serif;
              background-color: #f7f7f7;
            }
            h1 {
              color: #333;
              font-size: 24px;
              margin-bottom: 10px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
              margin-bottom: 10px;
            }
            th, td {
              padding: 8px;
              text-align: left;
              border-bottom: 1px solid #ddd;
            }
            th {
              background-color: #f2f2f2;
            }
          </style>
        </head>
        <body>
          <h1>New Order</h1>
          <h2>Order Details</h2>
          <table>
            <tr>
              <th>Name</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Address</th>
              <th>Landmark</th>
              <th>Pincode</th>
            </tr>
            <tr>
              <td>${name}</td>
              <td>${phone}</td>
              <td>${email}</td>
              <td>${address}</td>
              <td>${landmark}</td>
              <td>${pincode}</td>
            </tr>
          </table>
          <h2>Cart Details</h2>
          <table>
            <tr>
              <th>Product Name</th>
              <th>Price</th>
            </tr>
            ${cartDetails
              .map((item) => `
                <tr>
                  <td>${item.name}</td>
                  <td>${item.price}</td>
                </tr>
              `)
              .join('')}
          </table>
          <h2>Total Amount: ${totalAmount}</h2>
        </body>
      </html>
    `,
  };

  try {
    // Send email to the business
    await mg.messages().send(businessEmailData);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Error sending email:', error);

    return {
      statusCode: 500,
      body: JSON.stringify({ message: 'Failed to send email' }),
    };
  }
};
