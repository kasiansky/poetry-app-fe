import React, { useState } from 'react';
import CKEditor from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Button } from '@material-ui/core';

const CkEditor = props => {
  // const [data, setData] = useState('');

  // const handleChange = (event, editor) => {
  //   setData(editor.getData());
  // };

  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        // onInit={editor => {
        //   editor.setData(data);
        // }}
        // onChange={handleChange}
      />
      <Button
        variant='contained'
        color='primary'
        // onClick={() => props.handleSave(data)}
      >
        Save and Close
      </Button>
    </div>
  );
};

export default CkEditor;
