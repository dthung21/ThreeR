import React,{useEffect,useRef} from 'react'
import './CreateCreator.css'
import data from './data'
import { Link } from 'react-router-dom';


const CreateCreator = ({ onExit }) => {
  // const initialized = useRef(false); // Ref to track if the listener has been initialized
  // useEffect(() => {
  //   // Define a function to handle changes in localStorage
  //   const handleStorageChange = (event) => {
  //     if (!initialized.current) {
  //       initialized.current = true; // Set initialized to true on the first scroll event
  //       return; // Skip the first run logic
  //     }
  //     if (event.key === 'Three-R-user') {
  //       // The value associated with 'Three-R-user' has changed, so you can run your logic here
  //       const newValue = event.newValue;
  //       // Perform actions based on the new value
  //       console.log('LocalStorage value changed:', newValue);
  //     }
  //   };

  //   // Add an event listener for the storage event
  //   window.addEventListener('storage', handleStorageChange);
  //   // Set initialized to false when adding the listener
  //   initialized.current = false;
  //   // Clean up by removing the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener('storage', handleStorageChange);
  //   };
  // }, []); // Empty dependency array ensures the effect runs only once, when the component mounts

  const storedUser = localStorage.getItem('Three-R-user');
  const creatorlist = storedUser ? JSON.parse(storedUser).creatorlist : [];
  const listItems = data.map((item) =>
    creatorlist.includes(item.id) ?<Link to='/creator' state={item} id = {item.id} key={item.id} className='link__creator' onClick={onExit}>
      <div className="item__id" >
        <img src={item.thumb} alt={item.name} />
      </div>
      <p>{item.name}</p>
    </Link>: null
  );
  for (let i = creatorlist.length; i < 4; i++) {
    listItems.push(<div className="item__id empty" key={data.length+i +1} style={{boxShadow: '0 2px 3px #fff'}}></div>);
  }

  return (
    <div className='createcreator'>{listItems}</div>
  )
}

export default CreateCreator