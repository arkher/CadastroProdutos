import React from 'react';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import CloseIcon from '@material-ui/icons/Close';
import { AttachedFileArea, AttachedFileClose, AttachIconArea } from './styles';

export interface AttachedFileProps {
  fileName: string;
  handleClose: () => void;
}

const AttachedFile: React.FC<AttachedFileProps> = (
  props: AttachedFileProps,
) => {
  const { fileName, handleClose } = props;

  return (
    <AttachedFileArea>
      <AttachIconArea>
        <AttachFileIcon />
      </AttachIconArea>
      {fileName}
      <AttachedFileClose onClick={handleClose}>
        <CloseIcon />
      </AttachedFileClose>
    </AttachedFileArea>
  );
};

export default AttachedFile;
