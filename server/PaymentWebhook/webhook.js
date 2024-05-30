app.post(
    '/api/paystack/webhook',
    bodyParser.raw({ type: 'application/json' }),
    async function (req, res) {
      try {
        // Parse the request body as JSON
        const body = req.body.toString();
        const jsonData = JSON.parse(body);
  
        const hash = crypto
          .createHmac('sha512', process.env.PAYSTACK_SECRET_KEY)
          .update(body, 'utf-8')
          .digest('hex');
  
        if (hash == req.headers['x-paystack-signature']) {
          const event = jsonData.event;
  
          // Handle different Paystack events based on the `event` field
          if (event === 'charge.success') {
            const newOrder = new Order({
              reference: jsonData.data.reference,
              product: jsonData.data.metadata.products,
              total: jsonData.data.requested_amount,
              payment_status: jsonData.data.gateway_response,
            });
  
            await newOrder.save();
  
            res.status(200).send('Success');
            console.log('Order saved to database');
          } else {
            // Handle other Paystack events if needed
            console.log('Received Paystack event:', event);
            res.status(200).send('Event not handled');
          }
        } else {
          // Invalid signature, ignore the webhook event
          console.log('Invalid Paystack signature');
          res.status(400).send('Invalid signature');
        }
      } catch (error) {
        console.error('Error processing Paystack webhook:', error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    }
  );