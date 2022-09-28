import {useState} from 'react'

const ListNav = ({link}) => {

    const [toggle, setToggle] = useState(false)

  return (
    <div
        onMouseEnter={() => setToggle(true)}
        onMouseLeave={() => setToggle(false)}
    >
        <p style={{backgroundColor: 'lightblue', margin: 30}}>
            {link.titulo}
        </p>

        { toggle &&
            <ul style={{backgroundColor: 'lightblue'}}>
                {link.lista.map(item => <li key={item}>{item}</li>)}
            </ul>
        }
    </div>
  )
}

export default ListNav