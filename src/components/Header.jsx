const Header = () => {

  const styles = {
      width:'100%',
      backgroundColor:'#0d47a1',
      padding:'0.1rem',
      boxSizing:'border-box',
      position:'fixed'
      
  }


  return <div>
      <div style={styles}>
          <h2 style={{fontSize:'1.3rem',marginLeft:'1rem',color:'white'}}>Photo</h2>
      </div>
  </div>;
};

export default Header;
