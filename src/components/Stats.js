
function Stats({ items }) {

    if(!items.length){
      return <p className='starts'>
        <em>
          Start adding some items to your paking list.
        </em>
      </p>
    }
  
    const numberOfItems = items.length;
    const numberOfPackedItem = items.filter((item) => item.packed).length;
    const percentage = Math.round((numberOfPackedItem / numberOfItems) * 100);
  
    return (
      <footer className='stats'>
        <em>
          {percentage === 100 ? "You got everything! Ready to go ✈️" : 
         ` 💼 You have ${numberOfItems} items on your list, and you already packed ${numberOfPackedItem} (${percentage}%)`
           }
        </em>
      </footer>
    )
  }

  export default Stats;
  