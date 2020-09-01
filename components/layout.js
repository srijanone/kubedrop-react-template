import NavbarComponent from '../components/navbar'

function Layout({ children }) {
    return (
        <>
        <NavbarComponent></NavbarComponent>
        <div>{children}</div>
        
        </>
    )
  }
  
  export default Layout