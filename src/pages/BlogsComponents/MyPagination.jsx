import { Pagination } from "@mui/material";
import React from "react";

const MyPagination = () => {
  return (
    <div className="my-20 flex items-center justify-center">
      <Pagination
        count={5}
        shape="rounded"
        sx={{
          "& .MuiPaginationItem-root": {
            color: "gray",
            border: "1px solid lightGray",
            //   backgroundColor: "#FB5C42", // Your custom color
          },
          "& .MuiPaginationItem-root.Mui-selected": {
            backgroundColor: "#FB5C42", // Custom color for selected page
            border: "0px solid lightGray",

            color: "#f1f1f1",
          },
          "& .MuiPaginationItem-root:hover": {
            color: "#f1f1f1",

            backgroundColor: "#FB5C42",
          },
        }}
      />
    </div>
  );
};

export default MyPagination;
