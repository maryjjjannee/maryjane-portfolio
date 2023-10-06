import React from "react";
import { RiHomeHeartFill } from "react-icons/ri";
import { IoHeartDislikeSharp , IoBookmarkSharp ,IoBrowsers } from "react-icons/io5";
export default function sidebar() {
  return (
    <div >
      {/* Main Sidebar Container */}
      <aside className="main-sidebar sidebar-dark-primary elevation-4">
        {/* Brand Logo */}
        <a href="index3.html" className="brand-link">
          
          <span className="brand-text font-weight-light"><IoBrowsers  /> Hello !</span>
        </a>
        {/* Sidebar */}
        <div className="sidebar">
          {/* Sidebar user panel (optional) */}
          <div className="user-panel mt-3 pb-3 mb-3 d-flex">
            <div className="image">
              <img
                img
                src="https://scontent.fbkk21-1.fna.fbcdn.net/v/t39.30808-6/279373789_3441697272725650_3564448249542050222_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=sevdszcquFAAX9K37cE&_nc_ht=scontent.fbkk21-1.fna&oh=00_AT_XzRZOpBIvXAv4Um0rVwbigWOArO62LZCIJUHyrLboGA&oe=6318F32F"
                className="img-circle elevation-2"
                alt="User Image"
              />
            </div>
            <div className="info">
              <a href="#" className="d-block">
                Onwanya Sakharet
              </a>
            </div>
          </div>
          {/* SidebarSearch Form */}
          <div className="form-inline">
            <div className="input-group" data-widget="sidebar-search">
              <input
                className="form-control form-control-sidebar"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <div className="input-group-append">
                <button className="btn btn-sidebar">
                  <i className="fas fa-search fa-fw" />
                </button>
              </div>
            </div>
          </div>
          {/* Sidebar Menu */}
          <nav className="mt-2">
            <ul
              className="nav nav-pills nav-sidebar flex-column"
              data-widget="treeview"
              role="menu"
              data-accordion="false"
            >
              {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
              <li className="nav-item menu-open">
                <ul className="nav nav-treeview">
                  <li className="nav-item">
                    <a href="/Home" className="nav-link active">
                      <li><RiHomeHeartFill /> Home </li>
                    </a>
                    </li>
                  <li className="nav-item">
                    <a href="/About" className="nav-link">
                      <p><IoHeartDislikeSharp/>About Me</p>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a href="/Dashboard" className="nav-link">
                      <p><IoBookmarkSharp/>My Project</p>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
          {/* /.sidebar-menu */}
        </div>
        {/* /.sidebar */}
      </aside>
    </div>
  );
}
