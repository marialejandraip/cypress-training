import { MenuContentPage } from "../page/index"
import { ProductListPage, ShopingCartPage, LoginPage, AddressStepPage, ShippingStepPage, PaymentStepPage } from "../page/index"

describe("Buy a t-shirt", () => {
  let menuContentPage: MenuContentPage;
  let productListPage: ProductListPage;
  let shopingCartPage: ShopingCartPage;
  let loginPage: LoginPage;
  let addressStepPage: AddressStepPage;
  let shippingPage: ShippingStepPage;
  let paymentPage: PaymentStepPage;

  before(() => {
    menuContentPage = new MenuContentPage();
    productListPage = new ProductListPage();
    shopingCartPage = new ShopingCartPage();
    loginPage = new LoginPage("aperdomobo@gmail.com","WorkshopProtractor");
    addressStepPage = new AddressStepPage();
    shippingPage = new ShippingStepPage();
    paymentPage = new PaymentStepPage("Your order on My Store is complete.");
  })

  it("then the t-shirt should be bought", () => {
    menuContentPage.visitMenuContentPage()
    menuContentPage.goToTShirtMenu()

    productListPage.addProduct()
    productListPage.proceedToCart()
    
    shopingCartPage.shopingCartNav()

    loginPage.addEmail()
    loginPage.addPass()
    loginPage.submitLogin()

    addressStepPage.confirmAdress()

    shippingPage.checkTerms()
    shippingPage.submitShipping()

    paymentPage.selectPaymentMethod()
    paymentPage.confirmOrder()
    paymentPage.verifyOrderCompletedTitle()
  });
});
