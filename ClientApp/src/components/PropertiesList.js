﻿import React from 'react';

function PropertiesList() {
    return (
        <>
            <section className="intro-single">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 col-lg-8">
                            <div className="title-single-box">
                                <h1 className="title-single">Our Amazing Properties</h1>
                                <span className="color-text-a">Grid Properties</span>
                            </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                            <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item">
                                        <a href="#">Home</a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Properties Grid
                                    </li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>

            <section className="property-grid grid">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <div className="grid-option">
                                <form>
                                    <select className="custom-select">
                                        <option selected>All</option>
                                        <option value="1">New to Old</option>
                                        <option value="2">For Rent</option>
                                        <option value="3">For Sale</option>
                                    </select>
                                </form>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-box-a card-shadow">
                                <div className="img-box-a">
                                    <img src="assets/img/property-1.jpg" alt="" className="img-a img-fluid" />
                                </div>
                                <div className="card-overlay">
                                    <div className="card-overlay-a-content">
                                        <div className="card-header-a">
                                            <h2 className="card-title-a">
                                                <a href="#">204 Mount
                                                   <br /> Olive Road Two
                                                </a>
                                            </h2>
                                        </div>
                                        <div className="card-body-a">
                                            <div className="price-box d-flex">
                                                <span className="price-a">rent | $ 12.000</span>
                                            </div>
                                            <a href="property-single.html" className="link-a">Click here to view
                                                <span className="bi bi-chevron-right"></span>
                                            </a>
                                        </div>
                                        <div className="card-footer-a">
                                            <ul className="card-info d-flex justify-content-around">
                                                <li>
                                                    <h4 className="card-info-title">Area</h4>
                                                    <span>340m
                                                        <sup>2</sup>
                                                    </span>
                                                </li>
                                                <li>
                                                    <h4 className="card-info-title">Beds</h4>
                                                    <span>2</span>
                                                </li>
                                                <li>
                                                    <h4 className="card-info-title">Baths</h4>
                                                    <span>4</span>
                                                </li>
                                                <li>
                                                    <h4 className="card-info-title">Garages</h4>
                                                    <span>1</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-box-a card-shadow">
                                <div className="img-box-a">
                                    <img src="assets/img/property-3.jpg" alt="" className="img-a img-fluid" />
                                </div>
                                <div className="card-overlay">
                                    <div className="card-overlay-a-content">
                                        <div className="card-header-a">
                                            <h2 className="card-title-a">
                                                <a href="#">204 Mount
                        <br /> Olive Road Two</a>
                                            </h2>
                                        </div>
                                        <div className="card-body-a">
                                            <div className="price-box d-flex">
                                                <span className="price-a">rent | $ 12.000</span>
                                            </div>
                                            <a href="property-single.html" className="link-a">Click here to view
                      <span className="bi bi-chevron-right"></span>
                                            </a>
                                        </div>
                                        <div className="card-footer-a">
                                            <ul className="card-info d-flex justify-content-around">
                                                <li>
                                                    <h4 className="card-info-title">Area</h4>
                                                    <span>340m
                          <sup>2</sup>
                                                    </span>
                                                </li>
                                                <li>
                                                    <h4 className="card-info-title">Beds</h4>
                                                    <span>2</span>
                                                </li>
                                                <li>
                                                    <h4 className="card-info-title">Baths</h4>
                                                    <span>4</span>
                                                </li>
                                                <li>
                                                    <h4 className="card-info-title">Garages</h4>
                                                    <span>1</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-box-a card-shadow">
                                <div className="img-box-a">
                                    <img src="assets/img/property-6.jpg" alt="" className="img-a img-fluid" />
                                </div>
                                <div className="card-overlay">
                                    <div className="card-overlay-a-content">
                                        <div className="card-header-a">
                                            <h2 className="card-title-a">
                                                <a href="#">204 Mount
                        <br /> Olive Road Two</a>
                                            </h2>
                                        </div>
                                        <div className="card-body-a">
                                            <div className="price-box d-flex">
                                                <span className="price-a">rent | $ 12.000</span>
                                            </div>
                                            <a href="property-single.html" className="link-a">Click here to view
                      <span className="bi bi-chevron-right"></span>
                                            </a>
                                        </div>
                                        <div className="card-footer-a">
                                            <ul className="card-info d-flex justify-content-around">
                                                <li>
                                                    <h4 className="card-info-title">Area</h4>
                                                    <span>340m
                          <sup>2</sup>
                                                    </span>
                                                </li>
                                                <li>
                                                    <h4 className="card-info-title">Beds</h4>
                                                    <span>2</span>
                                                </li>
                                                <li>
                                                    <h4 className="card-info-title">Baths</h4>
                                                    <span>4</span>
                                                </li>
                                                <li>
                                                    <h4 className="card-info-title">Garages</h4>
                                                    <span>1</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-box-a card-shadow">
                                <div className="img-box-a">
                                    <img src="assets/img/property-7.jpg" alt="" className="img-a img-fluid" />
                                </div>
                                <div className="card-overlay">
                                    <div className="card-overlay-a-content">
                                        <div className="card-header-a">
                                            <h2 className="card-title-a">
                                                <a href="#">204 Mount
                        <br /> Olive Road Two</a>
                                            </h2>
                                        </div>
                                        <div className="card-body-a">
                                            <div className="price-box d-flex">
                                                <span className="price-a">rent | $ 12.000</span>
                                            </div>
                                            <a href="property-single.html" className="link-a">Click here to view
                      <span className="bi bi-chevron-right"></span>
                                            </a>
                                        </div>
                                        <div className="card-footer-a">
                                            <ul className="card-info d-flex justify-content-around">
                                                <li>
                                                    <h4 className="card-info-title">Area</h4>
                                                    <span>340m
                          <sup>2</sup>
                                                    </span>
                                                </li>
                                                <li>
                                                    <h4 className="card-info-title">Beds</h4>
                                                    <span>2</span>
                                                </li>
                                                <li>
                                                    <h4 className="card-info-title">Baths</h4>
                                                    <span>4</span>
                                                </li>
                                                <li>
                                                    <h4 className="card-info-title">Garages</h4>
                                                    <span>1</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-box-a card-shadow">
                                <div className="img-box-a">
                                    <img src="assets/img/property-8.jpg" alt="" className="img-a img-fluid" />
                                </div>
                                <div className="card-overlay">
                                    <div className="card-overlay-a-content">
                                        <div className="card-header-a">
                                            <h2 className="card-title-a">
                                                <a href="#">204 Mount
                                                <br /> Olive Road Two</a>
                                            </h2>
                                        </div>
                                        <div className="card-body-a">
                                            <div className="price-box d-flex">
                                                <span className="price-a">rent | $ 12.000</span>
                                            </div>
                                            <a href="property-single.html" className="link-a">Click here to view
                                                 <span className="bi bi-chevron-right"></span>
                                            </a>
                                        </div>
                                        <div className="card-footer-a">
                                            <ul className="card-info d-flex justify-content-around">
                                                <li>
                                                    <h4 className="card-info-title">Area</h4>
                                                    <span>340m
                                                       <sup>2</sup>
                                                    </span>
                                                </li>
                                                <li>
                                                    <h4 className="card-info-title">Beds</h4>
                                                    <span>2</span>
                                                </li>
                                                <li>
                                                    <h4 className="card-info-title">Baths</h4>
                                                    <span>4</span>
                                                </li>
                                                <li>
                                                    <h4 className="card-info-title">Garages</h4>
                                                    <span>1</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card-box-a card-shadow">
                                <div className="img-box-a">
                                    <img src="assets/img/property-10.jpg" alt="" className="img-a img-fluid" />
                                </div>
                                <div className="card-overlay">
                                    <div className="card-overlay-a-content">
                                        <div className="card-header-a">
                                            <h2 className="card-title-a">
                                                <a href="#">204 Mount
                        <br /> Olive Road Two</a>
                                            </h2>
                                        </div>
                                        <div className="card-body-a">
                                            <div className="price-box d-flex">
                                                <span className="price-a">rent | $ 12.000</span>
                                            </div>
                                            <a href="property-single.html" className="link-a">Click here to view
                      <span className="bi bi-chevron-right"></span>
                                            </a>
                                        </div>
                                        <div className="card-footer-a">
                                            <ul className="card-info d-flex justify-content-around">
                                                <li>
                                                    <h4 className="card-info-title">Area</h4>
                                                    <span>340m
                          <sup>2</sup>
                                                    </span>
                                                </li>
                                                <li>
                                                    <h4 className="card-info-title">Beds</h4>
                                                    <span>2</span>
                                                </li>
                                                <li>
                                                    <h4 className="card-info-title">Baths</h4>
                                                    <span>4</span>
                                                </li>
                                                <li>
                                                    <h4 className="card-info-title">Garages</h4>
                                                    <span>1</span>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12">
                            <nav className="pagination-a">
                                <ul className="pagination justify-content-end">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="#" tabindex="-1">
                                            <span className="bi bi-chevron-left"></span>
                                        </a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">1</a>
                                    </li>
                                    <li className="page-item active">
                                        <a className="page-link" href="#">2</a>
                                    </li>
                                    <li className="page-item">
                                        <a className="page-link" href="#">3</a>
                                    </li>
                                    <li className="page-item next">
                                        <a className="page-link" href="#">
                                            <span className="bi bi-chevron-right"></span>
                                        </a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export { PropertiesList };