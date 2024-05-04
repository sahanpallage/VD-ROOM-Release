import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const generateCSVReport = (products) => {
  let csvContent = "data:text/csv;charset=utf-8,";
  const headers = [
    "PNo",
    "Title",
    "Price",
    "Category",
    "Color",
    "Brand",
    "Quantity",
    "Sold",
  ];
  csvContent += headers.join(",") + "\r\n";

  products.forEach((product) => {
    const row = [
      product.key,
      product.title,
      product.price,
      product.category,
      product.color.join(", "),
      product.brand,
      product.quantity,
      product.sold,
    ];
    csvContent += row.join(",") + "\r\n";
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "productsReport.csv");
  document.body.appendChild(link); // Required for FF

  link.click(); // This will download the data file named "report.csv".
};

const generatePDFReport = (products) => {
  const doc = new jsPDF();
  const title = "Item Product List";

  const headers = [
    ["PNo", "Title", "Price", "Category", "Color", "Brand", "Quantity", "Sold"],
  ];
  const data = products.map((product) => [
    product.key,
    product.title,
    product.price,
    product.category,
    product.color,
    product.brand,
    product.quantity,
    product.sold,
  ]);

  doc.setFontSize(16);
  const titleWidth =
    (doc.getStringUnitWidth(title) * doc.internal.getFontSize()) /
    doc.internal.scaleFactor;
  const titleX = (doc.internal.pageSize.getWidth() - titleWidth) / 2;
  doc.text(title, titleX, 20);

  doc.setFontSize(11);
  doc.setTextColor(100);

  autoTable(doc, { startY: 30, head: headers, body: data });

  doc.save("productsReport.pdf");
};

export { generateCSVReport, generatePDFReport };
