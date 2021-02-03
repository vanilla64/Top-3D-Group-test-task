import React from 'react';
import './Header.css'
import HeaderContacts from "../HeaderContacts/HeaderContacts";
import HeaderMainContent from "../HeaderMainContent/HeaderMainContent";

function Header() {
  return (
    <header className="header">
      <HeaderContacts />
      <HeaderMainContent />
    </header>
  );
}

export default Header;
