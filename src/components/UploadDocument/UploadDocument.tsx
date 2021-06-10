import React, { useState } from 'react';
import { CircularProgress } from '@material-ui/core';
import Alert from '@material-ui/lab/Alert';
import { ReactComponent as UploadFile } from '../../assets/images/upload-file.svg';
import { FileService } from '../../services/file.service';
import AttachedFile from '../AttachedFile/AttachedFile';
import { Title, SubTitle, UploadDocumentArea, InputFile } from './styles';

type UploadDocumentProps = {
  handleHash: (hash: string) => void;
};

const UploadDocument: React.FC<UploadDocumentProps> = (
  props: UploadDocumentProps,
) => {
  const { handleHash } = props;

  const [uploading, setUploading] = useState<boolean>(false);

  const [file, setFile] = useState<File>({} as File);

  const [attached, setAttached] = useState(false);

  const [dragging, setDragging] = useState(false);

  const [attachmentError, setAttachError] = useState(false);

  const hiddenFileInput = React.useRef<HTMLInputElement>(null);

  const handleCloseAttachedFile = () => {
    setAttached(false);
    setFile({} as File);
    handleHash(``);
  };

  const handleClick = () => {
    if (!attached) hiddenFileInput.current?.click();
  };

  const uploadFile = async (fileToUpload: File) => {
    try {
      setUploading(true);
      const createdHash = await FileService.uploadFile(fileToUpload);
      handleHash(createdHash);
      setFile(fileToUpload);
      setAttached(true);
      setAttachError(false);
      setUploading(false);
    } catch (err) {
      setAttachError(true);
      setAttached(false);
      setFile({} as File);
      setUploading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (attached) return;
    if (!e.target.files?.length) return;
    const selectedFile = e.target.files[0];
    uploadFile(selectedFile);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    setDragging(true);
    if (attached) return;
    e.stopPropagation();
    e.preventDefault();
  };

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    setDragging(true);
    if (attached) return;
    e.preventDefault();
  };
  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    setDragging(false);
    if (attached) return;
    e.preventDefault();
  };
  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    setDragging(false);
    if (attached) return;
    if (!e.dataTransfer.files.length) return;

    e.preventDefault();

    const draggedFile = e.dataTransfer.files[0];

    uploadFile(draggedFile);
  };

  const renderNotAttached = (uploadingDocument: boolean, error: boolean) => {
    return uploadingDocument ? (
      <CircularProgress />
    ) : (
      <>
        {error ? (
          <Alert severity="error">
            Houve um erro ao salvar o documento. Por favor, tente novamente.
          </Alert>
        ) : null}
        <UploadFile />
        <InputFile
          type="file"
          accept=".pdf"
          ref={hiddenFileInput}
          onChange={handleChange}
        />
        <Title>Anexo de documentos</Title>
        <SubTitle>Somente arquivos com a extensão .pdf</SubTitle>
      </>
    );
  };

  const renderAttached = (fileName: string) => {
    return (
      <>
        <Title>Documento Anexado</Title>
        <AttachedFile
          handleClose={handleCloseAttachedFile}
          fileName={fileName}
        />
      </>
    );
  };

  return (
    <UploadDocumentArea
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      onClick={handleClick}
      attached={attached}
      dragging={dragging}
    >
      {attached
        ? renderAttached(file.name)
        : renderNotAttached(uploading, attachmentError)}
    </UploadDocumentArea>
  );
};

export { UploadDocument };
