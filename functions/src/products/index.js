const functions = require("firebase-functions");
const { db } = require("../../firebaseConfig");

// Always terminate with send, end or redirect! Otherwise the functio will keep running.
exports.getAllProducts = functions.https.onRequest(async (req, res) => {
  let products = [];
  db.collection("products")
    .get()
    .then((snapshot) => {
      snapshot.forEach((product) => {
        const productData = doc.data();
        var productList = {
          id: doc.id,
          name: productData.name,
          mainImage: productData?.images[0] || "",
          price: productData.price,
          maxQuantity: productData.maxQuantity || 0,
          categoryId: productData.categoryId,
        };
        products = products.concat(productList);
      });
      res.status(200).json(products);
    })
    .catch((reason) => {
      res.send(reason);
    });
});

// export interface ProductList {

//   reducedPrice?: number;
//   availabilityStatus: AvailabilityStatus;
//   onPromotion?: boolean;
// }
