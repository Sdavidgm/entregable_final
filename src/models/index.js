const User = require("./User")
const Category = require("./Category")
const Product = require("./Product")
const Cart = require("./Cart")

//product -> categoryId

Product.belongsTo(Category)
Category.hasMany(Product)

//cart -> userId

Cart.belongsTo(User)
User.hasMany(Cart)

//cart -> productId

Cart.belongsTo(Product)
Product.hasMany(Cart)
