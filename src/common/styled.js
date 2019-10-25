import styled from 'styled-components'
export const GridColumnsWrapper = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  overflow: hidden;
`
export const GridRowsWrapper = styled.div`
  display: grid;
  grid-gap: 16px;
  grid-template-rows: repeat(auto-fit, minmax(0px, min-content));
  grid-template-columns: '100%';
  overflow: hidden;
`
