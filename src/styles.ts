import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: row;
  background-color: #3179ba;
  height: 100%;
  padding: 20px;
  width: 100%;
`

export const ColumnContainer = styled.div`
  background-color: #ebecf0;
  width: 300px;
  min-height: 40px;
  margin-right: 20px;
  border-radius: 3px;
  padding: 8px 8px;
  flex-grow: 0;
`

export const ColumnTitle = styled.div`
  padding: 6px 16px 12px;
  font-weight: bold;
`
