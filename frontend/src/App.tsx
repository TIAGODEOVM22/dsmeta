import Header from "./components/Header"
import SalesCard from "./components/SalesCard"
function App() {
  return (
    <>
      <h1>Ola mundo</h1>
      <Header />
      <main>
        <section id="sales">
          <div className="dsmeta-container">
            <SalesCard />
          </div>
        </section>
      </main>
    </>
  )
}
export default App
