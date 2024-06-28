import { createColumnHelper } from "@tanstack/react-table";
import { Country } from "../../constants";

const columnHelper = createColumnHelper<Country>();

const columns = [
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: () => "Country Name",
  }),
  columnHelper.accessor("abbreviation", {
    cell: (info) => info.getValue(),
    header: () => "Code",
  }),
  columnHelper.accessor("capital", {
    cell: (info) => info.getValue(),
    header: () => "Capital",
  }),
  columnHelper.accessor("phone", {
    cell: (info) => info.getValue(),
    header: () => "Ph Code",
  }),
  columnHelper.accessor("population", {
    cell: (info) => info.getValue(),
    header: () => "Population",
  }),
  columnHelper.accessor("media.flag", {
    cell: (info) => (
      <img
        src={info.getValue()}
        alt="flag"
        style={{ width: "50px", height: "auto" }}
      />
    ),
    header: () => "Flag",
  }),
  columnHelper.accessor("media.emblem", {
    cell: (info) => (
      <img
        src={info.getValue()}
        alt="emblem"
        style={{ width: "50px", height: "auto" }}
      />
    ),
    header: () => "Emblem",
  }),
];

export default columns;
