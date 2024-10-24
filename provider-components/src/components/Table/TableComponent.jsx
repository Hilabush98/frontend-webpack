import { Table } from "antd";

const TableComponent = ({ columns, data }) => {
  console.log(columns);
  return (
    <>
      <Table columns={columns} dataSource={data} pagination={{pageSize:5}}/>
    </>
  );
};
export default TableComponent;