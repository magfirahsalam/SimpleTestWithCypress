const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

async function generatePDF() {
  // Path ke file laporan HTML Cypress
  const reportPath = path.join(__dirname, 'cypress/reports/mochawesome.html');

  // Mengecek apakah laporan HTML ada
  if (!fs.existsSync(reportPath)) {
    console.log('Report HTML Not Found!');
    return;
  }

  // Mulai Puppeteer dan buka laporan HTML
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('file://' + reportPath, { waitUntil: 'networkidle0' });

  // Set output file PDF
  const pdfPath = path.join(__dirname, 'cypress/reports/mochawesome-report.pdf');
  await page.pdf({ path: pdfPath, format: 'A4' });

  console.log('Report PDF Successfully Created: ' + pdfPath);

  await browser.close();
}

generatePDF();
