// @ts-nocheck
import React, { useRef, useCallback, useState, memo } from "react"
import SplitPane from "react-split-pane"
import Editor, { loader } from "@monaco-editor/react"
import nightOwl from "monaco-themes/themes/Night Owl.json"
import { TabBar, SplitBar } from "./bars"
import initContent from "./initialContent"
import Preview from "./preview"
import "./styles.css"

type Props = {
  children?: React.ReactNode,
  defaultValue: any
}

if (typeof window !== "undefined") {
  loader.init()
    .then(monaco => {
      monaco.editor.defineTheme("night-owl", nightOwl)
    })
}

const EditorMemo = memo(({defaultLanguage, path, defaultValue, onMount, onChange}) => (
  <Editor
    height="300px"
    defaultLanguage={defaultLanguage}
    path={path}
    defaultValue={defaultValue}
    theme="night-owl"
    onMount={onMount}
    onChange={onChange}
  />
))

const EditorPreview: React.FC<Props> = ({defaultValue}) => {
  const editorContainerRef = useRef(null)
  const previewRef = useRef(null)
  const [activeTab, setActiveTab] = useState("html")
  const [split, setSplit] = useState("vertical")
  const [isDrag, setIsDrag] = useState(false)

  const initialContent = defaultValue ? defaultValue : initContent

  const handleEditorDidMount = useCallback((editor: any) => {
    editorContainerRef.current = editor
    editorContainerRef.current.updateOptions({
      minimap: {
        enabled: false
      },
      lineNumbersMinChars: 3
    })
  }, [])

  const inject = useCallback((content) => {
    previewRef.current.contentWindow.postMessage(content, "*")
  }, [])

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

  const tabSeleceted = (val) => activeTab === val ? "bg-blueGray-900" : null

  const handleSplit = (val) => {
    setSplit(val)
  }
  
  return (
    <div className="shipless-play">
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
        className="rounded-br-md rounded-bl-md"
        onDragStarted={() => setIsDrag(true)}
        onDragFinished={() => setIsDrag(false)}
      >
        <div className="bg-blueGray-900">
          <EditorMemo
            height="300px"
            defaultLanguage={activeTab}
            path={activeTab}
            defaultValue={initialContent[activeTab]}
            theme="night-owl"
            onMount={handleEditorDidMount}
            onChange={handleEditorChange}
          />
        </div>
        <div className="relative w-full h-full" style={{height: split === "horizontal" ? 300 : null, pointerEvents: isDrag ? "none" : "auto"}}>
          {/* <div>
          <iframe src="" frameBorder="0">asdf</iframe>
          </div> */}
          <Preview ref={previewRef} inject={inject} initialContent={initialContent}/>
        </div>
      </SplitPane>
    </div>
  )
}

export default EditorPreview