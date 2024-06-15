import React, { Component } from 'react';
import Link from 'next/link';

class AccountCreateArea extends Component {
    render() {
        return (
            <div className="account-create-area py-1 py-md-3">
                <div className="container account-create-content">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <div className='head3'>Apply for an account in minutes</div>
                            <p className='get'>Get your Bumppy Payment account today!</p>
                        </div>
                        
                        <div className="col-lg-4">
                            <div className="create-account pb-3 pb-md-0 ">
                                <Link href="https://dashboard.bumppy.com/register">
                                    <a target="_blank" className=" btn btn-primary">Sign Up for free</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AccountCreateArea;