import React from "react";

const Card = () => {
	return (
        <div className="container col-sm-3 my-3">
            <div className="card">
                <img src="https://picsum.photos/500/325" className="card-img-top " alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
	);
};

export default Card;