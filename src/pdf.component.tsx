import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useState } from 'react'
import { pdfjs } from 'react-pdf'
import { Document, Page } from 'react-pdf'
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  '../node_modules/pdfjs-dist/legacy/build/pdf.worker.min.js',
  import.meta.url
).href
//`//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`

function PdfComponent() {
  const [numPages, setNumPages] = useState<number | null>(null)
  const [pageNumber, setCurrentPage] = useState<number>(1)

  function onDocumentLoadSuccess({ numPages }: pdfjs.PDFDocumentProxy) {
    setNumPages(numPages)
  }
  function nextPage() {
    if (numPages && pageNumber < numPages) {
      setCurrentPage(pageNumber + 1)
    }
  }
  function prevPage() {
    if (pageNumber > 1) {
      setCurrentPage(pageNumber - 1)
    }
  }

  return (
    <Document
      file="CV.pdf"
      onLoadSuccess={onDocumentLoadSuccess}
      className="relative flex flex-col gap-4"
    >
      <div className="md:flex md:flex-row md:gap-4">
        <Page pageNumber={1} height={150} />
        <Page pageNumber={2} height={150} className="hidden md:block" />
      </div>
      <a
        className="mx-auto inline-block rounded border-2 border-blue-600 px-6 py-2 text-xs font-medium uppercase leading-tight text-blue-600 transition duration-150 ease-in-out hover:bg-black/5 focus:outline-none focus:ring-0 dark:border-blue-300 dark:bg-gray-50  dark:hover:bg-white/75"
        href="CV.pdf"
        download="CV"
      >
        Download
      </a>
      {
        <div className="absolute inset-x-[calc(50%-100px)] bottom-[5%] flex flex-row justify-center rounded bg-white p-4 opacity-0  transition-opacity hover:opacity-100 md:hidden">
          <FontAwesomeIcon
            onClick={prevPage}
            icon={faAngleLeft}
            className="my-auto w-6"
          />
          <a className="my-auto">
            {pageNumber} of {numPages}
          </a>
          <FontAwesomeIcon
            onClick={nextPage}
            icon={faAngleRight}
            className="my-auto  w-6"
          />
        </div>
      }
    </Document>
  )
}

export default PdfComponent
