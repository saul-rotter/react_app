import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import { PlayerLink } from "../features/players/playersLinks";
import { useGetPlayersQuery } from '../features/players/playersSlice';


function PlayerNavigation({ token }) {
  const { data: players = [], isSuccess } = useGetPlayersQuery(token);
  let content = null;

  if (isSuccess) {
    content = players.map((player) => (
      <Nav.Item style={{ padding: 5 }} key={player.playerId}>
        <PlayerLink player={player} />
      </Nav.Item>
    ));
  }
  return (
    <Navbar
      collapseOnSelect
      bg="dark"
      variant="dark"
      style={{ height: "min-content", width: "max-content" }}
    >
      <Navbar.Brand href="/react_app" style={{ width: "20%", paddingRight: 5 }}>
        <img
          src={"/react_app/trumedialogo.png"}
          alt={"Logo"}
          className="img-thumbnail"
        />
      </Navbar.Brand>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav style={{ width: "25%", paddingRight: 10 }}>{content}</Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default PlayerNavigation;
