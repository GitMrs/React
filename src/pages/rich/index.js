import React from 'react';
import { Card, Button, Modal } from 'antd';
import { Editor } from 'react-draft-wysiwyg';
import draftjs from 'draftjs-to-html'
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
export default class Rich extends React.Component {
    state = {
        editorState: '',
        showEditor: false,
        editorContent: ''
    }
    onEditorStateChange = (editorState) => {
        this.setState({
            editorState
        })
    }
    handleGetHtml = () => {
        this.setState({
            showEditor: true
        })
    }
    onEditorChange = (editorContent) => {
        this.setState({
            editorContent
        })
    }
    handleClear = () => {
        this.setState({
            editorState: ''
        })
    }
    render() {
        const { editorState } = this.state;
        return (
            <div>
                <Card>
                    <Button type='primary' onClick={this.handleClear}>清空</Button>
                    <Button onClick={this.handleGetHtml}>获取HTML</Button>
                </Card>
                <Card title='富文本编辑器' style={{ height: "400px" }}>
                    <Editor
                        editorState={editorState}
                        onEditorStateChange={this.onEditorStateChange}
                        onContentStateChange={this.onEditorChange}
                    >
                    </Editor>
                </Card>
                <Modal
                    title='副文本'
                    visible={this.state.showEditor}
                    onCancel={() => {
                        this.setState({
                            showEditor: false
                        })
                    }}
                    footer={null}
                >
                    {draftjs(this.state.editorContent)}
                </Modal>
            </div>
        )
    }
}