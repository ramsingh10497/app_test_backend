const helper = require("../../utils/shared");
const knex = require("../../config/db");

// getting Specefic product
const getProduct = async (req, res) => {
    const name = Object.keys(req.query)
    const value = Object.values(req.query)
  try {
    const product = await knex
      .select()
      .table("products")
      .orderBy(name[0] || "reviewScore", value[0] || "desc");
    return res.status(200).send(product);
  } catch (error) {
    return res.status(404).send("Something Wrong");
  }
};

const createProduct = async (req, res) => {
  const payload = req.body;
  try {
    await knex("products").insert({ ...payload }, ["id"]);
    return res.status(200).send("Created SuccesFully");
  } catch (error) {
    return res.status(404).send("Something Wrong");
  }
};

module.exports = {
  getProduct,
  createProduct,
};
