import React, { useState } from 'react';
import styled from 'styled-components';

const LeadsContainer = styled.div`
  padding: 20px;
`;

const LeadsTable = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const LeadsList = () => {
  const [leads, setLeads] = useState([
    { name: 'John Doe', submitted: '02/10/2024', status: 'Pending', country: 'USA' },
    // Add more lead objects here
  ]);

  const handleStatusChange = (index: number) => {
    const newLeads = [...leads];
    newLeads[index].status = 'Reached Out';
    setLeads(newLeads);
  };

  return (
    <LeadsContainer>
      <h1>Leads</h1>
      <LeadsTable>
        <thead>
          <tr>
            <th>Name</th>
            <th>Submitted</th>
            <th>Status</th>
            <th>Country</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead, index) => (
            <tr key={index}>
              <td>{lead.name}</td>
              <td>{lead.submitted}</td>
              <td>{lead.status}</td>
              <td>{lead.country}</td>
              <td>
                <button onClick={() => handleStatusChange(index)}>Reach Out</button>
              </td>
            </tr>
          ))}
        </tbody>
      </LeadsTable>
    </LeadsContainer>
  );
};

export default LeadsList;
