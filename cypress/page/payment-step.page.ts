class PaymentStepPage {
  private paymentMethod: string;
  private confirmOrderBtn: string;
  private confirmText: string;
  private verifyOrderTitle: string;


  constructor(verifyTitle: string) {
    this.paymentMethod= "#HOOK_PAYMENT > div:nth-child(1) > div > p > a"
    this.confirmOrderBtn= "#cart_navigation > button"
    this.confirmText="#center_column > div > p > strong"
    this.verifyOrderTitle = verifyTitle
  }

  public selectPaymentMethod(): void {
    cy.get(this.paymentMethod).click()
  }

  public confirmOrder(): void {
    cy.get(this.confirmOrderBtn).click()
  }

  public verifyOrderCompletedTitle(): void {
    cy.get(this.confirmText).should("have.text", this.verifyOrderTitle)
  }
}
export { PaymentStepPage }
