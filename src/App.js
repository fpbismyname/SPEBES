import './App.css';
function App() {
  return (
    <body className='body'>
        <List />
    </body>
  );
}

function List (){
  return(
    <>
    <ul>
    <li><a>Beranda</a></li>
    <li><a>Game</a></li>
    <li><a>Tentang</a></li>
    <li><a>Laporkan bug</a></li>
    </ul>
    </>
  );
}

export default App;
