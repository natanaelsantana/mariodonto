const Header = () => (
    <header className="bg-white text-black fixed top-0 w-4/5 flex self-center items-center justify-between p-5 z-30" style={{left: '0', right: '0', margin: 'auto'}}>
    <img src=".\src\pics\Logo-Mari-Odontologia-Guaruja.fw_.png" alt="Mari Odonto Logo" className="h-24 mr-4;" />
    <nav className="flex items-center space-x-4">
      <a href="/" className="nav-link">Home</a>
      <a href="/quem-somos" className="nav-link">Quem Somos</a>
      <a href="/tratamentos" className="nav-link">Os tratamentos</a>
      <a href="/aparelho-invisalign" className="nav-link">Invisalign</a>
    </nav>
  </header>
  
  );
  
  export default Header;
  