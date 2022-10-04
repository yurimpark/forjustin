import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../store";
import { changeName, increase } from "../store/userSlice";

function Wish() {
  let dispatch = useDispatch();
  let state = useSelector((state) => {
    return state;
  });
  console.log(state.wish[0].title);

  return (
    <div>
      <h6>
        {state.user.name} {state.user.age}'s Wishlist
      </h6>
      <button
        onClick={() => {
          dispatch(increase(5));
        }}
      >
        button
      </button>
      <Table>
        <thead>
          <tr>
            <th>♥</th>
            <th>Title</th>
            <th>Role</th>
            <th>Released</th>
            <th>Watched</th>
          </tr>
        </thead>
        <tbody>
          {state.wish.map((a, i) => {
            return (
              <tr key={i}>
                <td>{state.wish[i].id + 1}</td>
                <td>{state.wish[i].title}</td>
                <td>{state.wish[i].role}</td>
                <td>{state.wish[i].released}</td>
                <td>{state.wish[i].count}</td>
                <button
                  onClick={() => {
                    dispatch(addCount(state.wish[i].id));
                  }}
                >
                  +
                </button>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
export default Wish;
