import { screen, render } from "@testing-library/react";
import Table from "./table";

describe("Table component", () => {
  const headers = ["Header 1", "Header 2", "Header 3"];
  const data = [
    {
      "Header 1": "Row 1 Data 1",
      "Header 2": "Row 1 Data 2",
      "Header 3": "Row 1 Data 3",
    },
    {
      "Header 1": "Row 2 Data 1",
      "Header 2": "Row 2 Data 2",
      "Header 3": "Row 2 Data 3",
    },
  ];

  it("renders table headers correctly", () => {
    render(<Table headers={headers} data={[]} loading={false} />);

    headers.forEach((header) => {
      expect(screen.getByText(header)).toBeInTheDocument();
    });
  });

  it("renders table data correctly", () => {
    render(<Table headers={headers} data={data} loading={false} />);

    data.forEach((row) => {
      Object.values(row).forEach((cellValue) => {
        expect(screen.getByText(cellValue)).toBeInTheDocument();
      });
    });
  });

  it("applies loading class when loading is true", () => {
    render(<Table headers={headers} data={data} loading={true} />);

    const table = screen.getByRole("table");

    expect(table).toHaveClass("animate-pulse");
  });
});
