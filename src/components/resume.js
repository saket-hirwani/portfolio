import React, {  useEffect } from 'react';
import { Document, Page, pdfjs  } from 'react-pdf';
function Resume() {
    // const [numPages, setNumPages] = useState(null);
    // const [pageNumber, setPageNumber] = useState(1);

   useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;
       return () => {
           
       }
   }, [])
    // function onDocumentLoadSuccess({ numPages }) {
    //   setNumPages(numPages);
    // }
    return (
        <div className="Resume_body" id="resume">
        <h2 style={{ color: "#fff", textAlign:'center' }}>Resume</h2>
        <Document
          file= {require('../assets/Resume.pdf')}
        //   onLoadSuccess={onDocumentLoadSuccess}
        //   onLoadError={(e)=>console.log(e)}
        className="pdf"
        >
        <Page pageNumber={1} />
        </Document>
        <a href="../assets/Resume.pdf" 
         rel="noopener noreferrer"
        target="_blank"><button className="btn_resume" onClick={{}}>Download</button></a>
      </div>
    )
}

export default Resume
