import { MenuContentPage } from "../page/index"
import { ProductListPage, ShopingCartPage, LoginPage, AddressStepPage, ShippingStepPage, PaymentStepPage } from "../page/index"

const menuContentPage = new MenuContentPage();
const productListPage = new ProductListPage();
const shopingCartPage = new ShopingCartPage();
const loginPage = new LoginPage();
const addressStepPage = new AddressStepPage();
const shippingPage = new ShippingStepPage();
const paymentPage = new PaymentStepPage();

describe("Buy a t-shirt", () => {
  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage()
    menuContentPage.goToTShirtMenu()

    productListPage.addingProduct()
    productListPage.proceedToCart()
    
    shopingCartPage.shopingCartNav()

    loginPage.addingLoginEmail()
    loginPage.addingLoginPasswd()
    loginPage.submitLogin()

    addressStepPage.confirmAdress()

    shippingPage.checkTerms()
    shippingPage.submitShipping()

    paymentPage.selectPaymentMethod()
    paymentPage.confirmOrder()
    paymentPage.textOrderComplete()
  });
});
