import React, {useState} from "react";
import Docxtemplater from "docxtemplater";
import PizZip from "pizzip";
// @ts-ignore
import PizZipUtils from "pizzip/utils/index.js";
import { saveAs } from "file-saver";
// @ts-ignore
import mammoth from "mammoth";
import escape from 'escape-html';
import fs from "fs";
// @ts-ignore
import * as docTest from './default.docx';

function loadFile(url:any, callback:any) {
  PizZipUtils.getBinaryContent(url, callback);
}

function Tax() {
	
  const [htmlDocx, setHtmlDocx] = useState<any>('')

  const generateDocument = () => {
    loadFile("https://docxtemplater.com/tag-example.docx", async function(
      error:any,
      content:any
    ) {

      const reader = new FileReader()
      reader.onload = async (e) => { 
      const text = (e?.target?.result || '')
      console.log(text)
      alert(text)
    };
    // reader.readAsArrayBuffer('./default.docx')

      console.log("🚀 ~ file: index.tsx ~ line 79 ~ generateDocument ~ content", docTest)
      
      if (error) {
        throw error;
      }
      let zip = new PizZip(content);
      let doc = new Docxtemplater().loadZip(zip);
      await doc.setData({
        first_name: "John",
        last_name: "Doe",
        phone: "0652455478",
        description: "New Website"
      });
      try {
        await doc.render();
      } catch (error) {
       // @ts-ignore
        function replaceErrors(key, value) {
          if (value instanceof Error) {
            return Object.getOwnPropertyNames(value).reduce(function(
              error,
              key
            ) {
              // @ts-ignore
              error[key] = value[key];
              return error;
            },
            {});
          }
          return value;
        }
        console.log(JSON.stringify({ error: error }, replaceErrors));

        if (error.properties && error.properties.errors instanceof Array) {
          const errorMessages = error.properties.errors
            .map(function(error:any) {
              return error.properties.explanation;
            })
            .join("\n");
          console.log("errorMessages", errorMessages);
        }
        throw error;
      }
      let out = await doc.getZip().generate({
        type: "blob",
        mimeType:
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      });
      const res = await out.arrayBuffer()
      generateDocx(res)
      // saveAs(out, "output.docx");
    });
  };

  const generateDocx = (file:any) => {
    mammoth.convertToHtml({arrayBuffer:file})
    .then(displayResult)
    .done();
  }

  const displayResult=(result:any) =>{
  console.log("🚀 ~ file: index.tsx ~ line 83 ~ displayResult ~ result", result)
    let messageHtml =  result.messages.map(function(message:any) {
        return '<li class="' + message.type + '">' + message.message + "</li>";
    }).join("");
    setHtmlDocx(result.value)
    console.log("🚀 ~ file: index.tsx ~ line 88 ~ displayResult ~ messageHtml", messageHtml)
}

  return (
    <div className="p-2">
    <button onClick={generateDocument}>Generate document</button>
    <div>{htmlDocx}</div>
  </div>
  )
}


export default Tax
