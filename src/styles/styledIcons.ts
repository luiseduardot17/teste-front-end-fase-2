import { FaRegPlusSquare, FaSistrix } from "react-icons/fa";
import { VscTrash } from "react-icons/vsc";
import { AiFillCaretRight } from "react-icons/ai";
import { TbFilePencil } from "react-icons/tb";
import styled from "styled-components";

export const FindIcon = styled(FaSistrix)`
  width: 25px;
  height: 25px;
  color: #005187;
`;

export const AddIcon = styled(FaRegPlusSquare)`
  width: 25px;
  height: 25px;
  color: #005187;
  cursor: pointer;
`;

export const RightIcon = styled(AiFillCaretRight)`
  width: 30px;
  height: 30px;
  color: #005187;
`;

export const DelIcon = styled(VscTrash)`
  width: 25px;
  height: 25px;
  color: #6c757d;
  cursor: pointer;
`;

export const EditIcon = styled(TbFilePencil)`
  width: 25px;
  height: 25px;
  color: #6c757d;
  cursor: pointer;
`;

export const ConfIcon = styled.img`
  width: 30px;
  height: 30px;
  color: #6c757d;
  cursor: pointer;
`;
