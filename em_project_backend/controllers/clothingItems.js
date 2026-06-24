const ClothingItem = require("../models/clothingItem");

const getClothingItems = (req, res) => {
  ClothingItem.find({})
    .then((items) => {
      res.send(items);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error getting clothing items",
        error: err.message,
      });
    });
};

const createClothingItem = (req, res) => {
  const { name, imageUrl, price, description, category, sizes, inStock } = req.body;

  ClothingItem.create({
    name,
    imageUrl,
    price,
    description,
    category,
    sizes,
    inStock,
  })
    .then((item) => {
      res.status(201).send(item);
    })
    .catch((err) => {
      res.status(400).send({
        message: "Error creating clothing item",
        error: err.message,
      });
    });
};

const deleteClothingItem = (req, res) => {
  const { itemId } = req.params;

  ClothingItem.findByIdAndDelete(itemId)
    .then((item) => {
      if (!item) {
        return res.status(404).send({
          message: "Clothing item not found",
        });
      }

      return res.send({
        message: "Clothing item deleted successfully",
        deletedItem: item,
      });
    })
    .catch((err) => {
      if (err.name === "CastError") {
        return res.status(400).send({
          message: "Invalid clothing item ID",
        });
      }

      return res.status(500).send({
        message: "Error deleting clothing item",
        error: err.message,
      });
    });
};

module.exports = {
  getClothingItems,
  createClothingItem,
  deleteClothingItem,
};
