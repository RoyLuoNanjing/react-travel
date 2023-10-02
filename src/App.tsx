import React from "react";
import styles from "./App.module.css";
import { Header, Footer, SideMenu, Carousel } from "./components";
import { Row, Col, Typography } from "antd";
import { productList1, productList2, productList3 } from "./mockups";
import sideImages from "./assets/images/sider_2019_12-09.png";
import sideImages2 from "./assets/images/sider_2019_02-04.png";
import sideImages3 from "./assets/images/sider_2019_02-04-2.png";
import { ProductCollection } from "./components";

function App() {
  return (
    <div className={styles.App}>
      <Header />
      {/* Content */}
      <div className={styles["page-content"]}>
        <Row style={{ marginTop: 20 }}>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
        <ProductCollection
          title={<Typography.Title level={3} type="warning"></Typography.Title>}
          sideImage={sideImages}
          products={productList1}
        />
      </div>
      <Footer />
    </div>
  );
}

export default App;
