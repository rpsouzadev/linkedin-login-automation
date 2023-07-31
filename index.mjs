import puppeteer from 'puppeteer';
import 'dotenv/config'

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({headless: false});
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto('https://www.linkedin.com/');

  const email = await page.type('[id="session_key"]', process.env.LINKEDIN_EMAIL)

  const password = await page.type('#session_password', process.env.LINKEDIN_PASSWORD)

  const button = await page.$('[data-id="sign-in-form__submit-btn"]');

  await page.waitForNavigation();

  button.click()

  // await browser.close();
})();