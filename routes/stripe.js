const router = require("express").Router();
//payment not working 

const stripe = require("stripe")(process.env.STRIPE_KEY);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});
 
// //new audio
// https://stripe.com/docs/checkout/quickstart
//  const stripe = require("stripe")(process.env.STRIPE_KEY);
//  const YOUR_DOMAIN = "http://localhost:5000";

//  router.post("/create-checkout-session", async (req, res) => {
//    const session = await stripe.checkout.sessions.create({
//      line_items: [
//        {
//          // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//          price: "{{PRICE_ID}}",
//          quantity: 1,
//        },
//      ],
//      mode: "payment",
//      success_url: `${YOUR_DOMAIN}?success=true`,
//      cancel_url: `${YOUR_DOMAIN}?canceled=true`,
//    });

//    res.redirect(303, session.url);
//  });
 module.exports = router;