import React from 'react';
import { Select } from 'antd';
import { version as antdVersion } from '../../../package.json';
import { docVersions } from '../../website.config';
const Option = Select.Option;

docVersions[antdVersion] = antdVersion;

export default class Footer extends React.Component {
  constructor(props) {
    super(props);

    this.handleVersionChange = this.handleVersionChange.bind(this);
  }

  handleVersionChange(url) {
    window.location.href = url;
  }

  render() {
    const options = Object.keys(docVersions).map(version => (
      <Option value={docVersions[version]} key={version}>{version}</Option>
    ));
    return (
      <footer id="footer">
        <ul>
          <li>
            <h2>GitHub</h2>
            <div>
              <a target="_blank " href="https://github.com/ant-design/ant-design">仓库</a>
            </div>
            <div>
              <a target="_blank" href="https://github.com/ant-design/antd-init">antd-init</a> - 脚手架
            </div>
            <div>
              <a target="_blank" href="http://ant-tool.github.io">ant-tool</a> - 开发工具
            </div>
          </li>
          <li>
            <h2>相关站点</h2>
            <div><a href="http://motion.ant.design">Ant Motion</a> - 设计动效</div>
            <div><a href="http://motion.ant.design">Ant UX</a> - 页面逻辑素材</div>
          </li>
          <li>
            <h2>联系我们</h2>
            <div>
              <a target="_blank" href="https://github.com/ant-design/ant-design/issues">
                反馈和建议
              </a>
            </div>
            <div>
              <a target="_blank" href="https://gitter.im/ant-design/ant-design">
                讨论
              </a>
            </div>
            <div>
              <a target="_blank" href="https://github.com/ant-design/ant-design/issues/new">
                报告 Bug
              </a>
            </div>
          </li>
          <li>
            <div>©2016 蚂蚁金服体验技术部出品</div>
            <div style={{ marginTop: 10 }}>
              文档版本：
              <Select
                size="small"
                dropdownMatchSelectWidth={false}
                defaultValue={antdVersion}
                onChange={this.handleVersionChange}>
                {options}
              </Select>
            </div>
          </li>
        </ul>
      </footer>
    );
  }
}
