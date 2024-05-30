// import axios from 'axios'

// export const paymentController = async (req, res) => {
//     try {
//       const { email, amount, products } = req.body;
  
//       const formattedProducts = products.map((product) => ({
//         name: product.name,
//         quantity: product.quantity,
//         price: product.price,
//         image: product.image,
//       }));
  
//       const response = await axios.post(
//         '<https://api.paystack.co/transaction/initialize>',
//         {
//           email: email,
//           amount: amount * 100, // Paystack amount is in kobo
//           metadata: {
//             products: formattedProducts,
//           },
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${secret}`,
//           },
//         }
//       );
  
//       const authorizationUrl = response.data.data.authorization_url;
//       res.json({ authorizationUrl });
//     } catch (error) {
//       console.error(error);
//       res.status(500).json({ error: 'Internal Server Error' });
//     }
//   };