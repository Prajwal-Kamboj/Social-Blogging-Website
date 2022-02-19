import Link from "next/link";
import React from "react";


export default function HomeCentre( {title, desc}) {
    return(
        <div className="bg-dark text-secondary px-4 py-5 text-center" style={{marginTop:"50vh"}}>
                        <div className="py-5">
                        <h1 className="display-5 fw-bold text-white">{title}</h1>
                        <div className="col-lg-6 mx-auto">
                            <p className="fs-5 mb-4">{desc}</p>
                            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                            <Link href='/users'>
                            <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 mr-3 fw-bold">Profile</button>
                            </Link>
                            <button type="button" className="btn btn-outline-light btn-lg px-4">Docs</button>
                            </div>
                        </div>
                        </div>
                    </div>
    );
}