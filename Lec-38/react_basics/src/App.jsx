import Button from "./components/Button"
import Counter from "./components/Counter"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"
import Person from "./components/Person"


function App() {
  const data = [
    {
      name: "Rahul",
      profession: "Singer",
      address: "Noida, India",
    },
    {
      name: "Rahul 2",
      profession: "Singer 2",
      address: "Noida 2, India",
    },
    {
      name: "Rahul 3",
      profession: "Singer 3",
      address: "Noida 3, India",
    },
  ];

  return (
    <div>
      {/* <Header></Header> */}
      {/* <Header/>
      <Main/>
      <Footer/> */}
      {/* <Button/> */}


      {/* <Person name="Rahul" profession="Singer" address="Noida, India"/>
      <Person name="Manish" profession="Dancer" address="Delhi, India"/>
      <Person name="Harsh" profession="Engineer" address="Faridabad, India"/> */}

      {
        data.map(personData => 
          <Person 
            name={personData.name} 
            profession={personData.profession} 
            address={personData.address}
          />
        )
      }
        
    </div>
  )
}

// function abc() {
  
// }

// function xyz() {

// }

// export function temp() {

// }

export default App
// module.exports = App

// export {abc, xyz}
// module.exports = {abc, xyz}

// module.exports.abc = function(){}

// import