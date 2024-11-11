import { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { useFormData } from '../context/FormContentData';
import Spinner from './Spinner';
import { convertDateFormat } from '../utils/utils';

const Usertable = () => {
  const { tableData, Loading, getProducts } = useFormData();
  const [searchTerm, setsearchTerm] = useState('');
  const [filterState, setfilterState] = useState(false);
  const columns = [
    {
      name: 'Product Name',
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: 'Category',
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: 'Price',
      selector: (row) => `$${row.price}`,
      sortable: true,
    },
    {
      name: 'Time Created',
      selector: (row) => convertDateFormat(row.meta.createdAt),
      sortable: true,
    },
    {
      name: 'Product Status',
      selector: (row) => row.availabilityStatus,
      sortable: true,
    },
  ];

  const [records, setrecords] = useState([]);
  useEffect(() => {
    if (tableData.length > 0) {
      setrecords(tableData);
    }
  }, [tableData]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setsearchTerm(term);
    if (term === '') {
      setfilterState(false);
      setrecords(tableData);
    } else {
      setfilterState(true);
      const filteredData = tableData.filter((row) =>
        row.title.toLowerCase().includes(term.toLowerCase())
      );
      setrecords(filteredData);
    }
  };

  return (
    <div className='container mt-10'>
      <div className='float-end w-[30%]'>
        <input
          type='text'
          onChange={handleSearch}
          value={searchTerm}
          className='  input-style '
          placeholder='Serch for first name'
        />
      </div>
      {!Loading && records.length != 0 ? (
        <DataTable columns={columns} data={records} fixedHeader pagination />
      ) : (
        <Spinner />
      )}
    </div>
  );
};

export default Usertable;
