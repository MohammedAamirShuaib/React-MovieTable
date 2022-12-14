import React, { Component } from "react";
import _ from "lodash";

class TableBody extends Component {
  renderCell(item, column) {
    const { onLike, onDelete } = this.props;
    if (column.content) return column.content(item, onLike, onDelete);
    return _.get(item, column.name);
  }
  render() {
    const { data, columns } = this.props;
    return (
      <tbody>
        {data.map((item) => (
          <tr key={item._id}>
            {columns.map((column) => (
              <td key={item._id + (column.name || column.key)}>
                {this.renderCell(item, column)}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    );
  }
}

export default TableBody;
