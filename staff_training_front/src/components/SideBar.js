import { Sidebar } from 'flowbite-react';
import { observer } from "mobx-react-lite";
import {Button} from 'react-bootstrap';
import { SPRAV_ROUTE, WORKER_ROUTE } from '../utils/consts';
import {useNavigate} from "react-router-dom";


const SideBar = observer(() => {
    const navigate = useNavigate()
    return (
        <Sidebar>
            <Sidebar.ItemGroup>
              <Sidebar.Item>
                <Button variant={"outline-dark"} className='mt-4' onClick={() => navigate(WORKER_ROUTE)}>Работники</Button>
              </Sidebar.Item>
              <Sidebar.Item>
                <Button variant={"outline-dark"} className='mt-4' onClick={() => navigate(SPRAV_ROUTE)}>Справочники</Button>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
        </Sidebar>
      );
});
export default SideBar;