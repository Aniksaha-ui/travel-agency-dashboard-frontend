import "./list.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import Datatable from "../../components/datatable/Datatable"
import { useRecoilState } from "recoil"
import { userInformationAtom } from "../../states/common"

const List = () => {

  const [count, setCount] = useRecoilState(userInformationAtom);
  console.log(count,"user information from list");
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <Datatable/>
      </div>
    </div>
  )
}

export default List