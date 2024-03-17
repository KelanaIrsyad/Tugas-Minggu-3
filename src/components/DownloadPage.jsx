import React from "react";
import LoginPage from "./LoginPage";

function DownloadPage(props) {
  //memberikan key untuk setiap nama file
  const hrefLink = [
    { id: 1, namaFile: "File1.pdf" },
    { id: 2, namaFile: "File2.docx" },
    { id: 3, namaFile: "File3.png" },
  ];
  
  return (
    <div>
      <h1>
        Hai, selamat datang {props.username}. <br />
        Silahkan download beberapa file di bawah
      </h1>

      <table>
        <thead>
          <tr>
            <th>No</th>
            <th>Nama file</th>
            <th>Download</th>
          </tr>
        </thead>
        <tbody>
          {hrefLink.map((file) => (
            <tr key={file.id}>
              <td>{file.id}</td>
              <td>{file.namaFile}</td>
              <td>
                <a
                  key={file.id}
                  href={`./src/file/${file.namaFile}`}
                  download={file.namaFile}
                >
                  <button>{file.namaFile}</button>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default DownloadPage;
