import styled from 'styled-components';

export const Item = styled.li`
 width: calc(25% - 20px); 
 margin: 10px;
  padding: 15px;
  background-color:rgb(220, 228, 252);
  border: 1px solid #e0e0e0;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h3`
  margin-bottom: 10px;
`;

export const Text = styled.p`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
`;
