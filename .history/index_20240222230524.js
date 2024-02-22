import { getDocument, PDFPageProxy } from "pdfjs-dist/build/pdf";

async function getContent(src: string): Promise<PDFPageProxy> {
  const doc = await getDocument(src).promise;
  const page = await doc.getPage(1);
  return page;
}

async function getItems(src: string): Promise<string[]> {
  const content = await getContent(src);
  const textContent = await content.getTextContent();
  const items = textContent.items.map((item) => {
    console.log(item.str);
    return item.str;
  });

  return items;
}

getItems("./SWE-Resume.pdf");
