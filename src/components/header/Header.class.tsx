import React from "react";
import logo from "../../assets/logo.svg";
import styles from "./Header.module.css";
import { Layout, Typography, Input, Menu, Button, Dropdown } from "antd";
import { GlobalOutlined } from "@ant-design/icons";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { LanguageState } from "../../redux/languageReducer";

export const Header: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  return (
    <div className={styles["app-header"]}>
      {/* top-header */}
      <div className={styles["top-header"]}>
        <div className={styles.inner}>
          <Typography.Text className={styles["title-header"]}>
            Make travel happier
          </Typography.Text>
          <Dropdown.Button
            style={{ marginLeft: 15 }}
            overlay={
              <Menu
                items={[
                  { key: "1", label: "中文" },
                  { key: "2", label: "English" },
                ]}
              />
            }
            icon={<GlobalOutlined />}
          >
            Languages
          </Dropdown.Button>
          <Button.Group className={styles["button-group"]}>
            <Button onClick={() => navigate("/register")}>注册</Button>
            <Button onClick={() => navigate("/signin")}>登录</Button>
          </Button.Group>
        </div>
      </div>
      <Layout.Header className={styles["main-header"]}>
        <span onClick={() => navigate("/")}>
          <img src={logo} alt="" className={styles["App-logo"]} />
          <Typography.Title className={styles["title"]}>
            Roy Travel Agency
          </Typography.Title>
        </span>
        <Input.Search
          placeholder={"please type in the destination, theme or keywords"}
          className={styles["search-input"]}
        />
      </Layout.Header>
      <Menu
        mode={"horizontal"}
        className={styles["main-menu"]}
        items={[
          { key: 1, label: "Main" },
          { key: 2, label: "Flight" },
          { key: 3, label: "Hotel" },
          { key: 4, label: "Flight + Hotel" },
          { key: 5, label: "Car Rentals" },
          { key: 6, label: "Cruise" },
          { key: 7, label: "Attractions" },
          { key: 8, label: "Aiport Taxis" },
          { key: 9, label: "Special" },
          { key: 10, label: "Sales" },
        ]}
      ></Menu>
    </div>
  );
};
