import React, { Component } from 'react'
import { Tree, Icon } from 'antd'

const TreeNode = Tree.TreeNode

class TreeDemo extends Component {
  state = {
    treeData: [
      { title: 'Expand to load', key: '0' },
      { title: 'Expand to load', key: '1' },
      { title: 'Tree Node', key: '2', isLeaf: true },
    ],
  }
  onDrop = (info) => {
    console.log(info)
    const dropKey = info.node.props.eventKey
    const dragKey = info.dragNode.props.eventKey
    const dropPos = info.node.props.pos.split('-')
    const dropPosition = info.dropPosition - Number(dropPos[dropPos.length - 1])
    // const dragNodesKeys = info.dragNodesKeys
    const loop = (data, key, callback) => {
      data.forEach((item, index, arr) => {
        if (item.key === key) {
          callback(item, index, arr)
        }
        if (item.children) {
          loop(item.children, key, callback)
        }
      })
    }
    const data = [...this.state.treeData]
    let dragObj
    loop(data, dragKey, (item, index, arr) => {
      arr.splice(index, 1)
      dragObj = item
    })
    if (info.dropToGap) {
      let ar
      let i
      loop(data, dropKey, (item, index, arr) => {
        ar = arr
        i = index
      })
      if (dropPosition === -1) {
        ar.splice(i, 0, dragObj)
      } else {
        ar.splice(i - 1, 0, dragObj)
      }
    } else {
      loop(data, dropKey, (item) => {
        item.children = item.children || []
        // where to insert 示例添加到尾部，可以是随意位置
        item.children.push(dragObj)
      })
    }
    this.setState({
      treeData: data,
    })
  }
  onLoadData = (treeNode) => (
    new Promise((resolve) => {
      if (treeNode.props.children) {
        resolve()
        return
      }
      setTimeout(() => {
        treeNode.props.dataRef.children = [
          { title: <div>Hello WOlrd<Icon type="link" /></div>, key: `${treeNode.props.eventKey}-0` },
          { title: 'Child Node', key: `${treeNode.props.eventKey}-1` },
        ]
        this.setState({
          treeData: [...this.state.treeData],
        })
        resolve()
      }, 1000)
    })
  )
  renderTreeNodes = (data) => (
    data.map((item) => {
      if (item.children) {
        return (
          <TreeNode title={item.title} key={item.key} dataRef={item}>
            {this.renderTreeNodes(item.children)}
          </TreeNode>
        )
      }
      return <TreeNode {...item} dataRef={item} />
    })
  )
  render() {
    return (
      <Tree loadData={this.onLoadData} draggable onDrop={this.onDrop}>
        {this.renderTreeNodes(this.state.treeData)}
      </Tree>
    )
  }
}

export default TreeDemo
