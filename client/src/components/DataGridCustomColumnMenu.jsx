import { Box } from "@mui/material";
import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarFilterButton,
  GridToolbarDensitySelector,
  GridToolbarExport,
} from "@mui/x-data-grid";

const DataGridCustomColumnMenu = () => {
  return (
    <GridToolbarContainer>
      <Box
        width="100%"
        display="flex"
        alignItems="center"
        justifyContent="start"
        gap={2}
      >
        <GridToolbarColumnsButton />
        <GridToolbarFilterButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport />
      </Box>
    </GridToolbarContainer>
  );
};

export default DataGridCustomColumnMenu;
