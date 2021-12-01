function NavBar() {
    return ( <nav>
      
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">MusemPice</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarText">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Compras <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Ver carro</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Soporte</a>
      </li>
    </ul>
    <span class="navbar-text">
      Disfruta la compra
    </span>
  </div>
</nav>
        </nav>
    )
}



export default NavBar;