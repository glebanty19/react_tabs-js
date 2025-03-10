export const Tabs = ({ tabs, activeTabId, onTabSelected }) => {
  // Find active tab or default to first tab
  const activeTab = tabs.find(tab => tab.id === activeTabId) || tabs[0];

  // Handle tab click
  const handleTabClick = (event, tabId) => {
    event.preventDefault();
    // Only notify parent if selecting a different tab
    if (tabId !== activeTabId) {
      onTabSelected(tabId);
    }
  };

  return (
    <div data-cy="TabsComponent">
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              key={tab.id}
              className={tab.id === activeTab.id ? 'is-active' : ''}
              data-cy="Tab"
            >
              <a
                href={`#${tab.id}`}
                data-cy="TabLink"
                onClick={e => handleTabClick(e, tab.id)}
              >
                {tab.title}
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab.content}
      </div>
    </div>
  );
};
