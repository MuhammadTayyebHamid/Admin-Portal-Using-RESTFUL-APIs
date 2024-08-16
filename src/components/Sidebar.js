import '../styles/Sidebar.css'
import {SidebarData} from './SidebarData'

const Sidebar = ({onSelectCategory}) => {

    return(

        <div className='sidebar'>

            <ul className='sidebarList'>

                {SidebarData.map((val,key) => {
                    return (

                        <li key={key} className='row' onClick={ () => onSelectCategory(val.title)}>
                            <div> {val.icon} </div>
                            <div> {val.title} </div>
                        </li>

                    );
                })}

            </ul>

        </div>

    );

}

export default Sidebar;