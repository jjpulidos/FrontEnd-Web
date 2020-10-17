import React from "react";
import SideNav, {Nav, NavItem, NavText, Toggle} from './StyledSideNav';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import styled from 'styled-components';
import {Col, Image, Row} from "react-bootstrap";
import Logo from "../../assets/images/logo.png";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";


// const navWidthCollapsed = 64;
const navWidthExpanded = 300;

const NavHeader = styled.div`
    display: ${props => (props.expanded ? 'block' : 'none')};
    white-space: nowrap;    
    color: #fff;
    > * {
        color: inherit;
        background-color: inherit;
    }
`;

// height: 20px + 10px + 10px = 40px
const NavTitle = styled.div`
    font-size: 1.5em;
    line-height: 20px;
    padding: 20px 0;
`;

const NavInfoPane = styled.div`
    float: left;
    width: 100%;
    padding: 5px 20px;
    background-color: rgb(214,93,177,0.5);
`;

const Separator = styled.div`
    clear: both;
    position: relative;
    margin: 0;
    background-color: #ddd;
    height: 1px;
`;


class SideBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            expanded: true
        }
    }

    render() {
        const {expanded} = this.state;
        const navItems = this.props.data.map((row) => {
            return (
                <NavItem eventKey={row.id} key={row.id} style={{height: "60px"}}
                         className={"mt-0"}>
                    <NavText style={{color: "#000", marginLeft: "20px", display: "true"}}>
                        <img src={"/icons/"+row.icon+".png"} style={{width: "20px", color: "#A30021", marginRight: "10px"}} alt=""/>
                        {row.text}
                    </NavText>
                    <Separator/>
                </NavItem>

            );
        });
        return (
            <SideNav

                style={{minWidth: expanded ? navWidthExpanded : navWidthExpanded, backgroundColor:"#5E90F2"}}
                onSelect={(selected) => {
                    this.props.handler(selected);
                }}
                onToggle={() => {
                    this.setState({expanded: true});
                }}

            >
                <Toggle style={{backgroundColor: expanded ? "#A30021" : "#A30021", height: "57px", display: "none"}}/>
                <NavHeader expanded={expanded} style={{backgroundColor: "#fff"}}>
                    <NavTitle>
                        <i><Image className={"ml-2 mb-1"} src={Logo} style={{height: "60px"}} fluid/></i>
                        <p style={{display: "inline", fontSize: "25px", marginLeft: "35px", color: "#000"}}
                           className={"mt-2"}>WeStudy </p>
                    </NavTitle>
                    <NavInfoPane style={{backgroundColor: "#5E90F2", backgroundPosition: "center", minHeight: "50px"}}>
                        <Row>
                            <Col xs={3}>
                                <FontAwesomeIcon icon={faUserCircle}
                                                 style={{fontSize: "3em", marginTop: "15px", color: "#fff"}}/>
                            </Col>
                            <Col >
                                <p className={"mt-3"} style={{fontWeight: "bold", color: "#fff"}}> Bryan Daniel Gomez</p>
                                <p style={{marginTop: "-15px", color: "#fff"}}> jcgomezlo@unal.edu.co </p>
                            </Col>
                        </Row>
                        <hr/>
                    </NavInfoPane>
                </NavHeader>
                <Nav defaultSelected="home" style={{backgroundColor: "#5E90F2"}}>
                    {navItems}
                </Nav>
            </SideNav>


        );
    }
}

export default SideBar;