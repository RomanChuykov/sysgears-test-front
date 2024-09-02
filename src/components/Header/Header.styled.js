import styled from "styled-components";


export const HeaderWrapper=styled.div`
    display:flex;
    flex-wrap:wrap;
   s width:580px;
    height:90px;
    background-color:#f5f5f5;
    padding:15px 10px 15px 10px;
    align-items: flex-start;
  gap: 20px; 
  border-right:1px solid #cfcfcf;
  border-bottom:1px solid #cfcfcf;
 `; 
export const AvatarWrapper = styled.div`
  width:40px;
  height:40px
  margin-bottom:20px;
`;
 export const Avatar = styled.img`
   height:40px;
   width:40px;
   border-radius:50%;

 `;
 
 export const SearchText = styled.input`
      padding: 5px;
   width:560px;
   border: 1px solid #ccc;
   border-radius: 10px;
   

 `;

 export const LogIn = styled.button`
   margin-left:auto;
   weight:50px;
   height:30px;
   color:#6bb6d5;
   background:#FFFAF5;
   font-weight:800;
   border-radius:10px;
   align-items:center;
 `;
 
 export const UserName = styled.div`
   
 `;