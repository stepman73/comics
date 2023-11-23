import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import "./appHeader.scss";
import {
  incrementAction,
  decrementAction,
  multiplicationAction,
} from "../../store/actions";
import React from "react";

function AppHeader() {
  const count = useSelector((store) => store.count);
  const dispatch = useDispatch();
  // console.log(count);

  // const incrementButtonCLick = () => {
  //   dispatch(incrementAction(1));
  // };

  // const decrementButtonCLick = () => {
  //   dispatch(decrementAction(1));
  // };

  // const multiplicationButtonCLick = () => {
  //   dispatch(multiplicationAction(3));
  // };

  return (
    <header className="app__header">
      <h1 className="app__title">
        <Link to="/">
          <span>Marvel</span> information portal
        </Link>
      </h1>

      {/* <span>{count}</span> */}

      {/* <div>
        <button
          style={{ width: "200px", height: "30px" }}
          onClick={incrementButtonCLick}
        >
          +
        </button>
        <button
          style={{ width: "200px", height: "30px" }}
          onClick={decrementButtonCLick}
        >
          -
        </button>

        <button
          style={{ width: "200px", height: "30px" }}
          onClick={multiplicationButtonCLick}
        >
          *
        </button>
      </div> */}

      <nav className="app__menu">
        <ul>
          <li>
            <NavLink
              end
              style={({ isActive }) => ({
                color: isActive ? "#9f0013" : "inherit",
              })}
              to="/"
            >
              Characters
            </NavLink>
          </li>
          /
          <li>
            <NavLink
              end
              style={({ isActive }) => ({
                color: isActive ? "#9f0013" : "inherit",
              })}
              to="/comics"
            >
              Comics
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default AppHeader;
