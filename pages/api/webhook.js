/*
  this is the main endpoint for the woo-commerce webhook that is called when an order has been placed.

  workflow:
  1. retrieve the payload from the request (customer information, product information, ...)
  2. create user in hellocash
  3. create an invoice for this user in hellocash
  4. create a post stamp (if possible)
*/
export default async (req, res) => {
  try {
    const { billing, paymentMethod, total } = req.body;
    //create user in hello cash
    const user = await createUser(billing);
    // create Invoice with this user
    const invoice = await createInvoice(user, { paymentMethod, total });
  } catch (error) {
    //TODO: some sort of notification
  }
};
