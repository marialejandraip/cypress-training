class LoginPage {
  private email: string;
  private password: string;
  private btnSubmit: string;

  constructor() {
    this.email= "#email"
    this.password= "#passwd"
    this.btnSubmit= "#SubmitLogin"
  }

  public addingLoginEmail(): void {
    cy.get(this.email).type("aperdomobo@gmail.com")
  }

  public addingLoginPasswd(): void {
    cy.get(this.password).type("WorkshopProtractor")
  }

  public submitLogin(): void {
    cy.get(this.btnSubmit).click()
  }
  
}
export { LoginPage }
