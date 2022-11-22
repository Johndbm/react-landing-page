import React from "react";

const Jumbotron = () => {
	return (
        <div className="body bg-white">
            <div className="container-fluid d-flexbox">
                <div className="row justify-content-center">
                    <div className="col-12 d-flex align-items-center justify-content-center text-center text-capitalize">
                        <img src="https://picsum.photos/200/300" className="w-100" alt="..." /> 
                        <div className="row position-absolute w-100 px-4 mx-1 my-5">
                            <div className="col-12 bg-white mt-3">
                                <h1 className="display-1 fw-bolder">one page wonder</h1>
                            </div>
                            <div className="col-12 bg-white my-4">
                                <h4 className="display-4 fw-bolder">knock your socks off</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div> 
	);
};


////////////// JUMBOTRON FRAGMENT        //////////
//<div className="body bg-white">
//    <div className="container-fluid d-flexbox">
//        <div className="row justify-content-center">
//            <div className="col-12 d-flex align-items-center justify-content-center text-center text-capitalize">
//                <img src="https://picsum.photos/200/300" className="w-100" alt="..."> 
//                <div className="row position-absolute w-100 px-4 mx-1 my-5">
//                    <div className="col-12 bg-white mt-3">
//                        <h1 className="display-1 fw-bolder">one page wonder</h1>
//                    </div>
//                    <div className="col-12 bg-white my-4">
//                        <h4 className="display-4 fw-bolder">knock your socks off</h4>
//                    </div>
//                </div>
//            </div>
//        </div>
//    </div>
//</div> 