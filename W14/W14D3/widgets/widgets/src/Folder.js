import React from 'react'

const Headers = (props) => {
  const { folders, currentTab, selectTab } = props;
  const titles = folders.map(folder => folder.title);
  const handleClick = (e) => {
    const idx = parseInt(e.target.id, 10);
    selectTab(idx);
  }
  const tabs = titles.map((title, idx) => {
    const headerClass = (idx === currentTab) ? 'active' : '';
    return (
      <li key={idx} className={headerClass} id={idx} onClick={handleClick} >
        {title}
      </li>
    );
  })

  return (
    <ul className='tab-header'>
      {tabs}
    </ul>
  );

  
};

class Folder extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          currentTab: 0
        }
    }

  selectTab = (idx) => {
    this.setState({ currentTab: idx });
  }

render() {
    const folder = this.props.folders[this.state.currentTab];
  
    return (
      <div>
        <h1>Folder</h1>
        <div className='tabs'>
          <Headers folders={this.props.folders} selectTab={this.selectTab} currentTab={this.state.currentTab}/>
          <div className='tab-content'>
            {folder.content}
          </div>
        </div>
      </div>
    );
  }
}

export default Folder