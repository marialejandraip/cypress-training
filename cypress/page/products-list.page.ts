class ProductListPage {
  private buttonAdd: string;
  private proceedToCheckout: string;  

  constructor() {
      this.buttonAdd = "#center_column a.button.ajax_add_to_cart_button.btn.btn-default";
      this.proceedToCheckout = "[style*=\"display: block;\"] .button-container > a"
  }

  public addingProduct(): void {
      cy.get(this.buttonAdd).click()
  }

  public proceedToCart(): void {
      cy.get(this.proceedToCheckout).click()
  }

}
export { ProductListPage  }
