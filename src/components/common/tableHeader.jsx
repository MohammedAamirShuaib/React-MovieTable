import React, { Component } from 'react';

class TableHeader extends Component {
    raiseSort = (column) => {
        const sortColumn = {...this.props.sortColumn};
        if (sortColumn.name === column)
            sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
        else {
            sortColumn.name = column;
            sortColumn.order = 'asc';
        }
        this.props.onSort(sortColumn);
    }

    renderSortIcon = column => {
        if (column.name !== this.props.sortColumn.name) return null
        if (this.props.sortColumn.order === 'asc') return <i className="fa fa-sort-asc"/>
        return <i className="fa fa-sort-desc"/>
    }

    render() { const { columns } = this.props;
        return ( 
            <thead>
                    <tr>
                        {columns.map(column => 
                        <th key={column.name || column.key} 
                        style={{cursor: "pointer"}} 
                        onClick={()=> this.raiseSort(column.name)}>
                            {column.label} {this.renderSortIcon(column)}
                        </th>)}
                    </tr>
            </thead>
        )
    }
}
 
export default TableHeader;