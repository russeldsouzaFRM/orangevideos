import TabComponent from "./TestComponent";
import "../styles/Portfolio.css";

const PortfolioPage = () => {
  return (
    <>
      {/* section 1 */}
      <section className="pageBanner portfolio-banner">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner_content text-center">
                <h4>
                  <a href="#">home</a> - portfolio
                </h4>
                <h1>portfolio</h1>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className="commonSection porfolioPage">
        <TabComponent />
      </section>
    </>
  );
};

export default PortfolioPage;
