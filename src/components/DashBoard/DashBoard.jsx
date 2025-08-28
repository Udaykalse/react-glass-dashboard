import React, { useState } from 'react';
import { 
  LeftArrow, 
  RightArrow, 
  ChevronUp, 
  Dashboard, 
  BelowPlus, 
  Notification, 
  GreenCircle, 
  RedCircle, 
  YellowCircle,
  InVoice,
  Wallet,
  Message,
  OpenDashboard
} from "./../../assets/Icons";
import styles from './Dashboard.module.css';

function DashBoard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [activeItem, setActiveItem] = useState('Dashboard');

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const menuItems = [
    { id: 'dashboard', name: 'Dashboard', icon: <Dashboard /> },
    { id: 'invoice', name: 'InVoice', icon: <InVoice /> },
    { id: 'wallet', name: 'Wallet', icon: <Wallet /> },
    { id: 'notification', name: 'Notification', icon: <Notification /> },
    { id: 'message', name: 'Message', icon: <Message /> },
  ];

  const statusItems = [
    { id: 'green', icon: <GreenCircle /> },
    { id: 'red', icon: <RedCircle /> },
    { id: 'yellow', icon: <YellowCircle /> },
  ];

  return (
    <div className={styles.dashboardContainer}>
      {/* Sidebar Toggle Button */}
      <button 
        className={`${styles.sidebarToggle} ${isSidebarOpen ? styles.open : ''}`}
        onClick={toggleSidebar}
      >
        {isSidebarOpen ? <LeftArrow /> : <RightArrow />}
      </button>

      {/* Glass Effect Sidebar */}
      <div className={`${styles.sidebar} ${isSidebarOpen ? styles.sidebarOpen : styles.sidebarClosed}`}>
        <div className={styles.sidebarContent}>
          {/* Logo Section */}
          <div className={styles.logoSection}>
            <OpenDashboard />
            {isSidebarOpen && <span className={styles.logoText}>Dashboard</span>}
          </div>

          {/* Main Navigation */}
          <nav className={styles.navigation}>
            <ul className={styles.menuList}>
              {menuItems.map(item => (
                <li key={item.id}>
                  <button 
                    className={`${styles.menuItem} ${activeItem === item.name ? styles.active : ''}`}
                    onClick={() => setActiveItem(item.name)}
                  >
                    <span className={styles.menuIcon}>{item.icon}</span>
                    {isSidebarOpen && <span className={styles.menuText}>{item.name}</span>}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Status Section */}
          {isSidebarOpen && (
            <div className={styles.statusSection}>
              <h3 className={styles.statusTitle}>Status</h3>
              <div className={styles.statusItems}>
                {statusItems.map(item => (
                  <div key={item.id} className={styles.statusItem}>
                    {item.icon}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Add Button */}
          <div className={styles.addButtonContainer}>
            <button className={styles.addButton}>
              <BelowPlus />
              {isSidebarOpen && <span>Add New</span>}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default DashBoard;