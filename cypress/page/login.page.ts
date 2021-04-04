class LoginPage {
  private email: string;
  private password: string;
  private btnSubmit: string;
  emailInput: string;
  passwordInput:string;

  constructor(givedEmail: string, givedPassword: string) {
    this.email= "#email"
    this.password= "#passwd"
    this.btnSubmit= "#SubmitLogin"
    this.emailInput= givedEmail
    this.passwordInput = givedPassword
  }

  public addEmail(): void {
    cy.get(this.email).type(this.emailInput)
  }

  public addPass(): void {
    cy.get(this.password).type(this.passwordInput)
  }

  public submitLogin(): void {
    cy.get(this.btnSubmit).click()
  }
  
}
export { LoginPage }
