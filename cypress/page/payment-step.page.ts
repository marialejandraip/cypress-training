class PaymentStepPage {
  private paymentMethod: string;
  private confirmOrderBtn: string;
  private confirmText: string;

  constructor() {
    this.paymentMethod= "#HOOK_PAYMENT > div:nth-child(1) > div > p > a"
    this.confirmOrderBtn= "#cart_navigation > button"
    this.confirmText="#center_column > div > p > strong"
  }

  public selectPaymentMethod(): void {
    cy.get(this.paymentMethod).click()
  }

  public confirmOrder(): void {
    cy.get(this.confirmOrderBtn).click()
  }

  public textOrderComplete(): void {
    cy.get(this.confirmText).should("have.text", "Your order on My Store is complete.")
  }
}
export { PaymentStepPage }
