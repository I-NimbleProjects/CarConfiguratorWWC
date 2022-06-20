import { FaBars } from 'react-icons/fa';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export const Nav = styled.nav`
  background: rgba(0,0,0,0.92);
  height: 70px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem calc((100vw - 1250px) / 2);
  font-size: 14px;
  line-height: 26px;
  // margin-top: 30px;
  margin-bottom: 10px;
  padding-bottom: 30px;
  @media screen and (max-width: 990px){
    flex-direction: row-reverse;
    justify-content: center;
    text-align: left;
    padding: 0px;
    height: 54px;
  }
`;

export const NavLink = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 5px 20px;
  height: 100%;
  cursor: pointer;
  // border-top: 1px solid;
  // border-bottom: 1px solid;
  border: 1px solid transparent;
  border-radius: 30px;
  font-weight: 600;
  // margin-right:200px;
  &.active {
    color: white;
    border-color: white;
  }
  @media screen and (min-width: 991px) {
  &:hover {
    color: white;
    border-color: white;
    transition: color 300ms linear;
  }
}

  @media screen and (max-width: 990px) {
    width: 100%;
    height: 30px;
    // border-bottom: 1px solid;
    border-top: 1px solid #eeeeee;
    border-radius: 0px;
    text-align: left;
    padding: 5px 40px;
    padding-right: 5px;
  }
`;

export const NavLink2 = styled(Link)`
  color: white;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 5px 20px;
  height: 100%;
  cursor: pointer;
  // border-top: 1px solid;
  border: 1px solid transparent;
  border-radius: 30px;
  color: white;
  border-color: white;
  font-weight: 600;
  // margin-right: 200px;
  @media screen and (max-width: 990px) {
    width: 100%;
    height: 30px;
    border-top: 1px solid #eeeeee;
    border-radius: 0px;
    text-align: left;
    padding: 5px 40px;
    padding-right: 5px;
  }
`;

export const Bars = styled(FaBars)`
  display: none;
  color: white;
  @media screen and (max-width: 990px) {
    display: flex;
    position: absolute;
    top: -10px;
    left: 60px;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
    // z-index: 100;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: 190px; 
  @media screen and (max-width: 990px) {
    width: 100%;
    max-width: 350px;
    height: 90vh;
    position: absolute;
    // top: 105px;
    left: ${({click}) => click ? 0 : "-100%"};
    flex-direction: column;
    transition: transform;
    transition-duration: .9s;
    overflow: auto;
    background-color: rgba(0,0,0,0.92);
    color: black;
    z-index: 99;
    margin-right: 50px;
    text-align: left;
    padding-top: 100px;
  }
  // padding: 30px;
  padding-top: 40px;
  padding-bottom: 10px;
`;