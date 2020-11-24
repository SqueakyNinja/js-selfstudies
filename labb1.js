class Product {
  constructor(sku, title, description, price, noInStock) {
    this.sku = sku;
    this.title = title;
    this.description = description;
    this.price = price;
    this.noInStock = noInStock;
  }
  printThisProduct() {
    console.log(
      `This product has sku-number: ${this.sku} and is called ${this.title}. 
      The description is: ${this.description}. 
      The product costs ${this.price} kr and there is currently ${this.noInStock} in stock.`
    );
  }
}

class Clothes extends Product {
  constructor(sku, title, description, price, noInStock, size) {
    super(sku, title, description, price, noInStock);
    this.size = size;
  }
}

class Toy extends Product {
  constructor(sku, title, description, price, noInStock, ageFrom) {
    super(sku, title, description, price, noInStock);
    this.ageFrom = ageFrom;
  }
}

class Warehouse {
  constructor(products = []) {
    this.products = products;
  }
  addNewProduct(sku, title, description, price, noInStock) {
    this.products.push(new Product(sku, title, description, price, noInStock));
  }
  addNewClothes(sku, title, description, price, noInStock, size) {
    this.products.push(
      new Clothes(sku, title, description, price, noInStock, size)
    );
  }
  addNewToy(sku, title, description, price, noInStock, ageFrom) {
    this.products.push(
      new Toy(sku, title, description, price, noInStock, ageFrom)
    );
  }
  printWarehouseStock() {
    console.log(this.products);
  }
  searchSku(value) {
    return this.products.filter((x) => x.sku == value)[0];
  }
}

class ShoppingCart {
  constructor() {
    this.shoppingCartArray = [];
  }
  printShoppingCart() {
    console.log(this.shoppingCartArray);
  }
  addToCart(productToAdd) {
    this.shoppingCartArray.push(warehouse.searchSku(productToAdd));
  }
  removeFromCart(productToRemove) {
    this.shoppingCartArray.splice(
      this.shoppingCartArray.indexOf(
        this.shoppingCartArray.filter((x) => x.sku == productToRemove)[0]
      ),
      1
    );
  }
  calcSumOfShoppingCart() {
    console.log(
      ` Total cost: ${this.shoppingCartArray
        .map((x) => x.price)
        .reduce((total, currVal) => total + currVal)}`
    );
  }
}

class Customer {
  constructor(name) {
    this.name = name;
    this.orderHistory = [];
    this.shoppingCart = new ShoppingCart();
  }
  makePurchase() {
    this.orderHistory.push({
      date: new Date().toDateString(),
      order: this.shoppingCart.shoppingCartArray,
    });
    for (let i = 0; i < this.shoppingCart.shoppingCartArray.length - 1; i++) {
      warehouse.searchSku(this.shoppingCart.shoppingCartArray[i].sku)
        .noInStock--;
      console.log(
        warehouse.searchSku(this.shoppingCart.shoppingCartArray[i].sku)
      );
    }
    this.shoppingCart.shoppingCartArray = [];
    console.log(this.orderHistory);
  }
}

let warehouse = new Warehouse();

warehouse.addNewProduct(454, "Bucket", "It's just a bucket", 200, 10);
warehouse.addNewClothes(
  456,
  "Jacket",
  "Blue jacket made of windproof material",
  500,
  20,
  10
);

warehouse.addNewToy(
  455,
  "Tractor",
  "Supercool and advanced tractor only for hardcore farmers",
  400,
  15,
  7
);
warehouse.printWarehouseStock();
// warehouse.searchSku(456);
// warehouse.searchSku(457);

let newCustomer = new Customer("Göran");
newCustomer.shoppingCart.addToCart(456);
newCustomer.shoppingCart.addToCart(456);
newCustomer.shoppingCart.addToCart(454);
// newCustomer.shoppingCart.printShoppingCart();
// newCustomer.shoppingCart.removeFromCart(456);
// newCustomer.shoppingCart.printShoppingCart();
newCustomer.shoppingCart.calcSumOfShoppingCart();
newCustomer.makePurchase();
