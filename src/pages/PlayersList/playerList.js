import { Outlet, Link } from "react-router-dom";

const columns = [
  {
    field: "id",
    headerName: "Id",
    width: 70,
    renderCell: (params) => (
      <Link to={"/PlayersDetails"} state={{ id: params.value }}>
        {params.value.toString()}
      </Link>
    ),
  },
  {
    field: "firstName",
    headerName: "First name",
    width: 130,
  },
  { field: "lastName", headerName: "Last name", width: 130 },
  { field: "mobile", headerName: "Mobile no", width: 130 },
  { field: "area", headerName: "Area", width: 130 },
  { field: "city", headerName: "City", width: 130 },
  { field: "gender", headerName: "Gender", width: 130 },
  { field: "birthYear", headerName: "Year of Birth", width: 130 },
  { field: "age", headerName: "Age", width: 130 },
  { field: "fielderType", headerName: "Fielder Type", width: 130 },
  { field: "batsmanType", headerName: "Batsman Type", width: 130 },
  { field: "bowlerType", headerName: "Bowler Type", width: 130 },
];

export { columns };
