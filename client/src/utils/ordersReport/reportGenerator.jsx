import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

const generateCSVReport = (orders) => {
  let csvContent = "data:text/csv;charset=utf-8,";
  const headers = ["OrdNo", "Name", "Product", "Amount", "Date"];
  csvContent += headers.join(",") + "\r\n";

  orders.forEach((order) => {
    const row = [
      order.key, // use 'key' instead of 'ordNo'
      order.name,
      order.product,
      order.amount,
      order.date,
    ];
    csvContent += row.join(",") + "\r\n";
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "report.csv");
  document.body.appendChild(link); // Required for FF

  link.click(); // This will download the data file named "report.csv".
};

const generatePDFReport = (orders) => {
  const doc = new jsPDF();
  const title = "Customer Order List";

  const headers = [["OrdNo", "Name", "Product", "Amount", "Date"]];
  const data = orders.map((order) => [
    order.key, // use 'key' instead of 'ordNo'
    order.name,
    order.product,
    order.amount,
    order.date,
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

  doc.save("OrdersReport.pdf");
};

export { generateCSVReport, generatePDFReport };
