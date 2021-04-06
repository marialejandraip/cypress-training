class AddressStepPage {
  private btnConfirmAddress: string;
  
  constructor() {
    this.btnConfirmAddress= "#center_column > form > p > button"
  }

  public confirmAdress(): void {
    cy.get(this.btnConfirmAddress).click()
  }
}
export { AddressStepPage }
