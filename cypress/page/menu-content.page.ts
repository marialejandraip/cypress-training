class MenuContentPage {
  private tShirtMenu: string;
  private menuContentPageURL: string
  private dressesMenu: string

  constructor() {
    this.dressesMenu = "#block_top_menu > ul > li:nth-child(2) > a"
      this.tShirtMenu = "#block_top_menu > ul > li:nth-child(3) > a";
      this.menuContentPageURL = "http://automationpractice.com/"
  }

  public visitMenuContentPage(): void {
      cy.visit(this.menuContentPageURL)
  }

  public goToTShirtMenu(): void {
    cy.get(this.tShirtMenu).click()
  }

  public goToDressesMenu(): void {
    cy.get(this.dressesMenu).click()
  }

}
export { MenuContentPage }
