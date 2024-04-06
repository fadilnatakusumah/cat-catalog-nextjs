import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/Card";
import { HomeMain } from "@/components/Main/Home.styled";
import SearchInput from "@/components/SearchInput";

export default function Home() {
  return (
    <HomeMain>
      <div className="nav-search">
        <div  className="breadcrumbs-wrapper">
          <Breadcrumbs list={["home", "Sneakers"]} />
        </div>
        <SearchInput placeholder="Search..." />
      </div>
    </HomeMain>
  );
}
