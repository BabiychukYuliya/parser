const puppeteer = require("puppeteer");
// const mysql = require("mysql");

// // Налаштування підключення до бази даних
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "username",
//   password: "password",
//   database: "database_name",
// });

async function startParser() {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate the page to a URL
  await page.goto("https://clutch.co/profile/eteam#highlights");
  await page.screenshot({ path: "img.png" });

  // Отримання потрібних даних зі сторінки
  //   const logo = await page.evaluate(() => {
  //     let imgLogo = document.querySelectorAll(
  //       "#provider-19938 > div > div.provider-info.col-md-10 > div.row.provider-info--header > div > a > img"
  //     );
  //     let URLs = Object.values(imgLogo).map((imgElement) => ({
  //       src: imgElement.src,
  //       alt: imgElement.alt,
  //     }));
  //     return URLs;
  //   });
  //   console.log(logo);

  const companyName = await page.$eval(
    ".directory_profile",
    (el) => el.textContent
  );
  console.log(companyName);
  //   const languages = await page.$eval(".languages", (el) => el.textContent);
  //   const timezones = await page.$eval(".timezones", (el) => el.textContent);

  // Збереження отриманих даних в базу даних
  //   const query = `INSERT INTO companies (logo, name) VALUES (?, ?)`;
  //   const values = [logo, companyName];

  //   connection.query(query, values, function (error, results, fields) {
  //     if (error) throw error;
  //     console.log("Дані збережено у базу даних.");
  //   });

  await browser.close();
  //   connection.end();
}

startParser();
