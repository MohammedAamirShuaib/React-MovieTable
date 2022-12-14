import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

class Table extends Component {
  render() {
    const { data, onDelete, onLike, sortColumn, onSort, columns } = this.props;
    return (
      <table className="table">
        <TableHeader
          columns={columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody
          data={data}
          columns={columns}
          onDelete={onDelete}
          onLike={onLike}
        />
      </table>
    );
  }
}

export default Table;
