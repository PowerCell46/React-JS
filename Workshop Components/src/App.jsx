import { useEffect, useState } from "react"
import { CreateEdit } from "./components/CreateEdit";
import Delete from "./components/Delete";
import Footer from "./components/Footer";
import Details from "./components/Details";
import Header from "./components/Header";
import { BASE_SERVER_URL } from "./utils/constants";
import TableRow from "./components/TableRow";
import EmptyTable from "./components/EmptyTable";
import Pagination from "./components/Pagination";
import Search from "./components/Search";


function App() {
  const [selectedUser, setSelectedUser] = useState(undefined);
  const [hiddenShownComp, setHiddenShownComp] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${BASE_SERVER_URL}/users`)
    .then(response => response.json())
    .then(data => setUsers(Object.values(data)))
    .catch(err => console.error(err));
  }, []);

  useEffect(() => {
    setHiddenShownComp({...hiddenShownComp, createView: false, deleteView: false, detailsView: false});
  }, []);

  return (
    <>
    <Header/>

  <main className="main">
    <section className="card users-container">

      <Search/>

      {/* <!-- Table component --> */}
      <div className="table-wrapper">

        {/* Spinner here */}

        <table className="table">
          <thead>
            <tr>
              <th>
                Image
              </th>
              <th>
                First name<svg aria-hidden="true" focusable="false" data-prefix="fas"
                  data-icon="arrow-down" className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Last name<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Email<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Phone<svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="arrow-down"
                  className="icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img" xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>
                Created
                <svg aria-hidden="true" focusable="false" data-prefix="fas"
                  data-icon="arrow-down" className="icon active-icon svg-inline--fa fa-arrow-down Table_icon__+HHgn" role="img"
                  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path fill="currentColor"
                    d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z">
                  </path>
                </svg>
              </th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>

            {users.length > 0 ? 
            users.map(user => 
              <TableRow key={user._id}
              user={user} hiddenShownComp={hiddenShownComp} setHiddenShownComp={setHiddenShownComp} setSelectedUser={setSelectedUser}/>)
            : 
              <EmptyTable/>
            }

          </tbody>
        </table>
      </div>

      {/* <!-- New user button  --> */}
      <button onClick={() => setHiddenShownComp({...hiddenShownComp, createView: true})} className="btn-add btn">Add new user</button>

      <Pagination/>

    </section>

    {hiddenShownComp.detailsView ? 
      <Details userId={selectedUser} users={users} setSelectedUser={setSelectedUser}
      setHiddenShownComp={setHiddenShownComp} hiddenShownComp={hiddenShownComp}/> 
    :
      null
    }


    {hiddenShownComp.createView ? 
      <CreateEdit 
        hiddenShownComp={hiddenShownComp}
        setHiddenShownComp={setHiddenShownComp}
        setUsers={setUsers}
        userId={selectedUser}
        setSelectedUser={setSelectedUser}
        users={users}
      /> 
    :
      null
    }

    {hiddenShownComp.deleteView ? 
      <Delete
      userId={selectedUser}
      setSelectedUser={setSelectedUser}
      setUsers={setUsers}
      setHiddenShownComp={setHiddenShownComp}
      /> 
    :
      null
    }

  </main>
    
    <Footer/>
  </>
  )
}

export default App
