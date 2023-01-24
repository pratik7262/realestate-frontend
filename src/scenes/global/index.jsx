import {
    AccountTreeOutlined,
    ContactPhoneOutlined,
    Contacts,
    ContactsOutlined,
    DesignServicesOutlined,
    HandymanOutlined,
    HelpOutline,
    HomeOutlined,
    Info,
    InfoOutlined,
    LocationCityOutlined,
    MenuOutlined,
    SchoolOutlined,
  } from "@mui/icons-material";
  import { IconButton, Typography } from "@mui/material";
  import { Box } from "@mui/system";
  import React, { useState } from "react";
  import { Menu, MenuItem, ProSidebar } from "react-pro-sidebar";
  import "react-pro-sidebar/dist/css/styles.css";
  import { Link } from "react-router-dom";
  import { colors } from "../../theme";
  
  const Item = ({ title, to, icon, selected, setSelected }) => {
    return (
      <MenuItem
        active={selected === title}
        icon={icon}
        style={{ color: colors.grey[100],margin:"20px 0" }}
        onClick={() => {
          setSelected(title);
        }}
      >
        <Typography>{title}</Typography>
        <Link to={to} />
      </MenuItem>
    );
  };
  
  const SideBar = ({ isCollapsed, setIsCollapsed }) => {
    const [selected, setSelected] = useState("Dashboard");
    return (
      <Box
        sx={{
          "& .pro-sidebar-inner": {
            background: `${colors.primary[400]} !important`,
          },
          "& .pro-icon-wrapper": {
            backgroundColor: "transparent !important",
          },
          "& .pro-inner-item": {
            padding: "5px 35px 5px 20px !important",
          },
          "& .pro-inner-item:hover": {
            color: "#868dfb !important",
          },
          "& .pro-menu-item.active": {
            color: "#6870fa !important",
          },
        }}
      >
        <ProSidebar collapsed={isCollapsed}>
          <Menu iconShape="square">
            <MenuItem
              onClick={() => {
                setIsCollapsed(!isCollapsed);
              }}
              icon={isCollapsed ? <MenuOutlined /> : undefined}
              style={{ margin: "10px 0 20px 0", color: colors.grey[100] }}
            >
              {!isCollapsed && (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  ml="15px"
                >
                  <Typography variant="h4" fontWeight={700}>
                    Comapny Name
                  </Typography>
                  <IconButton
                    onClick={() => {
                      setIsCollapsed(!isCollapsed);
                    }}
                    sx={{ color: colors.grey[100] }}
                  >
                    <MenuOutlined />
                  </IconButton>
                </Box>
              )}
            </MenuItem>
  
            <Box sx={{
                mt:'50px'
            }} paddingLeft={isCollapsed ? undefined : "10%"}>
              <Item
                title="Dashboard"
                to="/"
                icon={<HomeOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Active Properties"
                to="/listing"
                icon={<LocationCityOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
             <Item
                title="About"
                to="/contact"
                icon={<InfoOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
              <Item
                title="Contact"
                to="/contact"
                icon={<ContactsOutlined />}
                selected={selected}
                setSelected={setSelected}
              />
               <Item
                title="FAQ"
                to="/faq"
                icon={<HelpOutline/>}
                selected={selected}
                setSelected={setSelected}
              />
            </Box>
          </Menu>
        </ProSidebar>
      </Box>
    );
  };
  
  export default SideBar;
  