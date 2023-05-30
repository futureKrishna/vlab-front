import React from 'react'

function Layout({children}) {
  return (
    <>
    <div>
      <nav className="home-nav">
        <img
          style={{
            height: "4rem",
            width: "4rem",
            borderRadius: "50px",
            cursor: "pointer",
          }}
          src="https://tse1.mm.bing.net/th?id=OIP.rzVhD8gNbUFkHsS9fph7DAHaHa&pid=Api&P=0"
          alt="logo"
        />
        <h1
          style={{
            fontSize: "2rem",
            marginRight: "800px",
            color: "whiteSmoke",
          }}
        >
          Virtual Lab
        </h1>
      </nav>  
    </div>
    <div>{children}</div>
    </>
  )
}

export default Layout