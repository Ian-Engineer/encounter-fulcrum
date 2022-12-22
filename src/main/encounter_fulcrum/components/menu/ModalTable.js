import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { useState } from "react";
import EditModal from "./EditModal";

// list item: {name, weight}

export default function ModalTable({ list, title, handleEdit, handleDelete }) {
  const [editModal, setEditModal] = useState(false);
  const [editIndex, setEditIndex] = useState(0);

  return (
    <div>
      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell align="right">Name</TableCell>
              <TableCell align="right">Weight</TableCell>
              <TableCell align="right">Edit</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((item, index) => (
              <TableRow key={item.name}>
                <TableCell component="th" scope="row">
                  {item.name}
                </TableCell>
                <TableCell align="right">{item.weight}</TableCell>
                <TableCell align="right">
                  <EditIcon
                    onClick={() => {
                      setEditModal(true);
                      setEditIndex(index);
                    }}
                  />
                </TableCell>
                <TableCell align="right">
                  <DeleteIcon
                    onClick={() => handleDelete({ name: item.name, index })}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      {list.length === 0 ? (
        <div className="flex justify-center">{`No ${title} loaded`}</div>
      ) : (
        <EditModal
          handleChange={(payload) => {
            setEditModal(payload);
          }}
          open={editModal}
          name={list[editIndex].name}
          weight={list[editIndex].weight}
          handleEdit={handleEdit}
          list={list}
          index={editIndex}
        />
      )}
    </div>
  );
}
