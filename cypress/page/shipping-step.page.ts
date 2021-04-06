class ShippingStepPage {
  private checkBtn: string;
  private btnShipping: string;

  constructor() {
    this.checkBtn= "#cgv"
    this.btnShipping= "#form > p > button"
  }

  public checkTerms(): void {
    cy.get(this.checkBtn).check()
  }

  public submitShipping(): void {
    cy.get(this.btnShipping).click()
  }
}
export { ShippingStepPage }
