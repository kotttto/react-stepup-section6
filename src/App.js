import { PrimaryButton } from "./components/atoms/button/PrimaryButton";
import { SecondaryButton } from "./components/atoms/button/SecondaryButton";
import { SearchInput } from "./components/molecules/SearchInput";
import { UserCard } from "./components/organisms/user/UserCard";
import "./styles.css";

import dogImage from "./img/dog.jpg";
import { Headeronly } from "./components/templates/HeaderOnly";
import { BrowserRouter } from "react-router-dom/cjs/react-router-dom";
import { DefaultLayout } from "./components/templates/DefaultLayout";
import { Router } from "./router/Router";

export default function App() {
  return <Router />;
}
