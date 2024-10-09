// components/LeadForm.tsx
'use client';

import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import { materialRenderers } from '@jsonforms/material-renderers';
import styled from 'styled-components';

const FormContainer = styled.div`
  max-width: 600px;
  margin: auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const LeadForm = () => {
  const [formData, setFormData] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const schema = {
    type: "object",
    properties: {
      firstName: { type: "string", title: "First Name", minLength: 1 },
      lastName: { type: "string", title: "Last Name", minLength: 1 },
      email: { type: "string", title: "Email", format: "email" },
      linkedin: { type: "string", title: "LinkedIn" },
      visas: { type: "string", title: "Visas you're interested in", minLength: 1 },
      resume: { type: "string", title: "Resume / CV", format: "binary" },
      openInput: { type: "string", title: "How can we help you?", minLength: 1 },
    },
  };

  const uiSchema = {
    type: "object",
    properties: {
      resume: {
        "ui:widget": "file", // Use a file upload widget for the resume
      },
      openInput: {
        "ui:widget": "textarea", // Use a textarea for open input
      },
    },
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Send formData to the API
    const response = await fetch('/api/leads', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      setSubmitted(true);
    } else {
      // Handle error
      console.error('Failed to submit form');
    }
  };


  if (submitted) {
    return <h2>Thank You! Your submission has been received.</h2>;
  }

  return (
    <FormContainer>
      <h1>Get An Assessment Of Your Immigration Case</h1>
      <JsonForms
        schema={schema}
        uischema={uiSchema}
        data={formData}
        onChange={({ data }) => setFormData(data)}
        renderers={materialRenderers}
      />
      <button onClick={handleSubmit}>Submit</button>
    </FormContainer>
  );
};

export default LeadForm;
