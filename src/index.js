import { render } from 'react-dom';
import 'antd/dist/antd.css';
import * as React from 'react';
import './index.css';
import { Tree } from 'antd';

const { TreeNode } = Tree;


export class Checkbox extends React.Component {

  state = {
    checkValue: []
  }

  onSelect = (selectedKeys, info) => {
    console.log('selected', selectedKeys, info);
  }

  onCheck = (checkValue, info) => {
    console.log('onCheck ', checkValue, info.node);
    this.setState({ checkValue });
  }
  render() {
    return <div style={{marginTop:'10%', marginLeft:'10%', overflowY:'scroll',overflowX:'hidden', maxHeight:'15%', width:'50%'}} >
    <Tree
      showLine
      defaultExpandedKeys={['0-0-0']}
      onSelect={this.onSelect}
      checkable={true}
      onCheck={this.onCheck}
    >
      <TreeNode title="parent 1" key="0-0">
        <TreeNode title="parent 1-0" key="0-0-0">
          <TreeNode title="leaf" key="0-0-0-0" />
          <TreeNode title="leaf" key="0-0-0-1" />
          <TreeNode title="leaf" key="0-0-0-2" />
        </TreeNode>
        <TreeNode title="parent 1-1" key="0-0-1">
          <TreeNode title="leaf" key="0-0-1-0" />
        </TreeNode>
        <TreeNode title="parent 1-2" key="0-0-2">
          <TreeNode title="leaf" key="0-0-2-0" />
          <TreeNode title="leaf" key="0-0-2-1" />
        </TreeNode>
      </TreeNode>
      <TreeNode title="parent 2" key="0-1">
        <TreeNode title="parent 2-0" key="0-1-0">
          <TreeNode title="leaf" key="0-1-0-0" />
          <TreeNode title="leaf" key="0-1-0-1" />
          <TreeNode title="leaf" key="0-1-0-2" />
        </TreeNode>
        <TreeNode title="parent 2-1" key="0-1-1">
          <TreeNode title="leaf" key="0-1-1-0" />
        </TreeNode>
        <TreeNode title="parent 2-2" key="0-1-2">
          <TreeNode title="leaf" key="0-1-2-0" />
          <TreeNode title="leaf" key="0-1-2-1" />
        </TreeNode>
      </TreeNode>
    </Tree></div>;
  }
}

render(<Checkbox />, document.getElementById('sample'));