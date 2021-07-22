// @ts-nocheck
import React, { useRef, useCallback, useState } from "react"
import SplitPane from "react-split-pane"
import Editor, { loader } from "@monaco-editor/react"
import nightOwl from "monaco-themes/themes/Night Owl.json"
// import { EditorStyled } from "./styled"
import { TabBar, SplitBar } from "./bars"
import initContent from "./initialContent"
import Preview from "./preview"
import "./styles.css"

type Props = {
  children?: React.ReactNode,
  defaultValue: any
}

const EditorPreview: React.FC<Props> = ({defaultValue}) => {
  const editorContainerRef = useRef(null)
  const previewRef = useRef(null)
  const [activeTab, setActiveTab] = useState("html")
  const [split, setSplit] = useState("vertical")

  const initialContent = defaultValue ? defaultValue : initContent

  if (typeof window !== "undefined") {
    loader.init()
      .then(monaco => {
        monaco.editor.defineTheme("night-owl", nightOwl)
      })
  }


  const handleEditorDidMount = (editor: any) => {
    editorContainerRef.current = editor
    //@ts-ignore
    editorContainerRef.current.updateOptions({
      minimap: {
        enabled: false
      },
      lineNumbersMinChars: 3
    })
  }

  const inject = useCallback((content) => {
    //@ts-ignore
    previewRef.current.contentWindow.postMessage(content, "*")
  }, [])

  //@ts-ignore
  const handleEditorChange = (value) => {
    if (activeTab === "html") {
      inject({ html: value })
    }
    if (activeTab === "css") {
      inject({ css: value })
    }
    if (activeTab === "javascript") {
      inject({ js: value })
    }
  }

  const handleSelectTab = useCallback((val) => {
    setActiveTab(val)
  }, [])

  //@ts-ignore
  const tabSeleceted = (val) => activeTab === val ? "bg-blueGray-900" : null

  //@ts-ignore
  const handleSplit = (val) => {
    setSplit(val)
  }

  return (
    <div className="shipless-play code-play">
      <div className="border-b border-blueGray-800 bg-blueGray-900 rounded-tr-md rounded-tl-md">
        <div className="flex justify-between h-12 items-center text-base">
          <div className="px-4">
            <div className="flex items-center">
              <div>
                <span className="text-base uppercase font-bold text-blue-light" style={{color: "#56CCF2"}}>Play</span>
              </div>
              <TabBar tabSeleceted={tabSeleceted} handleSelectTab={handleSelectTab}/>
            </div>
          </div>
          <div className="px-4">
            <SplitBar split={split} handleSplit={handleSplit}/>
          </div>
        </div>
      </div>
      <SplitPane
        split={split}
        size="50%"
        style={{position: "relative"}}
        className="border border-blueGray-800 border-t-0 rounded-br-md rounded-bl-md"
      >
        <div>
          <Editor
            height="300px"
            defaultLanguage={activeTab}
            path={activeTab}
            defaultValue={initialContent[activeTab]}
            theme="night-owl"
            onMount={handleEditorDidMount}
            onChange={handleEditorChange}
          />
        </div>
        <div className="relative w-full h-full" style={{height: split === "horizontal" ? 300 : null}}>
          <Preview ref={previewRef} inject={inject} initialContent={initialContent}/>
        </div>
      </SplitPane>
    </div>
  )
}

export default EditorPreview