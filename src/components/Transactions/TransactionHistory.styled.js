import styled from 'styled-components';

export const TransactionTable = styled.table`
  border: 1px solid #eee;
  table-layout: fixed;
  width: 100%;
  margin-bottom: 20px;
`;
export const TransactionTableHead = styled.thead`
  font-weight: bold;
  text-align: center;
  border: none;
  padding: 10px 15px;
  background: #d8d8d8;
  font-size: 14px;
  border-left: 1px solid #ddd;
  border-right: 1px solid #ddd;
`;
export const TransactionCell = styled.tr`
  &:nth-child(2n) {
    background-color: #f7f7f7;
  }
`;
export const TransactionType = styled.th`
  font-weight: bold;
   	background: #efefef;
  	border: 1px solid #dddddd;
  	padding: 5px;
   }
`;

export const TransactionData = styled.td`
  padding: 5px 10px;
  border: 1px solid #eee;
  text-align: center;
`;
