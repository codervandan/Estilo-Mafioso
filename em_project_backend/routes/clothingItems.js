const router = require("express").Router();

const { validateClothingItemBody, validateClothingItemId } = require("../middlewares/validation");
const { getClothingItems, createClothingItem, deleteClothingItem } = require("../controllers/clothingItems");

router.get("/", getClothingItems);
router.post("/", createClothingItem);
router.delete("/:itemId", deleteClothingItem);

module.exports = router;
