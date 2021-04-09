import { MenuContentPage, DressesListPage } from "../page/index"

describe("the user navigates to the dresses page should", () => {
  let menuContentPage: MenuContentPage;
  let dressesListPage: DressesListPage;
  const dressList = ["Printed Dress", "Printed Dress", "Printed Summer Dress", "Printed Summer Dress", "Printed Chiffon Dress"]

  before(() => {
    menuContentPage = new MenuContentPage();
    dressesListPage = new DressesListPage();
  })

  it("show the available dresses", () => {
    menuContentPage.visitMenuContentPage()
    menuContentPage.goToDressesMenu()

    dressesListPage.getDressProducts()
    dressesListPage.validateItemsNumber(5)
    dressesListPage.validateItemsNames(dressList)
  })
})
