import PageContainer from "@/styles/components/page-container";
import classes from "./chess.module.css";
import { IPageParamProps } from "@/constants/interfaces";
import { ServerFooter } from "@/components/layout/footer/serverfooter";
import ChessHeader from "./components/chess-header/chess-header";
import ChessButtons from "./components/chess-buttons/chess-buttons";
import NavbarWrapper from "@/styles/components/navbar-wrapper/navbar-wrapper";

const PageChessHome = ({ params }: IPageParamProps) => {
  return (
    <div className={classes.container}>
      <PageContainer
        language={params.lng}
        footer={<ServerFooter language={params.lng} path="/chess" />}>
        <NavbarWrapper>
          <ChessHeader />
          <ChessButtons language={params.lng} />
        </NavbarWrapper>
      </PageContainer>
    </div>
  );
};
export default PageChessHome;
