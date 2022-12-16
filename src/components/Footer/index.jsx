import React from 'react';
import "./style.scss";

const index = () => {
    return (
        <>
            <footer className='footer bg-success p-3 text-center'>
                <div className="container">
                    <p className="footer-text text-white">Powered by N70 {new Date().getFullYear()}</p>
                </div>
            </footer> 
        </>
    );
};

export default index;