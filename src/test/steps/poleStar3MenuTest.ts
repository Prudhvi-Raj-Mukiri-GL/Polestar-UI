import { Given, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { pagefixture } from "./Pagefixture";

setDefaultTimeout(80 * 1000)

Given('User clicks on the Polestar3 Menu Option', async function () {
  await pagefixture.page.waitForTimeout(5000)
  await pagefixture.verifypolestarmenu.verifyPolestar3MenuOption();
});

Given('User should Hover on the Test Drive Option', async function () {
  await pagefixture.verifypolestarmenu.verifyHover();
});

Then('Then it should redirect to Book your test Drive Screen', async function () {
  await pagefixture.page.waitForTimeout(8000)
  await pagefixture.verifypolestarmenu.VerifyTestDriveText();
});
