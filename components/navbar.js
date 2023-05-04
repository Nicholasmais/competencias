class NavBar extends HTMLElement {
  constructor() {
    super();
  }
  connectedCallback() {
    this.innerHTML = `
      <style>
        header{
          display: flex;
          justify-content: center;
        }              
        nav{
          display: inline-flex;
          flex-direction: row;
          background-color: rgb(255, 255, 196);
          gap: 2rem;
          padding: .5rem;
          margin-bottom: 2rem;
          border-radius: 5px 10px 15px 20px;
        }
        a{
          color:black;
          text-decoration: none;
        }
        a:hover{
          cursor: pointer;
          transform: scale(1.25);
        }
        nav a.active{
          text-decoration: underline;
        }
      </style>
      <header>
        <nav>
          <a class="all-competences" href="/index.html">
            Ver competências
          </a>
          <a class="all-competences" href="/setCompetence.html">
            Minhas competências
          </a>
          <a class="criar-competencia" href="/create.html">
            Criar competências
          </a>
          <a class="editar-competencias" href="/edit.html">
            Editar competências
          </a>
        </nav>
      </header>
    `;
  }
}

customElements.define('navbar-component', NavBar);
