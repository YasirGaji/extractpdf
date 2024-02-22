const pdfjs = require("pdfjs-dist/build/pdf");

async function getContent(src) {
  try {
    const doc = await pdfjs.getDocument(src).promise;
    const page = await doc.getPage(1);
    return await page.getTextContent();
  } catch (error) {
    console.error("Error getting content:", error);
    throw error;
  }
}

async function getItems(src) {
  try {
    const content = await getContent(src);
    const items = content.items.map((item) => item.str);
    console.log(items);
    return items;
  } catch (error) {
    console.error("Error getting items:", error);
    throw error;
  }
}

getItems("./SWE-Resume.pdf");
