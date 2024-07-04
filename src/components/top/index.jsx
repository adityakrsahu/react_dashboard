const Top = () => {
  let infoname =localStorage.getItem('infoname');
  let infoemail=localStorage.getItem('infoemail');
  return (
    <>
    <center>
      <aside style={{float:"top", fontSize:"50px" , backgroundColor:"rgb(46, 46, 54)",color:'white'}}>
        Admin Dashboard
        <div style={{fontSize:"20px", paddingLeft: " 175px" }}>{infoname}&nbsp;&nbsp;&nbsp;{infoemail}</div>
      </aside> 
    </center>   
    </>
  )
}

export default Top;
