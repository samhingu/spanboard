import React, { Component } from 'react'
import { Tag, Input, Tooltip, Button } from 'antd'

class EditableTagGroup extends Component {
  state = {
    tags: ['Unremovable', 'Tag 2', 'Tag 3'],
    inputVisible: false,
    inputValue: '',
  }

  handleClose = (removedTag) => {
    const tags = this.state.tags.filter((tag) => tag !== removedTag)
    this.setState({ tags })
  }

  showInput = () => {
    this.setState({ inputVisible: true }, () => this.input.focus())
  }

  handleInputChange = (e) => {
    this.setState({ inputValue: e.target.value })
  }

  handleInputConfirm = () => {
    const { tags, inputValue } = this.state
    let newTags = tags
    if (inputValue && tags.map((i) => i.toLowerCase()).indexOf(inputValue.toLowerCase()) === -1) {
      newTags = [...tags, inputValue]
    }
    this.setState({
      tags: newTags,
      inputVisible: false,
      inputValue: '',
    })
  }

  saveInputRef = (input) => { this.input = input }

  render() {
    const { tags, inputVisible, inputValue } = this.state
    return (
      <div>
        {tags.map((tag, index) => {
          const isLongTag = tag.length > 20
          const tagElem = (
            <Tag key={tag} closable={index !== 0} afterClose={() => this.handleClose(tag)}>
              {isLongTag ? `${tag.slice(0, 20)}...` : tag}
            </Tag>
          )
          return isLongTag ? <Tooltip title={tag}>{tagElem}</Tooltip> : tagElem
        })}
        {inputVisible && (
          <Input
            ref={this.saveInputRef}
            type="text"
            size="small"
            style={{ width: 78 }}
            value={inputValue}
            onChange={this.handleInputChange}
            onBlur={this.handleInputConfirm}
            onPressEnter={this.handleInputConfirm}
          />
        )}
        {!inputVisible && <Button size="small" type="dashed" onClick={this.showInput}>+ New Tag</Button>}
      </div>
    )
  }
}

export default EditableTagGroup

